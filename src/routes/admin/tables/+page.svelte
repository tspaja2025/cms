<script>
	import * as Card from '$lib/components/ui/card/index';
	import BasicTable from '$lib/pages/tables/basic-table.svelte';
	import DataTable from '$lib/pages/tables/data-table.svelte';
</script>

<svelte:head>
	<title>CMS | Admin | Tables</title>
	<meta name="description" content="CMS" />
</svelte:head>

<div class="mx-auto grid gap-4 md:max-w-full lg:max-w-7xl">
	<div class="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
		<Card.Root
			class="bg-gradient-to-t from-primary/5 to-card
shadow-xs dark:bg-card"
		>
			<Card.Header>
				<Card.Title>Basic Table</Card.Title>
			</Card.Header>
			<Card.Content>
				<BasicTable />
			</Card.Content>
		</Card.Root>
	</div>
	<div class="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
		<Card.Root
			class="bg-gradient-to-t from-primary/5 to-card
shadow-xs dark:bg-card"
		>
			<Card.Header>
				<Card.Title>Data Table</Card.Title>
			</Card.Header>
			<Card.Content>
				<DataTable />
			</Card.Content>
		</Card.Root>
	</div>
</div>
