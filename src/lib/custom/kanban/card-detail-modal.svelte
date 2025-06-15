<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Label } from '$lib/components/ui/label';
	import { Badge } from '$lib/components/ui/badge';
	import * as Select from '$lib/components/ui/select';
	import { XIcon } from '@lucide/svelte';
	import { createEventDispatcher, onMount } from 'svelte';
	import type { KanbanCardType, KanbanColumn, Tag, TagColor } from '$lib/custom/kanban/types/types';
	import { v4 as uuidv4 } from 'uuid';

	export let cardId: string | null;
	export let columnId: string;
	export let columns: KanbanColumn[];
	export let open = true;

	const dispatch = createEventDispatcher();

	let title = '';
	let description = '';
	let tags: Tag[] = [];
	let createdAt = new Date().toISOString();
	let updatedAt = new Date().toISOString();
	let newTagName = '';
	let newTagColor: TagColor = 'primary';

	$: isNewCard = cardId === null;
	$: currentColumn = columns.find((col) => col.id === columnId);

	onMount(() => {
		if (cardId) {
			const card = currentColumn?.cards.find((c) => c.id === cardId);
			if (card) {
				title = card.title;
				description = card.description;
				tags = [...card.tags];
				createdAt = card.createdAt;
				updatedAt = card.updatedAt;
			}
		}
	});

	function handleClose() {
		dispatch('close');
	}

	function handleSave() {
		if (!title.trim()) return;

		const card: KanbanCardType = {
			id: cardId || uuidv4(),
			title,
			description,
			tags,
			createdAt,
			updatedAt: new Date().toISOString()
		};

		dispatch('save', { card });
	}

	function handleDelete() {
		dispatch('delete');
	}

	function handleMoveCard(targetColumnId: string) {
		dispatch('move', { targetColumnId });
	}

	function addTag() {
		if (!newTagName.trim()) return;

		const tag: Tag = {
			id: uuidv4(),
			name: newTagName,
			color: newTagColor
		};

		tags = [...tags, tag];
		newTagName = '';
	}

	function removeTag(tagId: string) {
		tags = tags.filter((tag) => tag.id !== tagId);
	}

	function getTagVariant(tagColor: TagColor): string {
		const variantMap = {
			primary: 'primary',
			secondary: 'secondary',
			accent: 'default',
			success: 'default',
			warning: 'default',
			error: 'destructive'
		};

		return variantMap[tagColor] || 'default';
	}

	function getTagDisplayName(tagColor: TagColor): string {
		const nameMap = {
			primary: 'Blue',
			secondary: 'Purple',
			accent: 'Pink',
			success: 'Green',
			warning: 'Orange',
			error: 'Red'
		};

		return nameMap[tagColor] || 'Default';
	}

	const tagColors: TagColor[] = ['primary', 'secondary', 'accent', 'success', 'warning', 'error'];

	const formattedCreatedDate = new Date(createdAt).toLocaleString(undefined, {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit'
	});
</script>

<Dialog.Root bind:open onClose={handleClose}>
	<Dialog.Content class="max-w-2xl">
		<Dialog.Header>
			<Dialog.Title>{isNewCard ? 'Add New Card' : 'Edit Card'}</Dialog.Title>
			<Dialog.Close
				class="ring-offset-background focus:ring-ring absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none"
			>
				<XIcon class="h-4 w-4" />
				<span class="sr-only">Close</span>
			</Dialog.Close>
		</Dialog.Header>

		<div class="max-h-[calc(100vh-200px)] space-y-4 overflow-y-auto py-4">
			<div class="space-y-2">
				<Label for="card-title">Title</Label>
				<Input
					id="card-title"
					bind:value={title}
					placeholder="Enter card title"
					class="w-full"
					autofocus
				/>
			</div>

			<div class="space-y-2">
				<Label for="card-description">Description</Label>
				<Textarea
					id="card-description"
					bind:value={description}
					placeholder="Enter card description"
					class="min-h-[120px] w-full"
				/>
			</div>

			<div class="space-y-2">
				<Label>Tags</Label>

				<div class="flex flex-wrap gap-2">
					{#each tags as tag (tag.id)}
						<Badge variant={getTagVariant(tag.color)}>
							{tag.name}
							<button
								onclick={() => removeTag(tag.id)}
								class="hover:bg-accent ml-1 rounded-full"
								aria-label="Remove tag"
							>
								<X class="h-3 w-3" />
							</button>
						</Badge>
					{/each}

					{#if tags.length === 0}
						<div class="text-muted-foreground text-sm">No tags added yet</div>
					{/if}
				</div>

				<div class="flex gap-2">
					<Input
						type="text"
						bind:value={newTagName}
						placeholder="Add a tag"
						class="flex-1"
						onkeydown={(e) => e.key === 'Enter' && addTag()}
					/>

					<Select.Root bind:value={newTagColor}>
						<Select.Trigger class="w-[120px]">Color</Select.Trigger>
						<Select.Content>
							{#each tagColors as color}
								<Select.Item value={color}>
									{getTagDisplayName(color)}
								</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>

					<Button variant="outline" onclick={addTag}>Add</Button>
				</div>
			</div>

			{#if !isNewCard}
				<div class="text-muted-foreground flex justify-between text-sm">
					<div>Created: {formattedCreatedDate}</div>

					{#if columns.length > 1}
						<div class="flex items-center gap-2">
							<span>Move to:</span>
							<Select.Root value={columnId} onValueChange={handleMoveCard}>
								<Select.Trigger class="h-8 w-[150px]">Select column</Select.Trigger>
								<Select.Content>
									{#each columns as col}
										<Select.Item value={col.id} disabled={col.id === columnId}>
											{col.title}
										</Select.Item>
									{/each}
								</Select.Content>
							</Select.Root>
						</div>
					{/if}
				</div>
			{/if}
		</div>

		<Dialog.Footer>
			<div class="flex w-full justify-between">
				<div>
					{#if !isNewCard}
						<Button variant="destructive" onclick={handleDelete}>Delete</Button>
					{/if}
				</div>
				<div class="space-x-2">
					<Dialog.Close asChild>
						<Button variant="outline">Cancel</Button>
					</Dialog.Close>
					<Button onclick={handleSave} disabled={!title.trim()}>
						{isNewCard ? 'Add Card' : 'Save Changes'}
					</Button>
				</div>
			</div>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
