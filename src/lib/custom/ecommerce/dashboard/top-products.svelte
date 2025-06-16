<script lang="ts">
	import * as Table from '$lib/components/ui/table';
	import StatusBadge from '$lib/custom/ecommerce/ui/status-badge.svelte';

	// Sample data
	const products = [
		{
			id: 1,
			name: 'Wireless Headphones',
			image:
				'https://images.pexels.com/photos/3394665/pexels-photo-3394665.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
			price: 149.99,
			sold: 1254,
			revenue: 188097.46,
			status: 'In Stock'
		},
		{
			id: 2,
			name: 'Smart Watch',
			image:
				'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
			price: 299.99,
			sold: 879,
			revenue: 263691.21,
			status: 'In Stock'
		},
		{
			id: 3,
			name: 'Bluetooth Speaker',
			image:
				'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
			price: 89.99,
			sold: 1056,
			revenue: 95029.44,
			status: 'Low Stock'
		},
		{
			id: 4,
			name: 'Laptop Backpack',
			image:
				'https://images.pexels.com/photos/1294731/pexels-photo-1294731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
			price: 79.99,
			sold: 932,
			revenue: 74550.68,
			status: 'In Stock'
		},
		{
			id: 5,
			name: 'Mechanical Keyboard',
			image:
				'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
			price: 129.99,
			sold: 645,
			revenue: 83843.55,
			status: 'Out of Stock'
		}
	];

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
      {#each products as product (product.id)}
        <Table.Row class="hover:bg-muted/50">
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
          <Table.Cell>{product.sold.toLocaleString()}</Table.Cell>
          <Table.Cell class="font-medium">{formatCurrency(product.revenue)}</Table.Cell>
          <Table.Cell>
			<StatusBadge status={product.status} />
          </Table.Cell>
        </Table.Row>
      {/each}
    </Table.Body>
  </Table.Root>
