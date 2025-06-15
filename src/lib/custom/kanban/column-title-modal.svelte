<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import * as Dialog from '$lib/components/ui/dialog';

	export let open = false;
	export let title = '';
	export let isNew = false;

	const dispatch = createEventDispatcher();

	function handleSave() {
		if (title.trim()) {
			dispatch('save', { title });
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			handleSave();
		}
	}
</script>

<Dialog.Root bind:open onOpenChange={() => dispatch('close')}>
	<Dialog.Header>
		<Dialog.Title>
			{isNew ? 'Add New Column' : 'Edit Column Title'}
		</Dialog.Title>
		<Dialog.Close asChild>
			<button
				class="ring-offset-background focus:ring-ring absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none"
				aria-label="Close"
			>
				×
			</button>
		</Dialog.Close>
	</Dialog.Header>
	<Dialog.Content
		class="sm:max-w-md"
		onKeyDown={handleKeydown}
		onEscapeKeyDown={() => dispatch('close')}
		onInteractOutside={() => dispatch('close')}
	>
		<div class="space-y-4 py-4">
			<div class="space-y-2">
				<Label for="column-title">Title</Label>
				<Input
					id="column-title"
					bind:value={title}
					placeholder="Enter column title"
					class="w-full"
					autofocus
				/>
			</div>
		</div>

		<div class="flex justify-end gap-3 border-t pt-4">
			<Button variant="outline" onclick={() => dispatch('close')}>Cancel</Button>
			<Button onclick={handleSave} disabled={!title.trim()}>
				{isNew ? 'Add Column' : 'Save Changes'}
			</Button>
		</div>
	</Dialog.Content>
</Dialog.Root>
