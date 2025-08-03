<script lang="ts">
	import {
		bubbleData,
		chartData,
		chartOptions,
		polarAreaData,
		scatterData
	} from '$lib/custom/chartjs/store/data';
	import Bar from '$lib/custom/chartjs/bar.svelte';
	import Bubble from '$lib/custom/chartjs/bubble.svelte';
	import Doughnut from '$lib/custom/chartjs/doughnut.svelte';
	import Line from '$lib/custom/chartjs/line.svelte';
	import Pie from '$lib/custom/chartjs/pie.svelte';
	import PolarArea from '$lib/custom/chartjs/polar-area.svelte';
	import Radar from '$lib/custom/chartjs/radar.svelte';
	import Scatter from '$lib/custom/chartjs/scatter.svelte';
	import * as Card from '$lib/components/ui/card/index';
</script>

<div class="grid grid-cols-2 gap-4">
	<Card.Root class="flex-1">
		<Card.Content class="flex-1">
			<Bar data={chartData} options={chartOptions} />
		</Card.Content>
	</Card.Root>
	<Card.Root class="flex-1">
		<Card.Content class="flex-1">
			<Line data={chartData} options={chartOptions} />
		</Card.Content>
	</Card.Root>
	<Card.Root class="flex-1">
		<Card.Content class="flex-1">
			<Radar data={chartData} options={chartOptions} />
		</Card.Content>
	</Card.Root>

	<Card.Root class="flex-1">
		<Card.Content class="flex-1">
			<Bubble data={bubbleData} options={chartOptions} />
		</Card.Content>
	</Card.Root>
	<Card.Root class="flex-1">
		<Card.Content class="flex-1">
			<Doughnut data={chartData} options={chartOptions} />
		</Card.Content>
	</Card.Root>
	<Card.Root class="flex-1">
		<Card.Content class="flex-1">
			<Pie data={chartData} options={chartOptions} />
		</Card.Content>
	</Card.Root>

	<Card.Root class="flex-1">
		<Card.Content class="flex-1">
			<PolarArea data={polarAreaData} options={chartOptions} />
		</Card.Content>
	</Card.Root>
	<Card.Root class="flex-1">
		<Card.Content class="flex-1">
			<Scatter data={scatterData} options={chartOptions} />
		</Card.Content>
	</Card.Root>
</div>
