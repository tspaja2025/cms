<script>
	import MetricCard from '$lib/custom/analytics/metric-card.svelte';
	// import ChartCard from "$lib/custom/analytics/chart-card.svelte";
	import {
		metricsData,
		revenueChartData,
		ordersChartData,
		trafficSourcesData
	} from '$lib/custom/analytics/store/analytics';
	import * as Card from '$lib/components/ui/card';
	import { chart } from '$lib/custom/apexchart/apexchart';
</script>

<svelte:head>
	<title>Admin Analytics Dashboard</title>
	<meta name="description" content="Admin Analytics Dashboard" />
</svelte:head>

<div class="space-y-6 p-6">
	<!-- Header -->
	<div class="flex items-center justify-between">
		<div>
			<h1 class="text-3xl font-bold">Analytics Dashboard</h1>
			<p class="mt-1">Welcome back! Here's what's happening with your business.</p>
		</div>
		<div class="text-sm text-gray-500">
			Last updated: {new Date().toLocaleDateString()}
		</div>
	</div>

	<!-- Metrics Cards -->
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
		{#each metricsData as metric (metric.title)}
			<MetricCard {metric} />
		{/each}
	</div>

	<!-- Charts Grid -->
	<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
		<Card.Root>
			<Card.Header>
				<Card.Title>Revenue Overview</Card.Title>
				<Card.Description>Monthly revenue for the current year</Card.Description>
			</Card.Header>
			<Card.Content>
				<div use:chart={revenueChartData}></div>
			</Card.Content>
		</Card.Root>

		<Card.Root>
			<Card.Header>
				<Card.Title>Orders by Month</Card.Title>
				<Card.Description>Order volume throughout the year</Card.Description>
			</Card.Header>
			<Card.Content>
				<div use:chart={ordersChartData}></div>
			</Card.Content>
		</Card.Root>
	</div>

	<!-- Bottom Row -->
	<div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
		<div class="lg:col-span-2">
			<Card.Root>
				<Card.Header>
					<Card.Title>Traffic Sources</Card.Title>
					<Card.Description>subtitle="Where your visitors are coming from</Card.Description>
				</Card.Header>
				<Card.Content>
					<div use:chart={trafficSourcesData}></div>
				</Card.Content>
			</Card.Root>
		</div>

		<Card.Root>
			<Card.Header>
				<Card.Title>Recent Activity</Card.Title>
			</Card.Header>
			<Card.Content class="space-y-4">
				<div class="flex items-start space-x-3">
					<div class="bg-primary-500 mt-2 h-2 w-2 rounded-full"></div>
					<div class="flex-1">
						<p class="text-sm font-medium">New order placed</p>
						<p class="text-xs text-gray-500">2 minutes ago</p>
					</div>
				</div>
				<div class="flex items-start space-x-3">
					<div class="bg-secondary-500 mt-2 h-2 w-2 rounded-full"></div>
					<div class="flex-1">
						<p class="text-sm font-medium">User registered</p>
						<p class="text-xs text-gray-500">5 minutes ago</p>
					</div>
				</div>
				<div class="flex items-start space-x-3">
					<div class="bg-accent-500 mt-2 h-2 w-2 rounded-full"></div>
					<div class="flex-1">
						<p class="text-sm font-medium">Payment received</p>
						<p class="text-xs text-gray-500">10 minutes ago</p>
					</div>
				</div>
				<div class="flex items-start space-x-3">
					<div class="mt-2 h-2 w-2 rounded-full bg-orange-500"></div>
					<div class="flex-1">
						<p class="text-sm font-medium">Report generated</p>
						<p class="text-xs text-gray-500">15 minutes ago</p>
					</div>
				</div>
			</Card.Content>
		</Card.Root>
	</div>
</div>
