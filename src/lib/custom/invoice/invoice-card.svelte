<script lang="ts">
	import { base } from '$app/paths';
	import * as Card from '$lib/components/ui/card/index';
	import { Badge } from '$lib/components/ui/badge/index';
	import { formatCurrency, formatDate, calculateDueDays } from '$lib/custom/invoice/utils';
	import { goto } from '$app/navigation';
	import type { Invoice } from '$lib/custom/invoice/types';

	let {
		invoice,
		...restProps
	}: {
		invoice: Invoice;
	} = $props();

	const dueDays = calculateDueDays(invoice.dueDate);
	const isPastDue = dueDays < 0;
</script>

<Card.Root
	class="animate-scale-in group relative cursor-pointer transition-shadow hover:shadow-md"
	onclick={() => goto(`${base}/admin/invoice/preview/${invoice.id}`)}
	{...restProps}
>
	<Card.Header>
		<Card.Title>{invoice.number}</Card.Title>
		<Card.Description>{invoice.client.name}</Card.Description>
		<Card.CardAction>
			<Badge
				variant={invoice.status === 'paid'
					? 'default'
					: invoice.status === 'overdue'
						? 'destructive'
						: 'secondary'}
			>
				{invoice.status}
			</Badge>
		</Card.CardAction>
	</Card.Header>
	<Card.Content>
		<div class="flex justify-between">
			<div>
				<p class="text-muted-foreground text-xs">Issued</p>
				<p class="font-medium">{formatDate(invoice.date)}</p>
			</div>
			<div>
				<p class="text-muted-foreground text-xs">Due</p>
				<p class="font-medium">{formatDate(invoice.dueDate)}</p>
			</div>
			<div>
				<p class="text-muted-foreground text-xs">Total</p>
				<p class="font-medium">{formatCurrency(invoice.total)}</p>
			</div>
		</div>

		{#if invoice.status === 'sent' || invoice.status === 'overdue'}
			<div class="mt-3 text-sm">
				{#if isPastDue}
					<p class="text-destructive">
						Overdue by {Math.abs(dueDays)}
						{Math.abs(dueDays) === 1 ? 'day' : 'days'}
					</p>
				{:else}
					<p class="text-muted-foreground">
						Due in {dueDays}
						{dueDays === 1 ? 'day' : 'days'}
					</p>
				{/if}
			</div>
		{/if}
	</Card.Content>
</Card.Root>
