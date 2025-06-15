<script lang="ts">
	import { onMount } from 'svelte';

	// Store for tracking current page
	let currentPath = $state('/');
	let isMobileMenuOpen = $state(false);

	// Navigation items
	const navItems = [
		{
			name: 'Dashboard',
			path: '/',
			icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
		},
		{
			name: 'Products',
			path: '/products',
			icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
		},
		{
			name: 'Orders',
			path: '/orders',
			icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
		},
		{
			name: 'Customers',
			path: '/customers',
			icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
		},
		{
			name: 'Settings',
			path: '/settings',
			icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
		}
	];

	onMount(() => {
		// Update current path based on actual location
		currentPath = window.location.pathname;

		// Listen for route changes
		const handleRouteChange = () => {
			currentPath = window.location.pathname;
			// Close mobile menu on navigation
			isMobileMenuOpen = false;
		};

		window.addEventListener('popstate', handleRouteChange);

		return () => {
			window.removeEventListener('popstate', handleRouteChange);
		};
	});

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}
</script>

<!-- Mobile menu button -->
<button
	class="fixed top-4 left-4 z-30 rounded-md p-2 text-gray-700 focus:outline-none lg:hidden"
	onclick={toggleMobileMenu}
	aria-label="Toggle menu"
>
	<svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
		{#if isMobileMenuOpen}
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M6 18L18 6M6 6l12 12"
			/>
		{:else}
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4 6h16M4 12h16M4 18h16"
			/>
		{/if}
	</svg>
</button>

<!-- Sidebar -->
<aside
	class="fixed z-20 h-full w-64 transform overflow-y-auto bg-white shadow-lg transition-all duration-300 ease-in-out lg:relative lg:translate-x-0"
	class:translate-x-0={isMobileMenuOpen}
	class:-translate-x-full={!isMobileMenuOpen}
>
	<div class="p-6">
		<div class="mb-8 flex items-center">
			<span class="text-primary-600 dark:text-primary-400 text-xl font-bold">eComDash</span>
		</div>

		<nav class="space-y-1">
			{#each navItems as item, itemIndex (itemIndex)}
				<a
					href={item.path}
					class="flex items-center rounded-lg px-4 py-3 text-gray-700 transition-colors duration-200"
					class:bg-primary-50={currentPath === item.path}
					class:text-primary-700={currentPath === item.path}
					class:dark:bg-gray-700={currentPath === item.path}
					class:dark:text-primary-400={currentPath === item.path}
					class:hover:bg-gray-100={currentPath !== item.path}
					class:dark:hover:bg-gray-700={currentPath !== item.path}
				>
					<svg
						class="mr-3 h-5 w-5"
						class:text-primary-600={currentPath === item.path}
						class:dark:text-primary-400={currentPath === item.path}
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={item.icon}
						></path>
					</svg>
					<span>{item.name}</span>
				</a>
			{/each}
		</nav>
	</div>

	<div class="mt-auto px-6 py-4">
		<div class="border-t border-gray-200 pt-4">
			<div
				class="flex items-center rounded-lg px-4 py-3 text-gray-700 transition-colors duration-200 hover:bg-gray-100"
			>
				<div class="flex-shrink-0">
					<img
						class="h-8 w-8 rounded-full"
						src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100"
						alt="User avatar"
					/>
				</div>
				<div class="ml-3">
					<p class="text-sm font-medium">Alex Johnson</p>
					<p class="text-xs text-gray-500">Admin</p>
				</div>
			</div>
		</div>
	</div>
</aside>

<!-- Overlay for mobile menu -->
{#if isMobileMenuOpen}
	<div
		class="bg-opacity-50 fixed inset-0 z-10 bg-black lg:hidden"
		onclick={toggleMobileMenu}
		aria-hidden="true"
	></div>
{/if}
