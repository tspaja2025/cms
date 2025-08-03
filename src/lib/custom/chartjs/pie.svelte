<script lang="ts" generics="TData = DefaultDataPoint<'pie'>, TLabel = unknown">
	import Chart from '$lib/custom/chartjs/chart.svelte';
	import { Chart as ChartJS, PieController, type DefaultDataPoint } from 'chart.js';
	import type { ChartProps } from '$lib/custom/chartjs/types';

	ChartJS.register(PieController);

	let {
		chart = $bindable(null),
		...restProps
	}: Omit<ChartProps<'pie', TData, TLabel>, 'type'> = $props();
</script>

<Chart bind:chart type="pie" {...restProps} />
