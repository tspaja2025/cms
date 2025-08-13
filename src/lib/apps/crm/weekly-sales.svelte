<script lang="ts">
	import * as Chart from '$lib/components/ui/chart/index';
	import * as Card from '$lib/components/ui/card/index';
	import { BarChart, type ChartContextValue } from 'layerchart';
	import { scaleBand } from 'd3-scale';
	import { cubicInOut } from 'svelte/easing';
	import { weeklySalesConfig, weeklySalesData } from '$lib/store';
	import { buttonVariants } from '$lib/components/ui/button/index';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import EllipsisVerticalIcon from '@lucide/svelte/icons/ellipsis-vertical';

	let context = $state<ChartContextValue>();
</script>

<Card.Root class="bg-gradient-to-t from-primary/5 to-card shadow-xs dark:bg-card">
	<Card.Header>
		<Card.Title>Weekly Sales</Card.Title>
		<Card.Description>Total 100k Sales</Card.Description>
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
					xAxis: { format: (d) => d.slice(0, 1) }
				}}
			>
				{#snippet tooltip()}
					<Chart.Tooltip hideLabel />
				{/snippet}
			</BarChart>
		</Chart.Container>
	</Card.Content>
</Card.Root>
