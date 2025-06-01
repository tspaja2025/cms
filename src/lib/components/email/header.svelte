<script lang="ts">
	import { searchQuery, currentFolder } from '$lib/components/email/store/email-store';
	import Icon from '$lib/components/email/icon.svelte';

	let searchValue = '';

	function handleSearch() {
		searchQuery.set(searchValue);
	}

	// Format folder name for display
	$: folderName = $currentFolder.charAt(0).toUpperCase() + $currentFolder.slice(1);

	// Handle sidebar toggle for mobile
	let isSidebarOpen = false;
	function toggleSidebar() {
		isSidebarOpen = !isSidebarOpen;
		const event = new CustomEvent('toggleSidebar', { detail: { isOpen: isSidebarOpen } });
		window.dispatchEvent(event);
	}
</script>

<header
	class="top-0 z-10 flex h-16 w-full items-center justify-between border-b border-gray-200 bg-white px-4"
>
	<div class="flex items-center">
		<button on:click={toggleSidebar} class="mr-4 text-gray-600 md:hidden">
			<Icon name="menu" class="h-6 w-6" />
		</button>

		<h1 class="hidden text-xl font-semibold text-gray-800 md:block">
			{folderName}
		</h1>
	</div>

	<div class="mx-4 max-w-2xl flex-1">
		<div class="relative">
			<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
				<Icon name="search" class="h-5 w-5 text-gray-400" />
			</div>
			<input
				type="text"
				placeholder="Search emails"
				class="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 py-2 pr-3 pl-10 text-gray-900"
				bind:value={searchValue}
				on:input={handleSearch}
			/>
		</div>
	</div>

	<div class="flex items-center space-x-4">
		<button class="text-gray-600">
			<Icon name="bell" class="h-6 w-6" />
		</button>
		<button class="text-gray-600">
			<Icon name="cog" class="h-6 w-6" />
		</button>
		<div
			class="bg-primary-500 flex h-8 w-8 items-center justify-center rounded-full font-medium text-white"
		>
			M
		</div>
	</div>
</header>
