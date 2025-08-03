<script lang="ts">
	import { cn } from '$lib/utils';
	import * as echarts from 'echarts';
	import { onMount } from 'svelte';

	let { options, id, class: className } = $props();

	onMount(() => {
		let myChart = echarts.init(document.getElementById(id));

		myChart.setOption(options);
	});
</script>

<div {id} class={cn('h-[400px] w-full', className)}></div>
