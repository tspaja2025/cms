<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import * as Chart from '$lib/components/ui/chart/index';
	import { AreaChart } from 'layerchart';
	import { areaChartData, chartConfig } from '$lib/custom/layerchart/store/data';
	import { curveNatural } from 'd3-shape';
	import { scaleUtc } from 'd3-scale';
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Area Chart</Card.Title>
		<Card.Description>Showing total visitors for the last 6 months</Card.Description>
	</Card.Header>
	<Card.Content>
		<Chart.Container config={chartConfig}>
			<AreaChart
				data={areaChartData}
				x="date"
				xScale={scaleUtc()}
				series={[
					{
						key: 'desktop',
						label: 'Desktop',
						color: chartConfig.desktop.color
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
					},
					yAxis: {
						format: (d) => (d >= 1000 ? `${d / 1000}k` : d.toString())
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
