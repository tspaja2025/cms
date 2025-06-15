<script lang="ts">
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

<div class="overflow-x-auto">
	<table class="min-w-full divide-y divide-gray-200">
		<thead class="bg-gray-50">
			<tr>
				<th
					scope="col"
					class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
				>
					Product
				</th>
				<th
					scope="col"
					class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
				>
					Price
				</th>
				<th
					scope="col"
					class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
				>
					Sold
				</th>
				<th
					scope="col"
					class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
				>
					Revenue
				</th>
				<th
					scope="col"
					class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
				>
					Status
				</th>
			</tr>
		</thead>
		<tbody class="divide-y divide-gray-200 bg-white">
			{#each products as product, productIndex (productIndex)}
				<tr class="transition-colors hover:bg-gray-50">
					<td class="px-6 py-4 whitespace-nowrap">
						<div class="flex items-center">
							<div class="h-10 w-10 flex-shrink-0">
								<img
									class="h-10 w-10 rounded-md object-cover"
									src={product.image}
									alt={product.name}
								/>
							</div>
							<div class="ml-4">
								<div class="text-sm font-medium text-gray-900">{product.name}</div>
								<div class="text-sm text-gray-500">ID: #{product.id}</div>
							</div>
						</div>
					</td>
					<td class="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
						{formatCurrency(product.price)}
					</td>
					<td class="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
						{product.sold.toLocaleString()}
					</td>
					<td class="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">
						{formatCurrency(product.revenue)}
					</td>
					<td class="px-6 py-4 whitespace-nowrap">
						<StatusBadge status={product.status} />
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
