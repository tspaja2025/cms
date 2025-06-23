<script lang="ts">
	import { distributedOptions, scatterOptions, radialBarOptions, rangeAreaOptions } from "$lib/custom/apexchart/store/apex";
	import { chart } from "$lib/custom/apexchart/apexchart";
	import * as Card from "$lib/components/ui/card";
</script>

<svelte:head>
	<title>Admin Dashboard</title>
</svelte:head>

<div class="grid grid-cols-2 gap-4">
	<Card.Root>
		<Card.Header>
			<Card.Title>Distributed Treemap Chart</Card.Title>
		</Card.Header>
		<Card.Content>
			<div use:chart={distributedOptions}></div>
		</Card.Content>
	</Card.Root>
	<Card.Root>
		<Card.Header>
			<Card.Title>Scatter - Datetime Chart</Card.Title>
		</Card.Header>
		<Card.Content>
			<div use:chart={scatterOptions}></div>
		</Card.Content>
	</Card.Root>
	<Card.Root>
		<Card.Header>
			<Card.Title>Multiple Radial Bar Chart</Card.Title>
		</Card.Header>
		<Card.Content>
			<div use:chart={radialBarOptions}></div>
		</Card.Content>
	</Card.Root>
	<Card.Root>
		<Card.Header>
			<Card.Title>Combo Range Area Chart</Card.Title>
		</Card.Header>
		<Card.Content>
			<div use:chart={rangeAreaOptions}></div>
		</Card.Content>
	</Card.Root>
</div>
