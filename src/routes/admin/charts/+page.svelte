<script lang="ts">
	import AreaChartCard from '$lib/other/charts/layerchart/area-chart.svelte';
	import BarChartCard from '$lib/other/charts/layerchart/bar-chart.svelte';
	import PieChartCard from '$lib/other/charts/layerchart/pie-chart.svelte';
	import LineChartCard from '$lib/other/charts/layerchart/line-chart.svelte';
</script>

<svelte:head>
	<title>CMS | Admin | Layerchart</title>
	<meta name="description" content="CMS" />
</svelte:head>

<div class="mx-auto grid gap-4 md:max-w-full lg:max-w-7xl">
	<div class="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
		<AreaChartCard />
		<BarChartCard />
	</div>
	<div class="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
		<PieChartCard />
		<LineChartCard />
	</div>
</div>
