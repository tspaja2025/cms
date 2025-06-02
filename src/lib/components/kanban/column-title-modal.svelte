<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';

	export let title = '';
	export let isNew = false;

	const dispatch = createEventDispatcher();

	function handleClose() {
		dispatch('close');
	}

	function handleSave() {
		if (title.trim()) {
			dispatch('save', { title });
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			handleClose();
		} else if (e.key === 'Enter') {
			handleSave();
		}
	}

	onMount(() => {
		// Focus the input when the modal opens
		setTimeout(() => {
			document.getElementById('column-title')?.focus();
		}, 100);
	});
</script>

<svelte:window on:keydown={handleKeydown} />

<div
	class="bg-opacity-50 animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-black p-4"
>
	<div
		class="rounded-apple shadow-apple-xl animate-bounce-in w-full max-w-md bg-white"
		role="dialog"
		aria-labelledby="column-modal-title"
	>
		<div class="flex items-start justify-between border-b border-neutral-200 p-6">
			<h2 id="column-modal-title" class="text-xl font-semibold">
				{isNew ? 'Add New Column' : 'Edit Column Title'}
			</h2>
			<button
				class="text-2xl text-neutral-500 transition-colors hover:text-neutral-800"
				on:click={handleClose}
				aria-label="Close"
			>
				×
			</button>
		</div>

		<div class="p-6">
			<div class="mb-4">
				<label for="column-title" class="mb-1 block text-sm font-medium text-neutral-700">
					Title
				</label>
				<input
					type="text"
					id="column-title"
					class="input"
					bind:value={title}
					placeholder="Enter column title"
				/>
			</div>
		</div>

		<div class="flex justify-end border-t border-neutral-200 p-6">
			<div class="flex gap-3">
				<button class="btn btn-secondary" on:click={handleClose}> Cancel </button>
				<button class="btn btn-primary" on:click={handleSave} disabled={!title.trim()}>
					{isNew ? 'Add Column' : 'Save Changes'}
				</button>
			</div>
		</div>
	</div>
</div>
