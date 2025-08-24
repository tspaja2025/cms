<script lang="ts">
	import SortableList from '$lib/apps/kanban/sortable-list.svelte';
</script>

<svelte:head>
	<title>CMS | Admin | Kanban</title>
	<meta name="description" content="CMS" />
</svelte:head>

<div class="mx-auto grid gap-4 md:max-w-full lg:max-w-7xl">
	<div class="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
		<SortableList />
	</div>
</div>
