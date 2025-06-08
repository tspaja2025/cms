<script lang="ts">
	// import { createState } from 'svelte';
	import Card from '$lib/components/ecommerce/ui/card.svelte';
	import StatusBadge from '$lib/components/ecommerce/ui/status-badge.svelte';

	let searchQuery = $state('');
	let selectedStatus = $state('all');
	let currentPage = $state(1);
	let dateRange = $state('all');

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
		},
		{
			id: 'ORD-4867',
			customer: 'Robert Johnson',
			date: '2023-08-13T11:15:00',
			total: 149.99,
			status: 'Delivered',
			items: 1,
			email: 'robert.j@example.com'
		},
		{
			id: 'ORD-4866',
			customer: 'Lisa Anderson',
			date: '2023-08-13T10:05:00',
			total: 95.5,
			status: 'Processing',
			items: 3,
			email: 'lisa.a@example.com'
		},
		{
			id: 'ORD-4865',
			customer: 'Thomas Wilson',
			date: '2023-08-12T15:30:00',
			total: 210.25,
			status: 'Delivered',
			items: 2,
			email: 'thomas.w@example.com'
		},
		{
			id: 'ORD-4864',
			customer: 'Jessica Miller',
			date: '2023-08-12T09:45:00',
			total: 75.99,
			status: 'Delivered',
			items: 1,
			email: 'jessica.m@example.com'
		},
		{
			id: 'ORD-4863',
			customer: 'Daniel Brown',
			date: '2023-08-11T14:20:00',
			total: 324.75,
			status: 'Cancelled',
			items: 4,
			email: 'daniel.b@example.com'
		}
	];

	// Format date
	function formatDate(dateString) {
		const date = new Date(dateString);
		return new Intl.DateTimeFormat('en-US', {
			month: 'short',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		}).format(date);
	}

	// Format currency
	function formatCurrency(amount) {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD'
		}).format(amount);
	}

	// Statuses
	const statuses = ['all', 'Pending', 'Processing', 'Delivered', 'Cancelled'];

	// Date ranges
	const dateRanges = [
		{ value: 'all', label: 'All Time' },
		{ value: 'today', label: 'Today' },
		{ value: 'week', label: 'This Week' },
		{ value: 'month', label: 'This Month' }
	];

	// Filter orders
	$: filteredOrders = orders.filter((order) => {
		// Search query
		const matchesQuery = searchQuery
			? order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
				order.customer.toLowerCase().includes(searchQuery.toLowerCase())
			: true;

		// Status
		const matchesStatus = selectedStatus === 'all' ? true : order.status === selectedStatus;

		// Date range
		const orderDate = new Date(order.date);
		const today = new Date();
		const matchesDateRange = (() => {
			if (dateRange === 'all') return true;

			if (dateRange === 'today') {
				return orderDate.toDateString() === today.toDateString();
			}

			if (dateRange === 'week') {
				const weekStart = new Date(today);
				weekStart.setDate(today.getDate() - today.getDay());
				return orderDate >= weekStart;
			}

			if (dateRange === 'month') {
				return (
					orderDate.getMonth() === today.getMonth() &&
					orderDate.getFullYear() === today.getFullYear()
				);
			}

			return true;
		})();

		return matchesQuery && matchesStatus && matchesDateRange;
	});

	// Pagination
	const itemsPerPage = 5;
	$: totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
	$: paginatedOrders = filteredOrders.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	function goToPage(page) {
		currentPage = page;
	}

	function previousPage() {
		if (currentPage > 1) {
			currentPage--;
		}
	}

	function nextPage() {
		if (currentPage < totalPages) {
			currentPage++;
		}
	}
</script>

<svelte:head>
	<title>Admin Dashboard</title>
</svelte:head>

<div class="space-y-6">
	<div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
		<h1 class="text-2xl font-bold text-gray-900">Orders</h1>

		<button class="btn-primary flex items-center">
			<svg
				class="mr-2 h-5 w-5"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 6v6m0 0v6m0-6h6m-6 0H6"
				></path>
			</svg>
			Create New Order
		</button>
	</div>

	<Card noPadding={true}>
		<!-- Filters -->
		<div class="border-b border-gray-200 p-6">
			<div class="flex flex-col gap-4 md:flex-row">
				<div class="flex-1">
					<div class="relative">
						<input
							type="text"
							bind:value={searchQuery}
							placeholder="Search orders..."
							class="input pl-10"
						/>
						<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
							<svg
								class="h-5 w-5 text-gray-500"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								></path>
							</svg>
						</div>
					</div>
				</div>

				<div class="w-full md:w-48">
					<select bind:value={selectedStatus} class="input">
						{#each statuses as status, statusIndex (statusIndex)}
							<option value={status}>{status === 'all' ? 'All Statuses' : status}</option>
						{/each}
					</select>
				</div>

				<div class="w-full md:w-48">
					<select bind:value={dateRange} class="input">
						{#each dateRanges as range, rangeIndex (rangeIndex)}
							<option value={range.value}>{range.label}</option>
						{/each}
					</select>
				</div>
			</div>
		</div>

		<!-- Orders Table -->
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
					{#each paginatedOrders as order, orderIndex (orderIndex)}
						<tr class="transition-colors hover:bg-gray-50">
							<td class="text-primary-600 px-6 py-4 text-sm font-medium whitespace-nowrap">
								{order.id}
							</td>
							<td class="px-6 py-4 whitespace-nowrap">
								<div class="text-sm font-medium text-gray-900">
									{order.customer}
								</div>
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
								<button class="text-primary-600 hover:text-primary-900 mr-3"> View </button>
								<button class="text-gray-600 hover:text-gray-900"> Edit </button>
							</td>
						</tr>
					{/each}

					{#if paginatedOrders.length === 0}
						<tr>
							<td colspan="6" class="px-6 py-4 text-center text-sm text-gray-500">
								No orders found matching your criteria.
							</td>
						</tr>
					{/if}
				</tbody>
			</table>
		</div>

		<!-- Pagination -->
		{#if filteredOrders.length > 0}
			<div class="flex items-center justify-between border-t border-gray-200 px-6 py-3">
				<div class="flex flex-1 justify-between sm:hidden">
					<button on:click={previousPage} class="btn-outline py-2" disabled={currentPage === 1}
						>Previous</button
					>
					<button on:click={nextPage} class="btn-outline py-2" disabled={currentPage === totalPages}
						>Next</button
					>
				</div>
				<div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
					<div>
						<p class="text-sm text-gray-700">
							Showing
							<span class="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span>
							to
							<span class="font-medium"
								>{Math.min(currentPage * itemsPerPage, filteredOrders.length)}</span
							>
							of
							<span class="font-medium">{filteredOrders.length}</span>
							results
						</p>
					</div>
					<div>
						<nav
							class="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
							aria-label="Pagination"
						>
							<button
								on:click={previousPage}
								class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
								disabled={currentPage === 1}
							>
								<span class="sr-only">Previous</span>
								<svg
									class="h-5 w-5"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
										clip-rule="evenodd"
									/>
								</svg>
							</button>

							{#each Array(totalPages) as i, ii (ii)}
								<button
									on:click={() => goToPage(i + 1)}
									class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50"
									class:bg-primary-50={currentPage === i + 1}
									class:dark:bg-gray-700={currentPage === i + 1}
									class:text-primary-600={currentPage === i + 1}
									class:dark:text-primary-400={currentPage === i + 1}
									class:text-gray-700={currentPage !== i + 1}
									class:dark:text-gray-300={currentPage !== i + 1}
								>
									{i + 1}
								</button>
							{/each}

							<button
								on:click={nextPage}
								class="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
								disabled={currentPage === totalPages}
							>
								<span class="sr-only">Next</span>
								<svg
									class="h-5 w-5"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
										clip-rule="evenodd"
									/>
								</svg>
							</button>
						</nav>
					</div>
				</div>
			</div>
		{/if}
	</Card>
</div>
