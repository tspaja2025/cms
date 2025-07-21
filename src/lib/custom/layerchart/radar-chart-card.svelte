<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import * as Chart from '$lib/components/ui/chart/index';
	import { LineChart } from 'layerchart';
	import { barChartData, chartConfig } from '$lib/custom/layerchart/store/data';
	import { curveLinearClosed } from 'd3-shape';
	import { scaleBand } from 'd3-scale';
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Radar Chart</Card.Title>
		<Card.Description>Showing total visitors for the last 6 months</Card.Description>
	</Card.Header>
	<Card.Content>
		<Chart.Container config={chartConfig} class="mx-auto aspect-square max-h-[250px]">
			<LineChart
				data={barChartData}
				series={[
					{
						key: 'desktop',
						label: 'Desktop',
						color: chartConfig.desktop.color
					}
				]}
				radial
				x="month"
				xScale={scaleBand()}
				padding={12}
				props={{
					spline: {
						curve: curveLinearClosed,
						fill: 'var(--color-desktop)',
						fillOpacity: 0.6,
						stroke: '0',
						motion: 'tween'
					},
					xAxis: {
						tickLength: 0
					},
					yAxis: {
						format: () => ''
					},
					grid: {
						radialY: 'linear'
					},
					tooltip: {
						context: {
							mode: 'voronoi'
						}
					},
					highlight: {
						lines: false
					}
				}}
			>
				{#snippet tooltip()}
					<Chart.Tooltip />
				{/snippet}
			</LineChart>
		</Chart.Container>
	</Card.Content>
</Card.Root>
