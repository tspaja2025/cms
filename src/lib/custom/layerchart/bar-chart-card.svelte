<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import * as Chart from '$lib/components/ui/chart/index';
	import { BarChart, type ChartContextValue } from 'layerchart';
	import { barChartData, chartConfig } from '$lib/custom/layerchart/store/data';
	import { scaleBand } from 'd3-scale';
	import { cubicInOut } from 'svelte/easing';

	let context = $state<ChartContextValue>();
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Bar Chart</Card.Title>
		<Card.Description>January - June 2024</Card.Description>
	</Card.Header>
	<Card.Content>
		<Chart.Container config={chartConfig}>
			<BarChart
				bind:context
				data={barChartData}
				xScale={scaleBand().padding(0.25)}
				x="month"
				axis="x"
				series={[{ key: 'desktop', label: 'Desktop', color: chartConfig.desktop.color }]}
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
