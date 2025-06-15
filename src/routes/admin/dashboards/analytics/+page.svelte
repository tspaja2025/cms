<script>
	import Dashboard from '$lib/custom/analytics/dashboard.svelte';
	import { currentPage } from '$lib/custom/analytics/store/analytics-navigation';
</script>

<svelte:head>
	<title>Admin Dashboard</title>
</svelte:head>

<div class="flex h-screen bg-gray-50">
	<main class="flex-1 overflow-y-auto">
		{#if $currentPage === 'dashboard'}
			<Dashboard />
		{:else if $currentPage === 'analytics'}
			<div class="p-6">
				<h1 class="mb-6 text-2xl font-bold text-gray-900">Analytics</h1>
				<div class="card">
					<p class="text-gray-600">Analytics page content coming soon...</p>
				</div>
			</div>
		{:else if $currentPage === 'reports'}
			<div class="p-6">
				<h1 class="mb-6 text-2xl font-bold text-gray-900">Reports</h1>
				<div class="card">
					<p class="text-gray-600">Reports page content coming soon...</p>
				</div>
			</div>
		{:else if $currentPage === 'settings'}
			<div class="p-6">
				<h1 class="mb-6 text-2xl font-bold text-gray-900">Settings</h1>
				<div class="card">
					<p class="text-gray-600">Settings page content coming soon...</p>
				</div>
			</div>
		{/if}
	</main>
</div>
