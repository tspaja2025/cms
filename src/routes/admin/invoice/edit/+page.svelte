<script lang="ts">
	import { onMount } from 'svelte';
	import { invoiceStore } from '$lib/custom/invoice/store/data';
	import type { Invoice } from '$lib/custom/invoice/types';
	import InvoiceForm from '$lib/custom/invoice/invoice-form.svelte';

	const id = $state('');

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
			const found = invoiceStore.getById(id);

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

{#if loading}
	<div class="flex h-64 items-center justify-center">
		<div class="border-primary-600 h-12 w-12 animate-spin rounded-full border-t-2 border-b-2"></div>
	</div>
{:else if error}
	<div class="bg-error-50 border-error-200 text-error-700 rounded-lg border px-4 py-3">
		<p>{error}</p>
		<a class="text-error-700 mt-2 font-medium underline" href="/admin/invoice/list">
			Back to invoices
		</a>
	</div>
{:else if invoice}
	<InvoiceForm {invoice} isEditing={true} />
{/if}
