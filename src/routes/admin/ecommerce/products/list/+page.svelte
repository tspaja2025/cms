<script lang="ts">
	import Card from '$lib/custom/ecommerce/ui/card.svelte';
	import StatusBadge from '$lib/custom/ecommerce/ui/status-badge.svelte';

	let searchQuery = $state('');
	let selectedCategory = $state('all');
	let selectedStatus = $state('all');
	let currentPage = $state(1);

	// Sample data
	const products = [
		{
			id: 1,
			name: 'Wireless Headphones',
			image:
				'https://images.pexels.com/photos/3394665/pexels-photo-3394665.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
			price: 149.99,
			category: 'Electronics',
			inventory: 45,
			status: 'In Stock'
		},
		{
			id: 2,
			name: 'Smart Watch',
			image:
				'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
			price: 299.99,
			category: 'Electronics',
			inventory: 32,
			status: 'In Stock'
		},
		{
			id: 3,
			name: 'Bluetooth Speaker',
			image:
				'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
			price: 89.99,
			category: 'Electronics',
			inventory: 8,
			status: 'Low Stock'
		},
		{
			id: 4,
			name: 'Laptop Backpack',
			image:
				'https://images.pexels.com/photos/1294731/pexels-photo-1294731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
			price: 79.99,
			category: 'Accessories',
			inventory: 64,
			status: 'In Stock'
		},
		{
			id: 5,
			name: 'Mechanical Keyboard',
			image:
				'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
			price: 129.99,
			category: 'Electronics',
			inventory: 0,
			status: 'Out of Stock'
		},
		{
			id: 6,
			name: 'Ergonomic Office Chair',
			image:
				'https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
			price: 249.99,
			category: 'Furniture',
			inventory: 12,
			status: 'In Stock'
		},
		{
			id: 7,
			name: 'Smartphone Stand',
			image:
				'https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
			price: 24.99,
			category: 'Accessories',
			inventory: 87,
			status: 'In Stock'
		},
		{
			id: 8,
			name: 'Wireless Charger',
			image:
				'https://images.pexels.com/photos/4526482/pexels-photo-4526482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
			price: 39.99,
			category: 'Electronics',
			inventory: 41,
			status: 'In Stock'
		}
	];

	// Format currency
	function formatCurrency(amount) {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD'
		}).format(amount);
	}

	// Categories
	const categories = ['all', ...new Set(products.map((product) => product.category))];

	// Statuses
	const statuses = ['all', 'In Stock', 'Low Stock', 'Out of Stock'];

	// Filter products
	let filteredProducts = $derived(
		products.filter((product) => {
			// Search query
			const matchesQuery = searchQuery
				? product.name.toLowerCase().includes(searchQuery.toLowerCase())
				: true;

			// Category
			const matchesCategory =
				selectedCategory === 'all' ? true : product.category === selectedCategory;

			// Status
			const matchesStatus = selectedStatus === 'all' ? true : product.status === selectedStatus;

			return matchesQuery && matchesCategory && matchesStatus;
		})
	);

	// Pagination
	const itemsPerPage = 5;
	let totalPages = $derived(Math.ceil(filteredProducts.length / itemsPerPage));
	let paginatedProducts = $derived(
		filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
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
		<h1 class="text-2xl font-bold text-gray-900">Products</h1>

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
			Add New Product
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
							placeholder="Search products..."
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
					<select bind:value={selectedCategory} class="input">
						{#each categories as category, categoryIndex (categoryIndex)}
							<option value={category}>{category === 'all' ? 'All Categories' : category}</option>
						{/each}
					</select>
				</div>

				<div class="w-full md:w-48">
					<select bind:value={selectedStatus} class="input">
						{#each statuses as status, statIndex (statIndex)}
							<option value={status}>{status === 'all' ? 'All Statuses' : status}</option>
						{/each}
					</select>
				</div>
			</div>
		</div>

		<!-- Product Table -->
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
							Category
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
							Inventory
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
					{#each paginatedProducts as product, proIndex (proIndex)}
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
										<div class="text-sm font-medium text-gray-900">
											{product.name}
										</div>
										<div class="text-sm text-gray-500">ID: #{product.id}</div>
									</div>
								</div>
							</td>
							<td class="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
								{product.category}
							</td>
							<td class="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">
								{formatCurrency(product.price)}
							</td>
							<td class="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
								{product.inventory}
							</td>
							<td class="px-6 py-4 whitespace-nowrap">
								<StatusBadge status={product.status} />
							</td>
							<td class="px-6 py-4 text-right text-sm font-medium whitespace-nowrap">
								<button class="text-primary-600 hover:text-primary-900"> Edit </button>
								<button class="text-error-600 hover:text-error-900"> Delete </button>
							</td>
						</tr>
					{/each}

					{#if paginatedProducts.length === 0}
						<tr>
							<td colspan="6" class="px-6 py-4 text-center text-sm text-gray-500">
								No products found matching your criteria.
							</td>
						</tr>
					{/if}
				</tbody>
			</table>
		</div>

		<!-- Pagination -->
		{#if filteredProducts.length > 0}
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
								>{Math.min(currentPage * itemsPerPage, filteredProducts.length)}</span
							>
							of
							<span class="font-medium">{filteredProducts.length}</span>
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
