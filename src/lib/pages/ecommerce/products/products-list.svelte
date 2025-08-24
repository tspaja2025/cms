<script lang="ts">
	import { Badge } from '$lib/components/ui/badge/index';
	import { Button } from '$lib/components/ui/button/index';
	import * as Card from '$lib/components/ui/card/index';
	import { Input } from '$lib/components/ui/input/index';
	import * as Select from '$lib/components/ui/select/index';
	import * as Table from '$lib/components/ui/table/index';
	import { products } from '$lib/store';
	import { formatCurrency } from '$lib/utils';
	import PencilIcon from '@lucide/svelte/icons/pencil';
	import TrashIcon from '@lucide/svelte/icons/trash';
	import PlusIcon from '@lucide/svelte/icons/plus';
	import ChevronLeftIcon from '@lucide/svelte/icons/chevron-left';
	import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';

	let searchQuery = $state('');
	let selectedCategory = $state('all');
	let selectedStatus = $state('all');
	let currentPage = $state(1);

	// Categories
	const categories = ['all', ...new Set(products.map((product) => product.status))];

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
				selectedCategory === 'all' ? true : product.status === selectedCategory;

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
					id="search-products"
					type="text"
					bind:value={searchQuery}
					placeholder="Search products..."
				/>
			</div>

			<Select.Root type="single" bind:value={selectedCategory}>
				<Select.Trigger>All Categories</Select.Trigger>
				<Select.Content>
					{#each categories as category, categoryIndex (categoryIndex)}
						<Select.Item value={category}>{category}</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>

			<Select.Root type="single" bind:value={selectedStatus}>
				<Select.Trigger>All Statuses</Select.Trigger>
				<Select.Content>
					{#each statuses as status, statIndex (statIndex)}
						<Select.Item value={status}>{status}</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
		</div>
		<Card.Action>
			<Button>
				<PlusIcon />
				Add New Product
			</Button>
		</Card.Action>
	</Card.Header>

	<!-- Product Table -->
	<Card.Content class="overflow-x-auto">
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head class="text-left text-xs font-medium tracking-wider uppercase">
						Product
					</Table.Head>
					<Table.Head class="text-left text-xs font-medium tracking-wider uppercase">
						Category
					</Table.Head>
					<Table.Head class="text-left text-xs font-medium tracking-wider uppercase">
						Price
					</Table.Head>
					<Table.Head class="text-left text-xs font-medium tracking-wider uppercase">
						Inventory
					</Table.Head>
					<Table.Head class="text-left text-xs font-medium tracking-wider uppercase">
						Status
					</Table.Head>
					<Table.Head class="text-left text-xs font-medium tracking-wider uppercase">
						Actions
					</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each paginatedProducts as product, proIndex (proIndex)}
					<Table.Row>
						<Table.Cell class="px-6 py-4 whitespace-nowrap">
							<div class="flex items-center">
								<div class="h-10 w-10 flex-shrink-0">
									<img
										class="h-10 w-10 rounded-md object-cover"
										src={product.image}
										alt={product.name}
									/>
								</div>
								<div class="ml-4">
									<div class="text-sm font-medium">
										{product.name}
									</div>
									<div class="text-sm">ID: #{product.id}</div>
								</div>
							</div>
						</Table.Cell>
						<Table.Cell class="text-sm whitespace-nowrap">
							{product.status}
						</Table.Cell>
						<Table.Cell class="text-sm font-medium whitespace-nowrap">
							{formatCurrency(product.price)}
						</Table.Cell>
						<Table.Cell class="text-sm whitespace-nowrap">
							{product.inventory}
						</Table.Cell>
						<Table.Cell class="whitespace-nowrap">
							<Badge>{product.status}</Badge>
						</Table.Cell>
						<Table.Cell class="text-right text-sm font-medium whitespace-nowrap">
							<Button variant="ghost" size="icon"><PencilIcon /></Button>
							<Button variant="ghost" size="icon"><TrashIcon /></Button>
						</Table.Cell>
					</Table.Row>
				{/each}

				{#if paginatedProducts.length === 0}
					<Table.Row>
						<Table.Cell class="text-center text-sm">
							No products found matching your criteria.
						</Table.Cell>
					</Table.Row>
				{/if}
			</Table.Body>
		</Table.Root>
	</Card.Content>

	<!-- Pagination -->
	{#if filteredProducts.length > 0}
		<Card.Footer class="flex items-center justify-between border-t">
			<div class="flex flex-1 justify-between sm:hidden">
				<Button onclick={previousPage} variant="outline" disabled={currentPage === 1}
					>Previous</Button
				>
				<Button onclick={nextPage} variant="outline" disabled={currentPage === totalPages}
					>Next</Button
				>
			</div>
			<div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
				<div>
					<p class="text-sm">
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
