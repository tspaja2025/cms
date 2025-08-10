<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index';
	import AppSidebar from '$lib/custom/navigation/app-sidebar.svelte';
	import Navbar from '$lib/custom/navigation/navbar.svelte';

	const { children } = $props();
</script>

<svelte:head>
	<title>Admin Dashboard</title>
	<meta name="description" content="Admin Page" />
</svelte:head>

<Sidebar.Provider>
	<AppSidebar />
	<div class="flex-1">
		<Navbar />
		<div class="h-[calc(100vh-64px)] p-4">
			{@render children()}
		</div>
	</div>
</Sidebar.Provider>
