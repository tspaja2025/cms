<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button';
	import * as Chart from '$lib/components/ui/chart/index';
	import * as Card from '$lib/components/ui/card/index';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import EllipsisVerticalIcon from '@lucide/svelte/icons/ellipsis-vertical';
	import { revenueReportConfig, revenueReportData } from '$lib/custom/dashboard/crm/store/data';
	import { BarChart } from 'layerchart';
	import { scaleBand } from 'd3-scale';
</script>

<Card.Root class="shadow-none">
	<Card.Header class="flex items-center justify-between">
		<Card.Title>Revenue Report</Card.Title>
		<DropdownMenu.Root>
			<DropdownMenu.Trigger aria-label="revenue settings" class={buttonVariants({ variant: 'ghost', size: 'icon' })}>
				<EllipsisVerticalIcon />
			</DropdownMenu.Trigger>
			<DropdownMenu.Content>
				<DropdownMenu.Item>Last 28 Days</DropdownMenu.Item>
				<DropdownMenu.Item>Last Month</DropdownMenu.Item>
				<DropdownMenu.Item>Last year</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</Card.Header>
	<Card.Content>
		<Chart.Container config={revenueReportConfig}>
			<BarChart
				labels={{
					offset: 5,
					value: (d) => d.month,
					fill: (d) => {
						if (d.sales > 0) {
							return 'var(--chart-1)';
						} else if (d.sales < 0) {
							return 'var(--chart-2)';
						}
					}
				}}
				data={revenueReportData}
				xScale={scaleBand().padding(0.25)}
				x="month"
				y="sales"
				yNice={4}
				yBaseline={0}
				cRange={['var(--chart-1)', 'var(--chart-2)']}
				c={(d) => (d.sales > 0 ? 'var(--chart-1)' : 'var(--chart-2)')}
				axis={false}
				props={{
					bars: { stroke: 'none', radius: 0 },
					highlight: { area: { fill: 'none' } },
					xAxis: { format: (d) => d.slice(0, 3) }
				}}
			>
				{#snippet tooltip()}
					<Chart.Tooltip hideLabel hideIndicator nameKey="sales" />
				{/snippet}
			</BarChart>
		</Chart.Container>
	</Card.Content>
</Card.Root>
