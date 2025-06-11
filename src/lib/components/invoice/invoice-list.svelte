<script lang="ts">
	// import { $state, $derived } from 'svelte';
	import { invoiceStore } from '$lib/components/invoice/store/store';
	import type { InvoiceStatus, InvoiceFilter } from '$lib/components/invoice/types';
	import { sortInvoices, filterInvoices } from '$lib/components/invoice/utils';
	import InvoiceCard from '$lib/components/invoice/invoice-card.svelte';

	const {
		status = 'all'
	}: {
		status: InvoiceStatus | 'all';
	} = $props();

	const filter = $state<InvoiceFilter>({
		status: status,
		search: '',
		sortBy: 'date',
		sortDirection: 'desc'
	});

	const filteredInvoices = $derived(filterInvoices($invoiceStore, filter.status, filter.search));

	const sortedInvoices = $derived(
		sortInvoices(filteredInvoices, filter.sortBy, filter.sortDirection)
	);

	function toggleSortDirection() {
		filter.sortDirection = filter.sortDirection === 'asc' ? 'desc' : 'asc';
	}

	function setSortBy(field: InvoiceFilter['sortBy']) {
		if (filter.sortBy === field) {
			toggleSortDirection();
		} else {
			filter.sortBy = field;
			filter.sortDirection = 'desc'; // Default to descending when changing fields
		}
	}
</script>

<div>
	<div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
		<div class="relative">
			<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="text-secondary-400 h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
			<input
				type="text"
				placeholder="Search invoices..."
				class="input pl-10"
				bind:value={filter.search}
			/>
		</div>

		<div class="flex items-center space-x-3">
			<div class="relative">
				<select bind:value={filter.sortBy} class="input appearance-none pr-8">
					<option value="date">Issue Date</option>
					<option value="dueDate">Due Date</option>
					<option value="number">Invoice #</option>
					<option value="total">Amount</option>
				</select>
				<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="text-secondary-400 h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
			</div>

			<button
				class="border-secondary-200 text-secondary-700 hover:bg-secondary-50 rounded-lg border bg-white p-2"
				onclick={toggleSortDirection}
				aria-label={filter.sortDirection === 'asc' ? 'Sort descending' : 'Sort ascending'}
			>
				{#if filter.sortDirection === 'asc'}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
							clip-rule="evenodd"
						/>
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
							clip-rule="evenodd"
						/>
					</svg>
				{/if}
			</button>
		</div>
	</div>

	{#if sortedInvoices.length === 0}
		<div class="py-12 text-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="text-secondary-300 mx-auto h-12 w-12"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
				/>
			</svg>
			<h3 class="text-secondary-900 mt-4 text-lg font-medium">No invoices found</h3>
			<p class="text-secondary-500 mt-1">
				Try adjusting your search or filter to find what you're looking for.
			</p>
		</div>
	{:else}
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			{#each sortedInvoices as invoice (invoice.id)}
				<InvoiceCard {invoice} />
			{/each}
		</div>
	{/if}
</div>
