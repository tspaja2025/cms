<script>
	import { Badge } from '$lib/components/ui/badge';
	import { buttonVariants } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card/index';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import * as Table from '$lib/components/ui/table/index';
	import { recentOrders } from '$lib/store';
	import { formatCurrency, formatDate } from '$lib/utils';
	import { EllipsisVerticalIcon, EyeIcon, PencilIcon } from '@lucide/svelte';
</script>

<Card.Root class="bg-gradient-to-t from-primary/5 to-card shadow-xs dark:bg-card">
	<Card.Header>
		<Card.Title>Recent Orders</Card.Title>
	</Card.Header>
	<Card.Content>
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
				{#each recentOrders as order, index (index)}
					<Table.Row>
						<Table.Cell class="font-medium">{order.id}</Table.Cell>
						<Table.Cell>
							<div class="font-medium">{order.customer}</div>
							<div class="text-muted-foreground">{order.email}</div>
						</Table.Cell>
						<Table.Cell class="text-muted-foreground">{formatDate(order.date)}</Table.Cell>
						<Table.Cell>{formatCurrency(order.total)}</Table.Cell>
						<Table.Cell>
							<Badge>{order.status}</Badge>
						</Table.Cell>
						<Table.Cell class="text-right">
							<DropdownMenu.Root>
								<DropdownMenu.Trigger class={buttonVariants({ variant: 'ghost', size: 'icon' })}>
									<EllipsisVerticalIcon />
								</DropdownMenu.Trigger>
								<DropdownMenu.Content>
									<DropdownMenu.Item><PencilIcon /> Edit</DropdownMenu.Item>
									<DropdownMenu.Item><EyeIcon /> View</DropdownMenu.Item>
								</DropdownMenu.Content>
							</DropdownMenu.Root>
						</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</Card.Content>
</Card.Root>
