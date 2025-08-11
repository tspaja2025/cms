<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button';
	import * as Chart from '$lib/components/ui/chart/index';
	import * as Card from '$lib/components/ui/card/index';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import { weeklySalesConfig, weeklySalesData } from '$lib/custom/dashboard/crm/store/data';
	import EllipsisVerticalIcon from '@lucide/svelte/icons/ellipsis-vertical';
	import { BarChart, type ChartContextValue } from 'layerchart';
	import { scaleBand } from 'd3-scale';
	import { cubicInOut } from 'svelte/easing'

	let context = $state<ChartContextValue>();
</script>

<Card.Root class="shadow-none">
	<Card.Header class="flex items-center justify-between">
		<div>
			<Card.Title>Weekly Sales</Card.Title>
			<Card.Description>Total 100k Sales</Card.Description>
		</div>
		<DropdownMenu.Root>
			<DropdownMenu.Trigger aria-label="weekly settings" class={buttonVariants({ variant: 'ghost', size: 'icon' })}>
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
		<Chart.Container config={weeklySalesConfig}>
			<BarChart
				bind:context
				data={weeklySalesData}
				xScale={scaleBand().padding(0.25)}
				x="day"
				axis="x"
				series={[{ key: 'sales', label: 'Sales', color: weeklySalesConfig.sales.color }]}
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
