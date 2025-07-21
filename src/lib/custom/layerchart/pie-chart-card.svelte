<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import * as Chart from '$lib/components/ui/chart/index';
	import { PieChart, Text, type ChartContextValue } from 'layerchart';
	import { pieChartData, pieChartConfig } from '$lib/custom/layerchart/store/data';

	const totalVisitors = pieChartData.reduce((acc, curr) => acc + curr.visitors, 0);
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Pie Chart - Donut with Text</Card.Title>
		<Card.Description>January - June 2024</Card.Description>
	</Card.Header>
	<Card.Content>
		<Chart.Container config={pieChartConfig} class="mx-auto aspect-square max-h-[250px]">
			<PieChart
				data={pieChartData}
				key="browser"
				value="visitors"
				c="color"
				innerRadius={60}
				padding={28}
				props={{ pie: { motion: 'tween' } }}
			>
				{#snippet aboveMarks()}
					<Text
						value={String(totalVisitors)}
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
