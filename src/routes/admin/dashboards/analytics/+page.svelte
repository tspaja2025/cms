<script>
	// import Button from '$lib/dashboard/ui/button.svelte';
	// import Card from '$lib/dashboard/ui/card.svelte';
	// import { EllipsisVerticalIcon } from '@lucide/svelte';
	// import Sidebar from '$lib/components/analytics/sidebar.svelte';
	import Dashboard from '$lib/components/analytics/dashboard.svelte';
	import { currentPage } from '$lib/components/analytics/store/analytics-navigation';
</script>

<svelte:head>
	<title>Admin Dashboard</title>
</svelte:head>

<!-- <div class="mb-4 grid grid-cols-12 gap-4">
	<div class="col-span-3">
		<Card title="Congratulations John!"></Card>
	</div>
	<div class="col-span-9">
		<Card title="Transactions">
			{#snippet actions()}
				<Button class="rounded-full !px-2">
					<EllipsisVerticalIcon />
				</Button>
			{/snippet}
		</Card>
	</div>
</div>
<div class="mb-4 grid grid-cols-12 gap-4">
	<div class="col-span-3">
		<Card title="Weekly Overview">
			{#snippet actions()}
				<Button class="rounded-full !px-2">
					<EllipsisVerticalIcon />
				</Button>
			{/snippet}
		</Card>
	</div>
	<div class="col-span-3">
		<Card title="Total Earning">
			{#snippet actions()}
				<Button class="rounded-full !px-2">
					<EllipsisVerticalIcon />
				</Button>
			{/snippet}
		</Card>
	</div>
	<div class="col-span-6">
		<Card title="Sales Overview">
			{#snippet actions()}
				<Button class="rounded-full !px-2">
					<EllipsisVerticalIcon />
				</Button>
			{/snippet}
		</Card>
	</div>
</div>
<div class="mb-4 grid grid-cols-12 gap-4">
	<div class="col-span-4">
		<Card title="Performance">
			{#snippet actions()}
				<Button class="rounded-full !px-2">
					<EllipsisVerticalIcon />
				</Button>
			{/snippet}
		</Card>
	</div>
	<div class="col-span-4">
		<Card title="Deposit">
			{#snippet actions()}
				<Button class="rounded-full !px-2">
					<EllipsisVerticalIcon />
				</Button>
			{/snippet}
		</Card>
	</div>
	<div class="col-span-4">
		<Card title="Withdraw"></Card>
	</div>
</div>
<div class="grid grid-cols-12 gap-4">
	<div class="col-span-3">
		<Card title="Sales by Countries">
			{#snippet actions()}
				<Button class="rounded-full !px-2">
					<EllipsisVerticalIcon />
				</Button>
			{/snippet}
		</Card>
	</div>
	<div class="col-span-9">
		<Card title="Overview"></Card>
	</div>
</div> -->

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
