<script lang="ts">
	import StatusBadge from '$lib/components/ecommerce/ui/status-badge.svelte';

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

<div class="overflow-x-auto">
	<table class="min-w-full divide-y divide-gray-200">
		<thead class="bg-gray-50">
			<tr>
				<th
					scope="col"
					class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
				>
					Order ID
				</th>
				<th
					scope="col"
					class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
				>
					Customer
				</th>
				<th
					scope="col"
					class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
				>
					Date
				</th>
				<th
					scope="col"
					class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
				>
					Total
				</th>
				<th
					scope="col"
					class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
				>
					Status
				</th>
				<th
					scope="col"
					class="px-6 py-3 text-right text-xs font-medium tracking-wider text-gray-500 uppercase"
				>
					Actions
				</th>
			</tr>
		</thead>
		<tbody class="divide-y divide-gray-200 bg-white">
			{#each orders as order, orderIndex (orderIndex)}
				<tr class="transition-colors hover:bg-gray-50">
					<td class="text-primary-600 px-6 py-4 text-sm font-medium whitespace-nowrap">
						{order.id}
					</td>
					<td class="px-6 py-4 whitespace-nowrap">
						<div class="text-sm font-medium text-gray-900">{order.customer}</div>
						<div class="text-sm text-gray-500">{order.email}</div>
					</td>
					<td class="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
						{formatDate(order.date)}
					</td>
					<td class="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">
						{formatCurrency(order.total)}
					</td>
					<td class="px-6 py-4 whitespace-nowrap">
						<StatusBadge status={order.status} />
					</td>
					<td class="px-6 py-4 text-right text-sm font-medium whitespace-nowrap">
						<button class="text-primary-600 dark:text-primary-400 hover:text-primary-900 mr-3">
							View
						</button>
						<button class="text-gray-600 hover:text-gray-900"> Edit </button>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
