<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button/index';
	import * as Chart from '$lib/components/ui/chart/index';
	import * as Card from '$lib/components/ui/card/index';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import EllipsisVerticalIcon from '@lucide/svelte/icons/ellipsis-vertical';
	import { totalSalesConfig, totalSalesData } from '$lib/store';
	import { LineChart } from 'layerchart';
	import { scaleUtc } from 'd3-scale';
	import { curveNatural } from 'd3-shape';
</script>

<Card.Root class="bg-gradient-to-t from-primary/5 to-card shadow-xs dark:bg-card">
	<Card.Header>
		<Card.Title>Total Sales</Card.Title>
		<Card.Description>$20,000</Card.Description>
		<Card.Action>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger class={buttonVariants({ variant: 'ghost', size: 'icon' })}>
					<EllipsisVerticalIcon />
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<DropdownMenu.Item>Last 28 Days</DropdownMenu.Item>
					<DropdownMenu.Item>Last Month</DropdownMenu.Item>
					<DropdownMenu.Item>Last Year</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</Card.Action>
	</Card.Header>
	<Card.Content>
		<Chart.Container config={totalSalesConfig}>
			<LineChart
				data={totalSalesData}
				x="date"
				xScale={scaleUtc()}
				axis="x"
				series={[
					{
						key: 'sales',
						label: 'Sales',
						color: totalSalesConfig.sales.color
					}
				]}
				props={{
					spline: { curve: curveNatural, motion: 'tween', strokeWidth: 2 },
					xAxis: {
						format: (v: Date) => v.toLocaleDateString('en-US', { month: 'short' })
					},
					highlight: { points: { r: 4 } }
				}}
			>
				{#snippet tooltip()}
					<Chart.Tooltip hideLabel />
				{/snippet}
			</LineChart>
		</Chart.Container>
	</Card.Content>
</Card.Root>
