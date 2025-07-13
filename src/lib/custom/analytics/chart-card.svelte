<script lang="ts">
	import { chart } from '$lib/custom/apexchart/apexchart';
	import * as Card from '$lib/components/ui/card';

	interface Props {
		title: string;
		subtitle?: string;
		chartData: any;
		chartType: 'area' | 'bar' | 'donut';
	}

	const { title, subtitle, chartData, chartType }: Props = $props();
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>{title}</Card.Title>
		<Card.Description>{subtitle}</Card.Description>
	</Card.Header>
	<Card.Content>
		<div
			use:chart={{
				options: chartData.options,
				series: chartData.series,
				type: chartType,
				height: 350
			}}
		></div>
	</Card.Content>
</Card.Root>
