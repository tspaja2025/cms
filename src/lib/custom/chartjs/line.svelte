<script lang="ts" generics="TData = DefaultDataPoint<'line'>, TLabel = unknown">
	import Chart from '$lib/custom/chartjs/chart.svelte';
	import {
		CategoryScale,
		Chart as ChartJS,
		LinearScale,
		LineController,
		LineElement,
		PointElement,
		type DefaultDataPoint
	} from 'chart.js';
	import type { ChartProps } from '$lib/custom/chartjs/types';

	ChartJS.register(LineController, LinearScale, CategoryScale, PointElement, LineElement);

	let {
		chart = $bindable(null),
		...restProps
	}: Omit<ChartProps<'line', TData, TLabel>, 'type'> = $props();
</script>

<Chart bind:chart type="line" {...restProps} />
