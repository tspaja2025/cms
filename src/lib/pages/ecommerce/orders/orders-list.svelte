<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import * as Select from '$lib/components/ui/select';
	import * as Table from '$lib/components/ui/table';
	import { orders } from '$lib/store';
	import { formatCurrency, formatDate } from '$lib/utils';
	import ChevronLeftIcon from '@lucide/svelte/icons/chevron-left';
	import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
	import PlusIcon from '@lucide/svelte/icons/plus';
	import PencilIcon from '@lucide/svelte/icons/pencil';
	import TrashIcon from '@lucide/svelte/icons/trash';
	import { SvelteDate } from 'svelte/reactivity';

	let searchQuery = $state('');
	let selectedStatus = $state('all');
	let currentPage = $state(1);
	let dateRange = $state('all');

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
					const weekStart = new SvelteDate(today);
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

	function goToPage(page: number) {
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

<Card.Root class="bg-gradient-to-t from-primary/5 to-card shadow-xs dark:bg-card">
	<Card.Header>
		<div class="flex gap-2">
			<div class="flex-1">
				<Input
					id="search-orders"
					type="text"
					bind:value={searchQuery}
					placeholder="Search orders..."
					class="input pl-10"
				/>
			</div>
			<Select.Root type="single" bind:value={selectedStatus}>
				<Select.Trigger>All Statuses</Select.Trigger>
				<Select.Content>
					{#each statuses as status, index (index)}
						<Select.Item value={status}>{status}</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
			<Select.Root type="single" bind:value={dateRange}>
				<Select.Trigger>All Time</Select.Trigger>
				<Select.Content>
					{#each dateRanges as range, index (index)}
						<Select.Item value={range.value}>{range.label}</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
		</div>
		<Card.Action>
			<Button>
				<PlusIcon />
				Create New Order
			</Button>
		</Card.Action>
	</Card.Header>

	<!-- Orders Table -->
	<Card.Content class="overflow-x-auto">
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
							<Badge>{order.status}</Badge>
						</Table.Cell>
						<Table.Cell>
							<Button variant="ghost" size="icon"><PencilIcon /></Button>
							<Button variant="ghost" size="icon"><TrashIcon /></Button>
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
	</Card.Content>

	<!-- Pagination -->
	{#if filteredOrders.length > 0}
		<Card.Footer class="flex items-center justify-between border-t">
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
					<nav class="flex gap-1" aria-label="Pagination">
						<Button onclick={previousPage} disabled={currentPage === 1}>
							<span class="sr-only">Previous</span>
							<ChevronLeftIcon />
						</Button>

						{#each Array(totalPages) as _, index (index)}
							<Button onclick={() => goToPage(index + 1)}>
								{index + 1}
							</Button>
						{/each}

						<Button onclick={nextPage} disabled={currentPage === totalPages}>
							<span class="sr-only">Next</span>
							<ChevronRightIcon />
						</Button>
					</nav>
				</div>
			</div>
		</Card.Footer>
	{/if}
</Card.Root>
