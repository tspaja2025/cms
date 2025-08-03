<script lang="ts" generics="TData = DefaultDataPoint<'scatter'>, TLabel = unknown">
	import Chart from '$lib/custom/chartjs/chart.svelte';
	import { Chart as ChartJS, ScatterController, type DefaultDataPoint } from 'chart.js';
	import type { ChartProps } from '$lib/custom/chartjs/types';

	ChartJS.register(ScatterController);

	let {
		chart = $bindable(null),
		...restProps
	}: Omit<ChartProps<'scatter', TData, TLabel>, 'type'> = $props();
</script>

<Chart bind:chart type="scatter" {...restProps} />
