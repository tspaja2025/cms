<script>
	import { Badge } from '$lib/components/ui/badge';
	import { buttonVariants } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card/index';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import * as Table from '$lib/components/ui/table/index';
	import { topSellingProducts } from '$lib/store';
	import { formatCurrency } from '$lib/utils';
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
					<Table.Head>Product</Table.Head>
					<Table.Head>Price</Table.Head>
					<Table.Head>Sold</Table.Head>
					<Table.Head>Revenue</Table.Head>
					<Table.Head>Status</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each topSellingProducts as product, index (index)}
					<Table.Row>
						<Table.Cell class="font-medium">
							<div class="flex items-center gap-4">
								<img
									class="h-10 w-10 rounded-md object-cover"
									src={product.image}
									alt={product.name}
								/>
								<div>
									<div>{product.name}</div>
									<div class="text-sm text-muted-foreground">ID: #{product.id}</div>
								</div>
							</div>
						</Table.Cell>
						<Table.Cell>{formatCurrency(product.price)}</Table.Cell>
						<Table.Cell>{product.sold}</Table.Cell>
						<Table.Cell class="font-medium">{formatCurrency(product.revenue)}</Table.Cell>
						<Table.Cell>
							<Badge>{product.status}</Badge>
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
