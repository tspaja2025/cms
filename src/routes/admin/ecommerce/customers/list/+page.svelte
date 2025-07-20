<script lang="ts">
	import Card from '$lib/custom/ecommerce/card.svelte';
	import { customers } from '$lib/custom/ecommerce/store/data';

	let searchQuery = $state('');
	let selectedStatus = $state('all');
	let currentPage = $state(1);

	// Format date
	function formatDate(dateString: string) {
		const date = new Date(dateString);
		return new Intl.DateTimeFormat('en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric'
		}).format(date);
	}

	// Format currency
	function formatCurrency(amount: number | bigint) {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD'
		}).format(amount);
	}

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
	<div class="flex flex-col gap-4">
		<h1 class="text-2xl font-bold text-gray-900">Customers</h1>

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
			Add New Customer
		</button>
	</div>

	<!-- Stats Cards -->
	<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
		<Card>
			<div class="text-center">
				<p class="text-sm font-medium text-gray-500">Total Customers</p>
				<p class="mt-1 text-3xl font-bold text-gray-900">{customers.length}</p>
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
		</Card>

		<Card>
			<div class="text-center">
				<p class="text-sm font-medium text-gray-500">Active Customers</p>
				<p class="mt-1 text-3xl font-bold text-gray-900">
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
		</Card>

		<Card>
			<div class="text-center">
				<p class="text-sm font-medium text-gray-500">Average Spent</p>
				<p class="mt-1 text-3xl font-bold text-gray-900">
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
		</Card>
	</div>

	<Card>
		<!-- Filters -->
		<div class="border-b border-gray-200 p-6">
			<div class="flex flex-col gap-4 md:flex-row">
				<div class="flex-1">
					<div class="relative">
						<input
							type="text"
							bind:value={searchQuery}
							placeholder="Search customers..."
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
						{#each statuses as status, index (index)}
							<option value={status}>{status === 'all' ? 'All Statuses' : status}</option>
						{/each}
					</select>
				</div>
			</div>
		</div>

		<!-- Customers Table -->
		<div class="overflow-x-auto">
			<table class="min-w-full divide-y divide-gray-200">
				<thead class="bg-gray-50">
					<tr>
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
							Location
						</th>
						<th
							scope="col"
							class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
						>
							Orders
						</th>
						<th
							scope="col"
							class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
						>
							Spent
						</th>
						<th
							scope="col"
							class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
						>
							Last Order
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
					{#each paginatedCustomers as customer, index (index)}
						<tr class="transition-colors hover:bg-gray-50">
							<td class="px-6 py-4 whitespace-nowrap">
								<div class="flex items-center">
									<div class="h-10 w-10 flex-shrink-0">
										<img
											class="h-10 w-10 rounded-full object-cover"
											src={customer.avatar}
											alt={customer.name}
										/>
									</div>
									<div class="ml-4">
										<div class="text-sm font-medium text-gray-900">
											{customer.name}
										</div>
										<div class="text-sm text-gray-500">{customer.email}</div>
									</div>
								</div>
							</td>
							<td class="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
								{customer.location}
							</td>
							<td class="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
								{customer.orders}
							</td>
							<td class="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">
								{formatCurrency(customer.spent)}
							</td>
							<td class="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
								{formatDate(customer.lastOrder)}
							</td>
							<td class="px-6 py-4 whitespace-nowrap">
								<span
									class={`inline-flex rounded-full px-2 text-xs leading-5 font-semibold ${
										customer.status === 'Active'
											? 'bg-green-100 text-green-800'
											: 'bg-gray-100 text-gray-800'
									}`}
								>
									{customer.status}
								</span>
							</td>
							<td class="px-6 py-4 text-right text-sm font-medium whitespace-nowrap">
								<button class="text-primary-600 dark:text-primary-400 hover:text-primary-900 mr-3">
									View
								</button>
								<button class="text-gray-600 hover:text-gray-900"> Edit </button>
							</td>
						</tr>
					{/each}

					{#if paginatedCustomers.length === 0}
						<tr>
							<td colspan="7" class="px-6 py-4 text-center text-sm text-gray-500">
								No customers found matching your criteria.
							</td>
						</tr>
					{/if}
				</tbody>
			</table>
		</div>

		<!-- Pagination -->
		{#if filteredCustomers.length > 0}
			<div class="flex items-center justify-between border-t border-gray-200 px-6 py-3">
				<div class="flex flex-1 justify-between sm:hidden">
					<button onclick={previousPage} class="btn-outline py-2" disabled={currentPage === 1}
						>Previous</button
					>
					<button onclick={nextPage} class="btn-outline py-2" disabled={currentPage === totalPages}
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
								>{Math.min(currentPage * itemsPerPage, filteredCustomers.length)}</span
							>
							of
							<span class="font-medium">{filteredCustomers.length}</span>
							results
						</p>
					</div>
					<div>
						<nav
							class="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
							aria-label="Pagination"
						>
							<button
								onclick={previousPage}
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

							<button
								onclick={nextPage}
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
