<script lang="ts">
	import * as Chart from '$lib/components/ui/chart/index';
	import * as Card from '$lib/components/ui/card/index';
	import { AreaChart } from 'layerchart';
	import { scaleUtc } from 'd3-scale';
	import { revenueOverviewConfig, revenueOverviewData } from '$lib/store';
	import { curveNatural } from 'd3-shape';
</script>

<Card.Root
	class="bg-gradient-to-t from-primary/5 to-card
shadow-xs dark:bg-card"
>
	<Card.Header>
		<Card.Title>Area Chart</Card.Title>
		<Card.Description>Showing total visitors for the last 6 months</Card.Description>
	</Card.Header>
	<Card.Content>
		<Chart.Container config={revenueOverviewConfig} class="aspect-auto h-[250px] w-full">
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
