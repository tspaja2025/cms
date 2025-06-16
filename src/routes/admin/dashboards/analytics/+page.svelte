<script>
	import MetricCard from '$lib/custom/analytics/metric-card.svelte';
	import ChartCard from '$lib/custom/analytics/chart-card.svelte';
	import {
		metricsData,
		revenueChartData,
		ordersChartData,
		trafficSourcesData
	} from '$lib/custom/analytics/store/analytics';
	import { currentPage } from '$lib/custom/analytics/store/analytics-navigation';
</script>

<svelte:head>
	<title>Admin Dashboard</title>
</svelte:head>

<div class="flex h-screen bg-gray-50">
	<main class="flex-1 overflow-y-auto">
		{#if $currentPage === 'dashboard'}
			<div class="space-y-6 p-6">
				<!-- Header -->
				<div class="flex items-center justify-between">
					<div>
						<h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
						<p class="mt-1 text-gray-600">Welcome back! Here's what's happening with your business.</p>
					</div>
					<div class="text-sm text-gray-500">
						Last updated: {new Date().toLocaleDateString()}
					</div>
				</div>

				<!-- Metrics Cards -->
				<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
					{#each $metricsData as metric (metric.title)}
						<MetricCard {metric} />
					{/each}
				</div>

				<!-- Charts Grid -->
				<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
					<ChartCard
						title="Revenue Overview"
						subtitle="Monthly revenue for the current year"
						chartData={$revenueChartData}
						chartType="area"
					/>

					<ChartCard
						title="Orders by Month"
						subtitle="Order volume throughout the year"
						chartData={$ordersChartData}
						chartType="bar"
					/>
				</div>

				<!-- Bottom Row -->
				<div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
					<div class="lg:col-span-2">
						<ChartCard
							title="Traffic Sources"
							subtitle="Where your visitors are coming from"
							chartData={$trafficSourcesData}
							chartType="donut"
						/>
					</div>

					<div class="card">
						<h3 class="mb-4 text-lg font-semibold text-gray-900">Recent Activity</h3>
						<div class="space-y-4">
							<div class="flex items-start space-x-3">
								<div class="bg-primary-500 mt-2 h-2 w-2 rounded-full"></div>
								<div class="flex-1">
									<p class="text-sm font-medium text-gray-900">New order placed</p>
									<p class="text-xs text-gray-500">2 minutes ago</p>
								</div>
							</div>
							<div class="flex items-start space-x-3">
								<div class="bg-secondary-500 mt-2 h-2 w-2 rounded-full"></div>
								<div class="flex-1">
									<p class="text-sm font-medium text-gray-900">User registered</p>
									<p class="text-xs text-gray-500">5 minutes ago</p>
								</div>
							</div>
							<div class="flex items-start space-x-3">
								<div class="bg-accent-500 mt-2 h-2 w-2 rounded-full"></div>
								<div class="flex-1">
									<p class="text-sm font-medium text-gray-900">Payment received</p>
									<p class="text-xs text-gray-500">10 minutes ago</p>
								</div>
							</div>
							<div class="flex items-start space-x-3">
								<div class="mt-2 h-2 w-2 rounded-full bg-orange-500"></div>
								<div class="flex-1">
									<p class="text-sm font-medium text-gray-900">Report generated</p>
									<p class="text-xs text-gray-500">15 minutes ago</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
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
