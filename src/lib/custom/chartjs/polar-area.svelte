<script lang="ts" generics="TData = DefaultDataPoint<'polarArea'>, TLabel = unknown">
	import Chart from '$lib/custom/chartjs/chart.svelte';
	import { Chart as ChartJS, PolarAreaController, type DefaultDataPoint } from 'chart.js';
	import type { ChartProps } from '$lib/custom/chartjs/types';

	ChartJS.register(PolarAreaController);

	let {
		chart = $bindable(null),
		...restProps
	}: Omit<ChartProps<'polarArea', TData, TLabel>, 'type'> = $props();
</script>

<Chart bind:chart type="polarArea" {...restProps} />
