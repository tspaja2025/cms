<script lang="ts">
	import * as Chart from '$lib/components/ui/chart/index';
	import * as Card from '$lib/components/ui/card/index';
	import { BarChart } from 'layerchart';
	import { scaleBand } from 'd3-scale';
	import { revenueReportConfig, revenueReportData } from '$lib/store';
</script>

<Card.Root
	class="bg-gradient-to-t from-primary/5 to-card
shadow-xs dark:bg-card"
>
	<Card.Header>
		<Card.Title>Bar Chart</Card.Title>
		<Card.Description>January - June 2024</Card.Description>
	</Card.Header>
	<Card.Content>
		<Chart.Container config={revenueReportConfig}>
			<BarChart
				labels={{
					offset: 5,
					value: (d) => d.month,
					fill: (d) => {
						if (d.revenue > 0) {
							return 'var(--chart-1)';
						} else if (d.revenue < 0) {
							return 'var(--chart-2)';
						}
					}
				}}
				data={revenueReportData}
				xScale={scaleBand().padding(0.25)}
				x="month"
				y="revenue"
				yNice={4}
				yBaseline={0}
				cRange={['var(--chart-1)', 'var(--chart-2)']}
				c={(d) => (d.revenue > 0 ? 'var(--chart-1)' : 'var(--chart-2)')}
				axis={false}
				props={{
					bars: { stroke: 'none', radius: 0 },
					highlight: { area: { fill: 'none' } },
					xAxis: { format: (d) => d.slice(0, 3) }
				}}
			>
				{#snippet tooltip()}
					<Chart.Tooltip hideLabel hideIndicator nameKey="revenue" />
				{/snippet}
			</BarChart>
		</Chart.Container>
	</Card.Content>
</Card.Root>
