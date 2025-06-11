<script lang="ts">
	// import { push } from 'svelte-spa-router';
	import type { Invoice } from '$lib/components/invoice/types';
	import { formatCurrency, formatDate, calculateDueDays } from '$lib/components/invoice/utils';
	import StatusBadge from '$lib/components/invoice/status-badge.svelte';

	// export let invoice: Invoice;
	//
	let {
		invoice,
		...restProps
	}: {
		invoice: Invoice;
	} = $props();

	const dueDays = calculateDueDays(invoice.dueDate);
	const isPastDue = dueDays < 0;

	// const handleClick = () => {
	// 	push(`/invoices/${invoice.id}`);
	// };
</script>

<div
	class="card animate-scale-in group cursor-pointer hover:shadow-md"
	onclick={() => '/invoices/${invoice.id}'}
	{...restProps}
>
	<div class="mb-4 flex items-start justify-between">
		<div>
			<h3 class="text-lg font-semibold">{invoice.number}</h3>
			<p class="text-secondary-600 text-sm">{invoice.client.name}</p>
		</div>
		<StatusBadge status={invoice.status} />
	</div>

	<div class="border-secondary-100 -mx-4 my-3 border-t"></div>

	<div class="flex justify-between">
		<div>
			<p class="text-secondary-500 text-xs">Issued</p>
			<p class="font-medium">{formatDate(invoice.date)}</p>
		</div>
		<div>
			<p class="text-secondary-500 text-xs">Due</p>
			<p class="font-medium">{formatDate(invoice.dueDate)}</p>
		</div>
		<div>
			<p class="text-secondary-500 text-xs">Total</p>
			<p class="font-medium">{formatCurrency(invoice.total)}</p>
		</div>
	</div>

	{#if invoice.status === 'sent' || invoice.status === 'overdue'}
		<div class="mt-3 text-sm">
			{#if isPastDue}
				<p class="text-error-600">
					Overdue by {Math.abs(dueDays)}
					{Math.abs(dueDays) === 1 ? 'day' : 'days'}
				</p>
			{:else}
				<p class="text-secondary-600">
					Due in {dueDays}
					{dueDays === 1 ? 'day' : 'days'}
				</p>
			{/if}
		</div>
	{/if}

	<div
		class="border-primary-400 pointer-events-none absolute inset-0 rounded-xl border opacity-0 transition-opacity duration-200 group-hover:opacity-100"
	></div>
</div>
