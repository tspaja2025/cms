<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import * as Select from '$lib/components/ui/select';
	import * as Table from '$lib/components/ui/table';
	import { customers } from '$lib/store';
	import { formatCurrency, formatDate } from '$lib/utils';
	import ChevronLeftIcon from '@lucide/svelte/icons/chevron-left';
	import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
	import PlusIcon from '@lucide/svelte/icons/plus';
	import PencilIcon from '@lucide/svelte/icons/pencil';
	import TrashIcon from '@lucide/svelte/icons/trash';

	let searchQuery = $state('');
	let selectedStatus = $state('all');
	let currentPage = $state(1);

	// Statuses
	const statuses = ['all', 'Active', 'Inactive'];

	// Filter customers
	let filteredCustomers = $derived(
		customers.filter((customer) => {
			// Search query
			const matchesQuery = searchQuery
				? customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
					customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
					customer.location.toLowerCase().includes(searchQuery.toLowerCase())
				: true;

			// Status
			const matchesStatus = selectedStatus === 'all' ? true : customer.status === selectedStatus;

			return matchesQuery && matchesStatus;
		})
	);

	// Pagination
	const itemsPerPage = 5;
	let totalPages = $derived(Math.ceil(filteredCustomers.length / itemsPerPage));
	let paginatedCustomers = $derived(
		filteredCustomers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
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

<div class="space-y-6">
	<!-- Stats Cards -->
	<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
		<Card.Root class="bg-gradient-to-t from-primary/5 to-card shadow-xs dark:bg-card">
			<div class="text-center">
				<p class="text-sm font-medium">Total Customers</p>
				<p class="mt-1 text-3xl font-bold">{customers.length}</p>
				<p class="text-success-600 mt-1 flex items-center justify-center text-sm">
					<svg
						class="mr-1 h-4 w-4"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"
						></path>
					</svg>
					12% from last month
				</p>
			</div>
		</Card.Root>

		<Card.Root class="bg-gradient-to-t from-primary/5 to-card shadow-xs dark:bg-card">
			<div class="text-center">
				<p class="text-sm font-medium">Active Customers</p>
				<p class="mt-1 text-3xl font-bold">
					{customers.filter((c) => c.status === 'Active').length}
				</p>
				<p class="text-success-600 mt-1 flex items-center justify-center text-sm">
					<svg
						class="mr-1 h-4 w-4"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"
						></path>
					</svg>
					8% from last month
				</p>
			</div>
		</Card.Root>

		<Card.Root class="bg-gradient-to-t from-primary/5 to-card shadow-xs dark:bg-card">
			<div class="text-center">
				<p class="text-sm font-medium">Average Spent</p>
				<p class="mt-1 text-3xl font-bold">
					{formatCurrency(customers.reduce((sum, c) => sum + c.spent, 0) / customers.length)}
				</p>
				<p class="text-success-600 mt-1 flex items-center justify-center text-sm">
					<svg
						class="mr-1 h-4 w-4"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"
						></path>
					</svg>
					5% from last month
				</p>
			</div>
		</Card.Root>
	</div>

	<Card.Root>
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
			</div>
			<Card.Action>
				<Button>
					<PlusIcon />
					Add New Customer
				</Button>
			</Card.Action>
		</Card.Header>

		<!-- Customers Table -->
		<Card.Content class="overflow-x-auto">
			<Table.Root>
				<Table.Header>
					<Table.Row>
						<Table.Head class="text-xs font-medium tracking-wider uppercase">Customer</Table.Head>
						<Table.Head class="text-xs font-medium tracking-wider uppercase">Location</Table.Head>
						<Table.Head class="text-xs font-medium tracking-wider uppercase">Orders</Table.Head>
						<Table.Head class="text-xs font-medium tracking-wider uppercase">Spent</Table.Head>
						<Table.Head class="text-xs font-medium tracking-wider uppercase">Last Order</Table.Head>
						<Table.Head class="text-xs font-medium tracking-wider uppercase">Status</Table.Head>
						<Table.Head class="text-right text-xs font-medium tracking-wider uppercase">
							Actions
						</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each paginatedCustomers as customer, index (index)}
						<Table.Row>
							<Table.Cell>
								<div class="flex items-center">
									<div class="h-10 w-10 flex-shrink-0">
										<img
											class="h-10 w-10 rounded-full object-cover"
											src={customer.avatar}
											alt={customer.name}
										/>
									</div>
									<div class="ml-4">
										<div class="text-sm font-medium">
											{customer.name}
										</div>
										<div class="text-sm">{customer.email}</div>
									</div>
								</div>
							</Table.Cell>
							<Table.Cell>
								{customer.location}
							</Table.Cell>
							<Table.Cell>
								{customer.orders}
							</Table.Cell>
							<Table.Cell>
								{formatCurrency(customer.spent)}
							</Table.Cell>
							<Table.Cell>
								{formatDate(customer.lastOrder)}
							</Table.Cell>
							<Table.Cell>
								<Badge>{customer.status}</Badge>
							</Table.Cell>
							<Table.Cell>
								<Button variant="ghost" size="icon"><PencilIcon /></Button>
								<Button variant="ghost" size="icon"><TrashIcon /></Button>
							</Table.Cell>
						</Table.Row>
					{/each}

					{#if paginatedCustomers.length === 0}
						<Table.Row>
							<Table.Cell>No customers found matching your criteria.</Table.Cell>
						</Table.Row>
					{/if}
				</Table.Body>
			</Table.Root>
		</Card.Content>

		<!-- Pagination -->
		{#if filteredCustomers.length > 0}
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
								>{Math.min(currentPage * itemsPerPage, filteredCustomers.length)}</span
							>
							of
							<span class="font-medium">{filteredCustomers.length}</span>
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
</div>
