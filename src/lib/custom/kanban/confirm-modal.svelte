<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';

	export let title: string;
	export let message: string;
	export let confirmText: string = 'Confirm';
	export let cancelText: string = 'Cancel';
	export let isDangerous: boolean = false;
	export let open: boolean = true; // Added to control modal visibility

	const dispatch = createEventDispatcher();

	function handleConfirm() {
		dispatch('confirm');
		open = false;
	}

	function handleCancel() {
		dispatch('cancel');
		open = false;
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

<Dialog.Root bind:open>
	<Dialog.Header>
		<Dialog.Title>{title}</Dialog.Title>
		<Dialog.Description>
			{message}
		</Dialog.Description>
	</Dialog.Header>
	<Dialog.Content class="sm:max-w-md">
		<Dialog.Footer class="gap-3 sm:justify-end">
			<Button id="cancel-button" variant="outline" onclick={handleCancel}>
				{cancelText}
			</Button>
			<Button variant={isDangerous ? 'destructive' : 'default'} onclick={handleConfirm}>
				{confirmText}
			</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
