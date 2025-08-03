<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import Echart from '$lib/custom/echart/echart.svelte';
	import {
		barChartOptions,
		lineChartOptions,
		radarChartOptions
	} from '$lib/custom/echart/store/data';

	const echarts = [
		{ id: 'barChart', options: barChartOptions },
		{ id: 'lineChart', options: lineChartOptions },
		{ id: 'radarChart', options: radarChartOptions }
	];
</script>

<div class="grid grid-cols-2 gap-4">
	{#each echarts as chart, index (index)}
		<Card.Root class="flex-1">
			<Echart options={chart.options} id={chart.id} />
		</Card.Root>
	{/each}
</div>
