<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import InvoiceForm from '$lib/pages/invoice/invoice-form.svelte';
	import { invoiceStore } from '$lib/store';
	import type { Invoice } from '$lib/types';
	import { onMount } from 'svelte';

	const id = page.params.id;

	let invoice = $state<Invoice | null>(null);
	let loading = $state(true);
	let error = $state<string | null>(null);

	onMount(() => {
		loadInvoice();
	});

	function loadInvoice() {
		loading = true;
		error = null;

		try {
			const found = invoiceStore.getById(id as string);

			if (found) {
				invoice = found;
			} else {
				error = 'Invoice not found';
			}
		} catch (err) {
			error = 'Error loading invoice';
			console.error(err);
		} finally {
			loading = false;
		}
	}
</script>

<svelte:head>
	<title>CMS | Admin | Invoice edit</title>
	<meta name="description" content="CMS" />
</svelte:head>

<div class="mx-auto grid gap-4 md:max-w-full lg:max-w-7xl">
	<div class="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
		{#if loading}
			<div class="flex h-64 items-center justify-center">
				<div
					class="border-primary-600 h-12 w-12 animate-spin rounded-full border-t-2 border-b-2"
				></div>
			</div>
		{:else if error}
			<div class="bg-error-50 border-error-200 text-error-700 rounded-lg border px-4 py-3">
				<p>{error}</p>
				<a class="text-error-700 mt-2 font-medium underline" href={resolve('/admin/invoice/list')}>
					Back to invoices
				</a>
			</div>
		{:else if invoice}
			<InvoiceForm {invoice} isEditing={true} />
		{/if}
	</div>
</div>
