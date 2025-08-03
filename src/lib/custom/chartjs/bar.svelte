<script lang="ts" generics="TData = DefaultDataPoint<'bar'>, TLabel = unknown">
	import Chart from '$lib/custom/chartjs/chart.svelte';
	import { BarController, BarElement, Chart as ChartJS, type DefaultDataPoint } from 'chart.js';
	import type { ChartProps } from '$lib/custom/chartjs/types';

	ChartJS.register(BarController, BarElement);

	let {
		chart = $bindable(null),
		...restProps
	}: Omit<ChartProps<'bar', TData, TLabel>, 'type'> = $props();
</script>

<Chart bind:chart type="bar" {...restProps} />
