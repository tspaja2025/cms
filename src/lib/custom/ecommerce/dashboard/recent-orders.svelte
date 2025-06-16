<script lang="ts">
	import * as Table from '$lib/components/ui/table';
	import { Button } from '$lib/components/ui/button';
	import StatusBadge from '$lib/custom/ecommerce/ui/status-badge.svelte';

	// Sample data
	const orders = [
		{
			id: 'ORD-4872',
			customer: 'Sarah Wilson',
			date: '2023-08-15T10:30:00',
			total: 129.99,
			status: 'Delivered',
			items: 3,
			email: 'sarah.w@example.com'
		},
		{
			id: 'ORD-4871',
			customer: 'Michael Brown',
			date: '2023-08-15T09:45:00',
			total: 79.85,
			status: 'Processing',
			items: 2,
			email: 'michael.b@example.com'
		},
		{
			id: 'ORD-4870',
			customer: 'Emma Johnson',
			date: '2023-08-15T08:20:00',
			total: 245.0,
			status: 'Pending',
			items: 4,
			email: 'emma.j@example.com'
		},
		{
			id: 'ORD-4869',
			customer: 'David Lee',
			date: '2023-08-14T16:50:00',
			total: 189.99,
			status: 'Delivered',
			items: 1,
			email: 'david.l@example.com'
		},
		{
			id: 'ORD-4868',
			customer: 'Jennifer Smith',
			date: '2023-08-14T14:25:00',
			total: 62.5,
			status: 'Cancelled',
			items: 2,
			email: 'jennifer.s@example.com'
		}
	];

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
      {#each orders as order}
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
            <Button variant="link" class="text-primary hover:text-primary/90 mr-2">
              View
            </Button>
            <Button variant="link" class="text-muted-foreground hover:text-foreground">
              Edit
            </Button>
          </Table.Cell>
        </Table.Row>
      {/each}
    </Table.Body>
  </Table.Root>
