<script lang="ts">
	import MetricCard from '$lib/custom/analytics/metric-card.svelte';
	import {
		metricsData,
		ordersByMonthConfig,
		ordersByMonthData,
		revenueOverviewConfig,
		revenueOverviewData,
		trafficSourcesConfig,
		trafficSourcesData
	} from '$lib/custom/analytics/store/analytics';
	import * as Chart from '$lib/components/ui/chart/index';
	import * as Card from '$lib/components/ui/card/index';
	import { AreaChart, BarChart, PieChart, type ChartContextValue } from 'layerchart';
	import { scaleBand, scaleUtc } from 'd3-scale';
	import { curveNatural } from 'd3-shape';
	import { cubicInOut } from 'svelte/easing';

	let context = $state<ChartContextValue>();
</script>

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
				<Chart.Container config={revenueOverviewConfig}>
					<AreaChart
						data={revenueOverviewData}
						x="date"
						xScale={scaleUtc()}
						series={[
							{
								key: 'revenue',
								label: 'Revenue',
								color: revenueOverviewConfig.revenue.color
							}
						]}
						axis="x"
						props={{
							area: {
								curve: curveNatural,
								'fill-opacity': 0.4,
								line: { class: 'stroke-1' },
								motion: 'tween'
							},
							xAxis: {
								format: (v: Date) => v.toLocaleDateString('en-US', { month: 'short' })
							}
						}}
					>
						{#snippet tooltip()}
							<Chart.Tooltip
								labelFormatter={(v: Date) => v.toLocaleDateString('en-US', { month: 'long' })}
								indicator="line"
							/>
						{/snippet}
					</AreaChart>
				</Chart.Container>
			</Card.Content>
		</Card.Root>

		<Card.Root>
			<Card.Header>
				<Card.Title>Orders by Month</Card.Title>
				<Card.Description>Order volume throughout the year</Card.Description>
			</Card.Header>
			<Card.Content>
				<Chart.Container config={ordersByMonthConfig}>
					<BarChart
						bind:context
						data={ordersByMonthData}
						xScale={scaleBand().padding(0.25)}
						x="month"
						axis="x"
						series={[{ key: 'orders', label: 'Orders', color: ordersByMonthConfig.orders.color }]}
						props={{
							bars: {
								stroke: 'none',
								rounded: 'all',
								radius: 8,
								// use the height of the chart to animate the bars
								initialY: context?.height,
								initialHeight: 0,
								motion: {
									x: { type: 'tween', duration: 500, easing: cubicInOut },
									width: { type: 'tween', duration: 500, easing: cubicInOut },
									height: { type: 'tween', duration: 500, easing: cubicInOut },
									y: { type: 'tween', duration: 500, easing: cubicInOut }
								}
							},
							highlight: { area: { fill: 'none' } },
							xAxis: { format: (d) => d.slice(0, 3) }
						}}
					>
						{#snippet tooltip()}
							<Chart.Tooltip hideLabel />
						{/snippet}
					</BarChart>
				</Chart.Container>
			</Card.Content>
		</Card.Root>
	</div>

	<!-- Bottom Row -->
	<div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
		<div class="lg:col-span-2">
			<Card.Root>
				<Card.Header>
					<Card.Title>Traffic Sources</Card.Title>
					<Card.Description>Where your visitors are coming from</Card.Description>
				</Card.Header>
				<Card.Content>
					<Chart.Container
						config={trafficSourcesConfig}
						class="mx-auto aspect-square max-h-[250px]"
					>
						<PieChart
							data={trafficSourcesData}
							key="source"
							value="sources"
							c="color"
							innerRadius={60}
							padding={29}
							props={{ pie: { motion: 'tween' } }}
						>
							{#snippet tooltip()}
								<Chart.Tooltip hideLabel />
							{/snippet}
						</PieChart>
					</Chart.Container>
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
