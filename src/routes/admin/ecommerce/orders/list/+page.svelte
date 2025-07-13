<script lang="ts">
	import * as Select from '$lib/components/ui/select';
	import * as Table from '$lib/components/ui/table';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import Card from '$lib/custom/ecommerce/ui/card.svelte';
	import StatusBadge from '$lib/custom/ecommerce/ui/status-badge.svelte';
	import ChevronLeftIcon from '@lucide/svelte/icons/chevron-left';
	import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
	import PlusIcon from '@lucide/svelte/icons/plus';
	import SearchIcon from '@lucide/svelte/icons/search';

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
	let filteredOrders = $derived(
		orders.filter((order) => {
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
		})
	);

	// Pagination
	const itemsPerPage = 5;
	let totalPages = $derived(Math.ceil(filteredOrders.length / itemsPerPage));
	let paginatedOrders = $derived(
		filteredOrders.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
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
		<h1 class="text-2xl font-bold">Orders</h1>

		<Button>
			<PlusIcon />
			Create New Order
		</Button>
	</div>

	<Card>
		<!-- Filters -->
		<div class="mb-4 flex justify-between">
			<div class="relative">
				<Input
					type="text"
					bind:value={searchQuery}
					placeholder="Search orders..."
					class="input pl-10"
				/>
				<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
					<SearchIcon class="h-5 w-5" />
				</div>
			</div>
			<div class="flex space-x-4">
				<Select.Root bind:value={selectedStatus}>
					<Select.Trigger>All Statuses</Select.Trigger>
					<Select.Content>
						{#each statuses as status, index (index)}
							<Select.Item value={status}>{status}</Select.Item>
						{/each}
					</Select.Content>
				</Select.Root>
				<Select.Root bind:value={dateRange}>
					<Select.Trigger>All Time</Select.Trigger>
					<Select.Content>
						{#each dateRanges as range, index (index)}
							<Select.Item value={range.value}>{range.label}</Select.Item>
						{/each}
					</Select.Content>
				</Select.Root>
			</div>
		</div>

		<!-- Orders Table -->
		<div class="overflow-x-auto">
			<Table.Root>
				<Table.Header>
					<Table.Row>
						<Table.Head>Order ID</Table.Head>
						<Table.Head>Customer</Table.Head>
						<Table.Head>Date</Table.Head>
						<Table.Head>Total</Table.Head>
						<Table.Head>Status</Table.Head>
						<Table.Head>Actions</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each paginatedOrders as order, orderIndex (orderIndex)}
						<Table.Row>
							<Table.Cell>
								{order.id}
							</Table.Cell>
							<Table.Cell>
								<div class="text-sm font-medium">
									{order.customer}
								</div>
								<div class="text-sm text-slate-500">{order.email}</div>
							</Table.Cell>
							<Table.Cell>
								{formatDate(order.date)}
							</Table.Cell>
							<Table.Cell>
								{formatCurrency(order.total)}
							</Table.Cell>
							<Table.Cell>
								<StatusBadge status={order.status} />
							</Table.Cell>
							<Table.Cell>
								<Button>View</Button>
								<Button>Edit</Button>
							</Table.Cell>
						</Table.Row>
					{/each}

					{#if paginatedOrders.length === 0}
						<Table.Row>
							<Table.Cell>No orders found matching your criteria.</Table.Cell>
						</Table.Row>
					{/if}
				</Table.Body>
			</Table.Root>
		</div>

		<!-- Pagination -->
		{#if filteredOrders.length > 0}
			<div class="flex items-center justify-between border-t border-gray-200 px-6 py-3">
				<div class="flex flex-1 justify-between sm:hidden">
					<Button onclick={previousPage} disabled={currentPage === 1}>Previous</Button>
					<Button onclick={nextPage} disabled={currentPage === totalPages}>Next</Button>
				</div>
				<div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
					<div>
						<p class="text-sm">
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
							<Button
								onclick={previousPage}
								class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
								disabled={currentPage === 1}
							>
								<span class="sr-only">Previous</span>
								<ChevronLeftIcon />
							</Button>

							{#each Array(totalPages) as _, index (index)}
								<button
									onclick={() => goToPage(index + 1)}
									class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50"
									class:bg-primary-50={currentPage === index + 1}
									class:dark:bg-gray-700={currentPage === index + 1}
									class:text-primary-600={currentPage === index + 1}
									class:dark:text-primary-400={currentPage === index + 1}
									class:text-gray-700={currentPage !== index + 1}
									class:dark:text-gray-300={currentPage !== index + 1}
								>
									{index + 1}
								</button>
							{/each}

							<Button onclick={nextPage} disabled={currentPage === totalPages}>
								<span class="sr-only">Next</span>
								<ChevronRightIcon />
							</Button>
						</nav>
					</div>
				</div>
			</div>
		{/if}
	</Card>
</div>
