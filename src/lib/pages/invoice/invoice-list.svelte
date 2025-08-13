<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import * as Select from '$lib/components/ui/select';
	import type { InvoiceFilter, InvoiceStatus } from '$lib/types';
	import SearchIcon from '@lucide/svelte/icons/search';
	import ChevronUpIcon from '@lucide/svelte/icons/chevron-up';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import FileTextIcon from '@lucide/svelte/icons/file-text';
	import { filterInvoices, sortInvoices } from '$lib/utils';
	import { invoiceStore } from '$lib/store';
	import InvoiceCard from '$lib/pages/invoice/invoice-card.svelte';

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
			filter.sortDirection = 'desc';
		}
	}
</script>

<div>
	<div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
		<div class="relative w-full sm:max-w-sm">
			<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
				<SearchIcon class="h-4 w-4 text-muted-foreground" />
			</div>
			<Input
				id="search-invoices"
				type="text"
				placeholder="Search invoices..."
				class="pl-10"
				bind:value={filter.search}
			/>
		</div>

		<div class="flex items-center gap-2">
			<Select.Root bind:value={filter.sortBy}>
				<Select.Trigger class="w-[180px]">Sort by</Select.Trigger>
				<Select.Content>
					<Select.Item value="date">Issue Date</Select.Item>
					<Select.Item value="dueDate">Due Date</Select.Item>
					<Select.Item value="number">Invoice #</Select.Item>
					<Select.Item value="total">Amount</Select.Item>
				</Select.Content>
			</Select.Root>

			<Button
				variant="outline"
				size="icon"
				onclick={toggleSortDirection}
				aria-label={filter.sortDirection === 'asc' ? 'Sort descending' : 'Sort ascending'}
			>
				{#if filter.sortDirection === 'asc'}
					<ChevronUpIcon />
				{:else}
					<ChevronDownIcon />
				{/if}
			</Button>
		</div>
	</div>

	{#if sortedInvoices.length === 0}
		<div class="flex flex-col items-center gap-1 py-12 text-center">
			<FileTextIcon class="h-12 w-12 text-muted-foreground" />
			<h3 class="mt-4 text-lg font-medium">No invoices found</h3>
			<p class="mt-1 text-muted-foreground">
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
