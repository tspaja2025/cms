<script lang="ts" generics="TData = DefaultDataPoint<'radar'>, TLabel = unknown">
	import Chart from '$lib/custom/chartjs/chart.svelte';
	import {
		Chart as ChartJS,
		RadarController,
		RadialLinearScale,
		type DefaultDataPoint
	} from 'chart.js';
	import type { ChartProps } from '$lib/custom/chartjs/types';

	ChartJS.register(RadarController, RadialLinearScale);

	let {
		chart = $bindable(null),
		...restProps
	}: Omit<ChartProps<'radar', TData, TLabel>, 'type'> = $props();
</script>

<Chart bind:chart type="radar" {...restProps} />
