<script lang="ts">
	import * as Table from '$lib/components/ui/table/index';
	import { Button } from '$lib/components/ui/button/index';
	import StatusBadge from '$lib/custom/ecommerce/status-badge.svelte';
	import { orders } from '$lib/custom/ecommerce/store/data';

	// Format date
	function formatDate(dateString: string) {
		const date = new Date(dateString);
		return new Intl.DateTimeFormat('en-US', {
			month: 'short',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		}).format(date);
	}

	// Format currency
	function formatCurrency(amount: number) {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD'
		}).format(amount);
	}
</script>

<Table.Root>
	<Table.Header>
		<Table.Row>
			<Table.Head>Order ID</Table.Head>
			<Table.Head>Customer</Table.Head>
			<Table.Head>Date</Table.Head>
			<Table.Head>Total</Table.Head>
			<Table.Head>Status</Table.Head>
			<Table.Head class="text-right">Actions</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each orders as order, index (index)}
			<Table.Row>
				<Table.Cell class="font-medium">{order.id}</Table.Cell>
				<Table.Cell>
					<div class="font-medium">{order.customer}</div>
					<div class="text-muted-foreground">{order.email}</div>
				</Table.Cell>
				<Table.Cell class="text-muted-foreground">{formatDate(order.date)}</Table.Cell>
				<Table.Cell>{formatCurrency(order.total)}</Table.Cell>
				<Table.Cell>
					<StatusBadge status={order.status} />
				</Table.Cell>
				<Table.Cell class="text-right">
					<Button variant="link" class="text-primary hover:text-primary/90 mr-2">View</Button>
					<Button variant="link" class="text-muted-foreground hover:text-foreground">Edit</Button>
				</Table.Cell>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
