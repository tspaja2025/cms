<script lang="ts" generics="TData = DefaultDataPoint<'doughnut'>, TLabel = unknown">
	import Chart from '$lib/custom/chartjs/chart.svelte';
	import {
		ArcElement,
		Chart as ChartJS,
		DoughnutController,
		type DefaultDataPoint
	} from 'chart.js';
	import type { ChartProps } from '$lib/custom/chartjs/types';

	ChartJS.register(DoughnutController, ArcElement);

	let {
		chart = $bindable(null),
		...restProps
	}: Omit<ChartProps<'doughnut', TData, TLabel>, 'type'> = $props();
</script>

<Chart bind:chart type="doughnut" {...restProps} />
