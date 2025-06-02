<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';

	export let title: string;
	export let message: string;
	export let confirmText: string = 'Confirm';
	export let cancelText: string = 'Cancel';
	export let isDangerous: boolean = false;

	const dispatch = createEventDispatcher();

	function handleConfirm() {
		dispatch('confirm');
	}

	function handleCancel() {
		dispatch('cancel');
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			handleCancel();
		} else if (e.key === 'Enter') {
			handleConfirm();
		}
	}

	onMount(() => {
		// Focus the cancel button when the modal opens (safer default)
		setTimeout(() => {
			document.getElementById('cancel-button')?.focus();
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
		aria-labelledby="confirm-modal-title"
	>
		<div class="p-6">
			<h2 id="confirm-modal-title" class="mb-3 text-xl font-semibold">
				{title}
			</h2>
			<p class="text-neutral-700">
				{message}
			</p>
		</div>

		<div class="flex justify-end border-t border-neutral-200 p-6">
			<div class="flex gap-3">
				<button id="cancel-button" class="btn btn-secondary" on:click={handleCancel}>
					{cancelText}
				</button>
				<button class="btn {isDangerous ? 'btn-danger' : 'btn-primary'}" on:click={handleConfirm}>
					{confirmText}
				</button>
			</div>
		</div>
	</div>
</div>
