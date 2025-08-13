<script lang="ts">
	import * as Chart from '$lib/components/ui/chart/index';
	import * as Card from '$lib/components/ui/card/index';
	import { PieChart, Text } from 'layerchart';
	import { totalTrafficSources, trafficSourcesConfig, trafficSourcesData } from '$lib/store';
</script>

<Card.Root class="bg-gradient-to-t from-primary/5 to-card shadow-xs dark:bg-card">
	<Card.Header>
		<Card.Title>Traffic Sources</Card.Title>
		<Card.Description>Where your visitors are coming from</Card.Description>
	</Card.Header>
	<Card.Content class="flex-1">
		<Chart.Container config={trafficSourcesConfig} class="mx-auto aspect-square max-h-[250px]">
			<PieChart
				data={trafficSourcesData}
				key="source"
				value="traffic"
				c="color"
				innerRadius={60}
				padding={28}
				props={{ pie: { motion: 'tween' } }}
				legend={{ placement: 'bottom-right' }}
			>
				{#snippet aboveMarks()}
					<Text
						value={String(totalTrafficSources)}
						textAnchor="middle"
						verticalAnchor="middle"
						class="fill-foreground text-3xl! font-bold"
						dy={3}
					/>
					<Text
						value="Traffic"
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
