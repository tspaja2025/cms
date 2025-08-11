<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button';
	import * as Chart from '$lib/components/ui/chart/index';
	import * as Card from '$lib/components/ui/card/index';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import EllipsisVerticalIcon from '@lucide/svelte/icons/ellipsis-vertical';
	import { salesOverviewConfig, salesOverviewData } from '$lib/custom/dashboard/crm/store/data';
	import { PieChart, Text } from 'layerchart';

	const totalSales = salesOverviewData.reduce((acc, curr) => acc + curr.sales, 0);
</script>

<Card.Root class="shadow-none">
	<Card.Header class="flex items-center justify-between">
		<Card.Title>Sales Overview</Card.Title>
		<DropdownMenu.Root>
			<DropdownMenu.Trigger aria-label="sales settings" class={buttonVariants({ variant: 'ghost', size: 'icon' })}>
				<EllipsisVerticalIcon />
			</DropdownMenu.Trigger>
			<DropdownMenu.Content>
				<DropdownMenu.Item>Refresh</DropdownMenu.Item>
				<DropdownMenu.Item>Share</DropdownMenu.Item>
				<DropdownMenu.Item>Update</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</Card.Header>
	<Card.Content>
		<Chart.Container config={salesOverviewConfig} class="mx-auto aspect-square max-h-[250px]">
			<PieChart
				data={salesOverviewData}
				key="products"
				value="sales"
				c="color"
				innerRadius={60}
				padding={28}
				props={{ pie: { motion: 'tween' } }}
			>
				{#snippet aboveMarks()}
					<Text
						value={String(totalSales)}
						textAnchor="middle"
						verticalAnchor="middle"
						class="fill-foreground text-3xl! font-bold"
						dy={3}
					/>
					<Text
						value="Visitors"
						textAnchor="middle"
						verticalAnchor="middle"
						class="fill-muted-foreground! text-muted-foreground"
						dy={22}
					/>
				{/snippet}
				{#snippet tooltip()}
					<Chart.Tooltip hideLabel />
				{/snippet}
			</PieChart>
		</Chart.Container>
	</Card.Content>
</Card.Root>
