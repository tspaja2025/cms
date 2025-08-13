<script lang="ts">
	import * as Chart from '$lib/components/ui/chart/index';
	import * as Card from '$lib/components/ui/card/index';
	import { LineChart } from 'layerchart';
	import { scaleUtc } from 'd3-scale';
	import { curveNatural } from 'd3-shape';
	import { eCommercesalesOverviewConfig, eCommercesalesOverviewData } from '$lib/store';
</script>

<Card.Root class="bg-gradient-to-t from-primary/5 to-card shadow-xs dark:bg-card">
	<Card.Header>
		<Card.Title>Sales Overview</Card.Title>
	</Card.Header>
	<Card.Content>
		<Chart.Container config={eCommercesalesOverviewConfig} class="aspect-auto h-[250px] w-full">
			<LineChart
				data={eCommercesalesOverviewData}
				x="date"
				xScale={scaleUtc()}
				axis="x"
				series={[
					{
						key: 'apparel',
						label: 'Apparel',
						color: eCommercesalesOverviewConfig.apparel.color
					},
					{
						key: 'electronics',
						label: 'Electronics',
						color: eCommercesalesOverviewConfig.electronics.color
					},
					{
						key: 'fmcg',
						label: 'FMCG',
						color: eCommercesalesOverviewConfig.fmcg.color
					},
					{
						key: 'other',
						label: 'Other',
						color: eCommercesalesOverviewConfig.other.color
					}
				]}
				props={{
					spline: { curve: curveNatural, motion: 'tween', strokeWidth: 2 },
					xAxis: {
						format: (v: Date) => v.toLocaleDateString('en-US', { month: 'short' })
					},
					highlight: { points: { r: 4 } }
				}}
				legend={{ placement: 'top-right' }}
			>
				{#snippet tooltip()}
					<Chart.Tooltip hideLabel />
				{/snippet}
			</LineChart>
		</Chart.Container>
	</Card.Content>
</Card.Root>
