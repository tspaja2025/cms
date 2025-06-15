<script lang="ts">
	import { invoiceStats } from '$lib/custom/invoice/store/store';

	let isMobileOpen = $state(false);

	const toggleMobileMenu = () => {
		isMobileOpen = !isMobileOpen;
	};

	const closeMobileMenu = () => {
		if (isMobileOpen) isMobileOpen = false;
	};

	const isActive = (path: string) => $location.startsWith(path);

	const navItems = [
		{ path: '/invoices', label: 'All Invoices', count: () => $invoiceStats.count },
		{
			path: '/invoices?status=draft',
			label: 'Drafts',
			count: () => $invoiceStats.countByStatus.draft
		},
		{ path: '/invoices?status=sent', label: 'Sent', count: () => $invoiceStats.countByStatus.sent },
		{ path: '/invoices?status=paid', label: 'Paid', count: () => $invoiceStats.countByStatus.paid },
		{
			path: '/invoices?status=overdue',
			label: 'Overdue',
			count: () => $invoiceStats.countByStatus.overdue
		}
	];

	const handleNavClick = (path: string) => {
		push(path);
		closeMobileMenu();
	};
</script>

<!-- Mobile Menu Button -->
<div class="fixed top-4 left-4 z-20 md:hidden">
	<button
		class="rounded-lg bg-white p-2 shadow-sm"
		on:click={toggleMobileMenu}
		aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="text-secondary-900 h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			{#if isMobileOpen}
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
</div>

<!-- Mobile Sidebar -->
{#if isMobileOpen}
	<div class="bg-secondary-900 bg-opacity-50 fixed inset-0 z-10" on:click={closeMobileMenu}></div>
{/if}

<!-- Sidebar -->
<aside
	class={`border-secondary-200 h-screen border-r bg-white transition-all duration-300 ease-in-out ${
		isMobileOpen ? 'fixed left-0 z-10 w-64' : 'fixed -left-64 z-10 w-64 md:left-0'
	} md:relative md:block`}
>
	<div class="border-secondary-200 flex items-center justify-center border-b p-4">
		<h1 class="text-primary-600 text-xl font-bold">Invoice App</h1>
	</div>

	<nav class="p-4">
		<ul class="space-y-2">
			{#each navItems as item, indexItem (indexItem)}
				<li>
					<button
						class={`flex w-full items-center justify-between rounded-lg px-4 py-2 transition-colors duration-200 ${
							isActive(item.path)
								? 'bg-primary-50 text-primary-700'
								: 'text-secondary-700 hover:bg-secondary-100'
						}`}
						onclick={() => handleNavClick(item.path)}
					>
						<span>{item.label}</span>
						<span
							class="bg-secondary-100 text-secondary-800 rounded-full px-2 py-1 text-xs font-medium"
						>
							{item.count()}
						</span>
					</button>
				</li>
			{/each}
		</ul>
	</nav>

	<div class="border-secondary-200 absolute bottom-0 w-full border-t p-4">
		<button
			class="text-secondary-600 hover:text-secondary-900 flex w-full items-center justify-center space-x-2 px-4 py-2 transition-colors duration-200"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
					clip-rule="evenodd"
				/>
			</svg>
			<span>Settings</span>
		</button>
	</div>
</aside>
