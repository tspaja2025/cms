<script lang="ts">
	import * as Chart from '$lib/components/ui/chart/index';
	import * as Card from '$lib/components/ui/card/index';
	import { PieChart, Text } from 'layerchart';
	import { salesOverviewConfig, salesOverviewData, totalSales } from '$lib/store';
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
		<Chart.Container config={salesOverviewConfig}>
			<PieChart
				data={salesOverviewData}
				key="goods"
				value="sales"
				c="color"
				innerRadius={60}
				padding={28}
				props={{ pie: { motion: 'tween' } }}
				legend={{ placement: 'bottom-right' }}
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
						value="Sales"
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
