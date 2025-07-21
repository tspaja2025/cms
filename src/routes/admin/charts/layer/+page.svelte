<script lang="ts">
	import AreaChartCard from '$lib/custom/layerchart/area-chart-card.svelte';
	import BarChartCard from '$lib/custom/layerchart/bar-chart-card.svelte';
	import PieChartCard from '$lib/custom/layerchart/pie-chart-card.svelte';
	import RadarChartCard from '$lib/custom/layerchart/radar-chart-card.svelte';
</script>

<div class="grid grid-cols-2 gap-4">
	<AreaChartCard/>
	<BarChartCard/>
	<PieChartCard/>
	<RadarChartCard/>
</div>