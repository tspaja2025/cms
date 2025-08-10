<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import Echart from '$lib/custom/echart/echart.svelte';
	import { init, use } from 'echarts/core';
	import { BarChart, LineChart, RadarChart } from 'echarts/charts';
	import { GridComponent, TitleComponent } from 'echarts/components';
	import { CanvasRenderer } from 'echarts/renderers';
	import {
		barChartOptions,
		lineChartOptions,
		radarChartOptions
	} from '$lib/custom/echart/store/data';

	use([BarChart, GridComponent, CanvasRenderer, TitleComponent, LineChart, RadarChart]);

	const echarts = [
		{ id: 'barChart', options: barChartOptions },
		{ id: 'lineChart', options: lineChartOptions },
		{ id: 'radarChart', options: radarChartOptions }
	];
</script>

<div class="grid grid-cols-2 gap-4">
	{#each echarts as chart, index (index)}
		<Card.Root class="h-[400px] flex-1">
			<Echart {init} options={chart.options} />
		</Card.Root>
	{/each}
</div>
