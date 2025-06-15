<script lang="ts">
	import { BarChart3, PieChart, FileText, Settings, Home, Menu, X } from '@lucide/svelte';
	import { currentPage } from '$lib/custom/analytics/store/analytics-navigation';

	const { ...restProps } = $props();

	let sidebarOpen = $state(false);

	const navigationItems = [
		{ id: 'dashboard', label: 'Dashboard', icon: Home },
		{ id: 'analytics', label: 'Analytics', icon: BarChart3 },
		{ id: 'reports', label: 'Reports', icon: FileText },
		{ id: 'settings', label: 'Settings', icon: Settings }
	];

	function setCurrentPage(pageId: string) {
		currentPage.set(pageId);
		sidebarOpen = false; // Close sidebar on mobile after navigation
	}
</script>

<!-- Mobile menu button -->
<button
	class="fixed top-4 left-4 z-50 rounded-lg bg-gray-800 p-2 text-white lg:hidden"
	onclick={() => (sidebarOpen = !sidebarOpen)}
>
	{#if sidebarOpen}
		<X size={20} />
	{:else}
		<Menu size={20} />
	{/if}
</button>

<!-- Sidebar overlay for mobile -->
{#if sidebarOpen}
	<div
		class="bg-opacity-50 fixed inset-0 z-40 bg-black lg:hidden"
		onclick={() => (sidebarOpen = false)}
		{...restProps}
	></div>
{/if}

<!-- Sidebar -->
<aside
	class="
  fixed inset-y-0 left-0 z-40 w-64 transform bg-gray-800 shadow-xl
  lg:static {sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform
  duration-300 ease-in-out lg:translate-x-0
"
>
	<div class="flex h-full flex-col">
		<!-- Logo -->
		<div class="flex items-center px-6 py-8">
			<PieChart class="text-primary-400 h-8 w-8" />
			<span class="ml-3 text-xl font-bold text-white">Analytics</span>
		</div>

		<!-- Navigation -->
		<nav class="flex-1 space-y-2 px-4">
			{#each navigationItems as item (item.id)}
				<button
					class="sidebar-link w-full text-left {$currentPage === item.id ? 'active' : ''}"
					onclick={() => setCurrentPage(item.id)}
				>
					<item.icon class="mr-3 h-5 w-5" />
					{item.label}
				</button>
			{/each}
		</nav>

		<!-- Footer -->
		<div class="border-t border-gray-700 p-4">
			<div class="flex items-center">
				<div class="bg-primary-500 flex h-8 w-8 items-center justify-center rounded-full">
					<span class="text-sm font-medium text-white">JD</span>
				</div>
				<div class="ml-3">
					<p class="text-sm font-medium text-white">John Doe</p>
					<p class="text-xs text-gray-400">Administrator</p>
				</div>
			</div>
		</div>
	</div>
</aside>
