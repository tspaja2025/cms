<script lang="ts">
	import * as Table from '$lib/components/ui/table/index';
	import StatusBadge from '$lib/custom/ecommerce/status-badge.svelte';
	import { products } from '$lib/custom/ecommerce/store/data';

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
			<Table.Head>Product</Table.Head>
			<Table.Head>Price</Table.Head>
			<Table.Head>Sold</Table.Head>
			<Table.Head>Revenue</Table.Head>
			<Table.Head>Status</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each products as product, index (index)}
			<Table.Row class="hover:bg-muted/50">
				<Table.Cell class="font-medium">
					<div class="flex items-center gap-4">
						<img class="h-10 w-10 rounded-md object-cover" src={product.image} alt={product.name} />
						<div>
							<div>{product.name}</div>
							<div class="text-muted-foreground text-sm">ID: #{product.id}</div>
						</div>
					</div>
				</Table.Cell>
				<Table.Cell>{formatCurrency(product.price)}</Table.Cell>
				<Table.Cell>{product.sold}</Table.Cell>
				<Table.Cell class="font-medium">{formatCurrency(product.revenue)}</Table.Cell>
				<Table.Cell>
					<StatusBadge status={product.status} />
				</Table.Cell>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
