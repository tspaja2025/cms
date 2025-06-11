<script lang="ts">
	import { onMount } from 'svelte';
	import type { KanbanCard, KanbanColumn, Tag, TagColor } from '$lib/components/kanban/types/types';
	import { v4 as uuidv4 } from 'uuid';

	let {
		cardId,
		columnId,
		columns,
		title = '',
		description = '',
		tags = [],
		createdAt = new Date().toISOString(),
		updatedAt = new Date().toISOString(),
		newTagName = '',
		newTagColor = 'primary',
		dispatch
	}: {
		cardId?: string | null;
		columnId?: string;
		columns: KanbanColumn[];
		title?: string;
		description?: string;
		tags: Tag[];
		createdAt?: string;
		updatedAt?: string;
		newTagName?: string;
		newTagColor?: TagColor;
		dispatch?: any;
	} = $props();

	// export let cardId: string | null;
	// export let columnId: string;
	// export let columns: KanbanColumn[];

	// const dispatch = createEventDispatcher();

	// let title = '';
	// let description = '';
	// let tags: Tag[] = [];
	// let createdAt = new Date().toISOString();
	// let updatedAt = new Date().toISOString();
	// let newTagName = '';
	// let newTagColor: TagColor = 'primary';

	// $: isNewCard = cardId === null;
	// $: currentColumn = columns.find((col) => col.id === columnId);
	let isNewCard = $derived(cardId === null);
	let currentColumn = $derived(columns.find((col) => col.id === columnId));

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

		// Focus the title input when the modal opens
		setTimeout(() => {
			document.getElementById('card-title')?.focus();
		}, 100);
	});

	function handleClose() {
		dispatch('close');
	}

	function handleSave() {
		if (!title.trim()) return;

		const card: KanbanCard = {
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

	function getTagColorClass(tagColor: TagColor): string {
		const colorMap = {
			primary: 'bg-primary-100 text-primary-800 border-primary-300',
			secondary: 'bg-secondary-100 text-secondary-800 border-secondary-300',
			accent: 'bg-accent-100 text-accent-800 border-accent-300',
			success: 'bg-success-100 text-success-800 border-success-300',
			warning: 'bg-warning-100 text-warning-800 border-warning-300',
			error: 'bg-error-100 text-error-800 border-error-300'
		};

		return colorMap[tagColor] || 'bg-neutral-100 text-neutral-800 border-neutral-300';
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

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			handleClose();
		} else if (e.key === 'Enter' && e.ctrlKey) {
			handleSave();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<div
	class="bg-opacity-50 animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-black p-4"
>
	<div
		class="rounded-apple shadow-apple-xl animate-slide-up w-full max-w-2xl bg-white"
		role="dialog"
		aria-labelledby="card-modal-title"
	>
		<div class="flex items-start justify-between border-b border-neutral-200 p-6">
			<h2 id="card-modal-title" class="text-xl font-semibold">
				{isNewCard ? 'Add New Card' : 'Edit Card'}
			</h2>
			<button
				class="text-2xl text-neutral-500 transition-colors hover:text-neutral-800"
				onclick={handleClose}
				aria-label="Close"
			>
				×
			</button>
		</div>

		<div class="max-h-[calc(100vh-200px)] overflow-y-auto p-6">
			<div class="mb-4">
				<label for="card-title" class="mb-1 block text-sm font-medium text-neutral-700">
					Title
				</label>
				<input
					type="text"
					id="card-title"
					class="input"
					bind:value={title}
					placeholder="Enter card title"
				/>
			</div>

			<div class="mb-4">
				<label for="card-description" class="mb-1 block text-sm font-medium text-neutral-700">
					Description
				</label>
				<textarea
					id="card-description"
					class="input min-h-[120px]"
					bind:value={description}
					placeholder="Enter card description"
				></textarea>
			</div>

			<div class="mb-6">
				<label class="mb-2 block text-sm font-medium text-neutral-700" for="tags"> Tags </label>

				<div class="mb-3 flex flex-wrap gap-2">
					{#each tags as tag (tag.id)}
						<div class="tag flex items-center gap-1 border {getTagColorClass(tag.color)}">
							{tag.name}
							<button
								class="hover:text-error-600 ml-1 text-xs transition-colors"
								onclick={() => removeTag(tag.id)}
								aria-label="Remove tag"
							>
								×
							</button>
						</div>
					{/each}

					{#if tags.length === 0}
						<div class="text-sm text-neutral-500">No tags added yet</div>
					{/if}
				</div>

				<div class="flex gap-2">
					<input
						type="text"
						class="input flex-1"
						bind:value={newTagName}
						placeholder="Add a tag"
						onkeydown={(e) => e.key === 'Enter' && addTag()}
					/>

					<div class="relative">
						<select class="input appearance-none bg-transparent pr-8" bind:value={newTagColor}>
							{#each tagColors as color, colorIndex (colorIndex)}
								<option value={color}>{getTagDisplayName(color)}</option>
							{/each}
						</select>
						<div class="pointer-events-none absolute inset-y-0 right-2 flex items-center">
							<svg
								class="h-4 w-4 text-neutral-500"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</div>
					</div>

					<button class="btn btn-secondary" onclick={addTag}> Add </button>
				</div>
			</div>

			{#if !isNewCard}
				<div class="mb-4 flex justify-between text-xs text-neutral-500">
					<div>Created: {formattedCreatedDate}</div>

					{#if columns.length > 1}
						<div class="flex items-center gap-2">
							<span>Move to:</span>
							<div class="relative">
								<select
									class="input appearance-none bg-transparent py-1 pr-6 text-xs"
									onchange={(e) => handleMoveCard(e.currentTarget.value)}
									value={columnId}
								>
									{#each columns as col, colIndex (colIndex)}
										<option value={col.id} disabled={col.id === columnId}>
											{col.title}
										</option>
									{/each}
								</select>
								<div class="pointer-events-none absolute inset-y-0 right-1 flex items-center">
									<svg
										class="h-3 w-3 text-neutral-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</div>
							</div>
						</div>
					{/if}
				</div>
			{/if}
		</div>

		<div class="flex justify-between border-t border-neutral-200 p-6">
			<div>
				{#if !isNewCard}
					<button class="btn btn-danger" onclick={handleDelete}> Delete </button>
				{/if}
			</div>

			<div class="flex gap-3">
				<button class="btn btn-secondary" onclick={handleClose}> Cancel </button>
				<button class="btn btn-primary" onclick={handleSave} disabled={!title.trim()}>
					{isNewCard ? 'Add Card' : 'Save Changes'}
				</button>
			</div>
		</div>
	</div>
</div>
