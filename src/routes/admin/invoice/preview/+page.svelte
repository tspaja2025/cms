<script lang="ts">
	import { onMount } from 'svelte';
	// import { push, pop, location } from 'svelte-spa-router';
	import { invoiceStore } from '$lib/components/invoice/store/store';
	import type { Invoice } from '$lib/components/invoice/types';
	import {
		formatCurrency,
		formatDate,
		getStatusLabel,
		getStatusColorClass
	} from '$lib/components/invoice/utils';
	import StatusBadge from '$lib/components/invoice/status-badge.svelte';

	interface Props {
		id: string;
	}

	const { id = '' }: Props = $props();

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

	function handleStatusChange(newStatus: Invoice['status']) {
		if (!invoice) return;

		invoiceStore.updateStatus(invoice.id, newStatus);
		loadInvoice(); // Reload to get updated data
	}

	function handleEdit() {
		push(`/invoices/${id}/edit`);
	}

	function handleDelete() {
		if (!invoice) return;

		if (confirm('Are you sure you want to delete this invoice?')) {
			invoiceStore.delete(invoice.id);
			push('/invoices');
		}
	}

	function handleBack() {
		pop();
	}

	function printInvoice() {
		window.print();
	}
</script>

<svelte:head>
	<title>Admin Dashboard</title>
</svelte:head>

{#if loading}
	<div class="flex h-64 items-center justify-center">
		<div class="border-primary-600 h-12 w-12 animate-spin rounded-full border-t-2 border-b-2"></div>
	</div>
{:else if error}
	<div class="bg-error-50 border-error-200 text-error-700 rounded-lg border px-4 py-3">
		<p>{error}</p>
		<button class="text-error-700 mt-2 font-medium underline" onclick={handleBack}>
			Go back
		</button>
	</div>
{:else if invoice}
	<div
		class="animate-fade-in mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
	>
		<div class="flex items-center space-x-3">
			<button
				class="border-secondary-200 text-secondary-700 hover:bg-secondary-50 rounded-lg border bg-white p-2"
				onclick={handleBack}
				aria-label="Go back"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
			<h2 class="text-2xl font-semibold">{invoice.number}</h2>
			<StatusBadge status={invoice.status} />
		</div>

		<div class="flex items-center space-x-3">
			<div class="group relative">
				<button class="btn btn-secondary flex items-center space-x-2" aria-haspopup="true">
					<span>Status</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>

				<div
					class="invisible absolute right-0 z-20 mt-2 w-48 overflow-hidden rounded-lg bg-white opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100"
				>
					<div class="py-1">
						<button
							class="hover:bg-secondary-50 w-full px-4 py-2 text-left transition-colors duration-150"
							onclick={() => handleStatusChange('draft')}
						>
							Mark as Draft
						</button>
						<button
							class="hover:bg-secondary-50 w-full px-4 py-2 text-left transition-colors duration-150"
							onclick={() => handleStatusChange('sent')}
						>
							Mark as Sent
						</button>
						<button
							class="hover:bg-secondary-50 w-full px-4 py-2 text-left transition-colors duration-150"
							onclick={() => handleStatusChange('paid')}
						>
							Mark as Paid
						</button>
						<button
							class="hover:bg-secondary-50 w-full px-4 py-2 text-left transition-colors duration-150"
							onclick={() => handleStatusChange('overdue')}
						>
							Mark as Overdue
						</button>
					</div>
				</div>
			</div>

			<button class="btn btn-secondary flex items-center space-x-2" onclick={printInvoice}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z"
						clip-rule="evenodd"
					/>
				</svg>
				<span>Print</span>
			</button>

			<button class="btn btn-primary flex items-center space-x-2" onclick={handleEdit}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
					/>
				</svg>
				<span>Edit</span>
			</button>

			<button class="btn btn-danger flex items-center space-x-2" onclick={handleDelete}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
						clip-rule="evenodd"
					/>
				</svg>
				<span>Delete</span>
			</button>
		</div>
	</div>

	<div
		class="border-secondary-200 animate-fade-in overflow-hidden rounded-xl border bg-white shadow-sm"
	>
		<!-- Invoice Header -->
		<div class="bg-secondary-50 border-secondary-200 border-b p-6">
			<div class="flex flex-col md:flex-row md:justify-between">
				<div>
					<h1 class="mb-1 text-2xl font-bold">INVOICE</h1>
					<p class="text-secondary-600">{invoice.number}</p>
				</div>
				<div class="mt-4 md:mt-0 md:text-right">
					<div class="text-secondary-600 text-sm">Issue Date</div>
					<div class="font-medium">{formatDate(invoice.date)}</div>
					<div class="text-secondary-600 mt-2 text-sm">Due Date</div>
					<div class="font-medium">{formatDate(invoice.dueDate)}</div>
				</div>
			</div>
		</div>

		<!-- Invoice Content -->
		<div class="p-6">
			<div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
				<div>
					<h3 class="text-secondary-500 mb-1 text-sm font-medium">From</h3>
					<p class="font-semibold">Your Company Name</p>
					<p class="text-secondary-600">123 Business Street</p>
					<p class="text-secondary-600">San Francisco, CA 94103</p>
					<p class="text-secondary-600">contact@yourcompany.com</p>
				</div>

				<div>
					<h3 class="text-secondary-500 mb-1 text-sm font-medium">Bill To</h3>
					<p class="font-semibold">{invoice.client.name}</p>
					{#if invoice.client.address}
						<p class="text-secondary-600 whitespace-pre-line">{invoice.client.address}</p>
					{/if}
					{#if invoice.client.email}
						<p class="text-secondary-600">{invoice.client.email}</p>
					{/if}
				</div>
			</div>

			<!-- Line Items -->
			<div class="mb-8 overflow-x-auto">
				<table class="w-full">
					<thead>
						<tr class="bg-secondary-50">
							<th
								class="text-secondary-700 border-secondary-200 border-b px-4 py-3 text-left text-sm font-medium"
								>Description</th
							>
							<th
								class="text-secondary-700 border-secondary-200 border-b px-4 py-3 text-right text-sm font-medium"
								>Quantity</th
							>
							<th
								class="text-secondary-700 border-secondary-200 border-b px-4 py-3 text-right text-sm font-medium"
								>Rate</th
							>
							<th
								class="text-secondary-700 border-secondary-200 border-b px-4 py-3 text-right text-sm font-medium"
								>Amount</th
							>
						</tr>
					</thead>
					<tbody>
						{#each invoice.items as item, itemIndex (itemIndex)}
							<tr class="border-secondary-100 border-b">
								<td class="text-secondary-800 px-4 py-4 text-sm">{item.description}</td>
								<td class="text-secondary-800 px-4 py-4 text-right text-sm">{item.quantity}</td>
								<td class="text-secondary-800 px-4 py-4 text-right text-sm"
									>{formatCurrency(item.rate)}</td
								>
								<td class="text-secondary-800 px-4 py-4 text-right text-sm font-medium"
									>{formatCurrency(item.amount)}</td
								>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>

			<!-- Totals -->
			<div class="mb-8 flex justify-end">
				<div class="w-full max-w-xs">
					<div class="flex justify-between py-2">
						<span class="text-secondary-600">Subtotal</span>
						<span class="font-medium">{formatCurrency(invoice.subtotal)}</span>
					</div>
					<div class="border-secondary-200 flex justify-between border-b py-2">
						<span class="text-secondary-600">Tax (10%)</span>
						<span class="font-medium">{formatCurrency(invoice.tax)}</span>
					</div>
					<div class="flex justify-between py-3 text-lg font-bold">
						<span>Total</span>
						<span>{formatCurrency(invoice.total)}</span>
					</div>
				</div>
			</div>

			<!-- Notes -->
			{#if invoice.notes}
				<div class="border-secondary-200 border-t pt-6">
					<h3 class="text-secondary-700 mb-2 text-sm font-medium">Notes</h3>
					<p class="text-secondary-600 whitespace-pre-line">{invoice.notes}</p>
				</div>
			{/if}
		</div>
	</div>
{/if}
