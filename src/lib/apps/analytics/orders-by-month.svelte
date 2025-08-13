<script lang="ts">
	import * as Chart from '$lib/components/ui/chart/index';
	import * as Card from '$lib/components/ui/card/index';
	import { BarChart, type ChartContextValue } from 'layerchart';
	import { ordersByMonthConfig, ordersByMonthData } from '$lib/store';
	import { cubicInOut } from 'svelte/easing';
	import { scaleBand } from 'd3-scale';

	let context = $state<ChartContextValue>();
</script>

<Card.Root class="bg-gradient-to-t from-primary/5 to-card shadow-xs dark:bg-card">
	<Card.Header>
		<Card.Description>Revenue Overview</Card.Description>
		<Card.Title>Monthly revenue for the current year</Card.Title>
	</Card.Header>
	<Card.Content>
		<Chart.Container config={ordersByMonthConfig}>
			<BarChart
				bind:context
				data={ordersByMonthData}
				xScale={scaleBand().padding(0.25)}
				x="month"
				axis="x"
				series={[{ key: 'desktop', label: 'Desktop', color: ordersByMonthConfig.desktop.color }]}
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
