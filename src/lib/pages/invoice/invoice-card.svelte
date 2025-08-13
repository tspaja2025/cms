<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { Badge } from '$lib/components/ui/badge';
	import * as Card from '$lib/components/ui/card';
	import type { Invoice } from '$lib/types';
	import { calculateDueDays, formatCurrency, formatDate } from '$lib/utils';

	const {
		invoice,
		...restProps
	}: {
		invoice: Invoice;
	} = $props();

	const dueDays = calculateDueDays(invoice.dueDate);
	const isPastDue = dueDays < 0;
</script>

<Card.Root
	class="group relative cursor-pointer bg-gradient-to-t from-primary/5 to-card
shadow-xs dark:bg-card"
	onclick={() => goto(resolve(`/admin/invoice/preview/${invoice.id}`))}
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
				<p class="text-xs text-muted-foreground">Issued</p>
				<p class="font-medium">{formatDate(invoice.date)}</p>
			</div>
			<div>
				<p class="text-xs text-muted-foreground">Due</p>
				<p class="font-medium">{formatDate(invoice.dueDate)}</p>
			</div>
			<div>
				<p class="text-xs text-muted-foreground">Total</p>
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
