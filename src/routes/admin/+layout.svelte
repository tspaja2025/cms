<script lang="ts">
	import AppHeader from '$lib/admin/app-header.svelte';
	import AppSidebar from '$lib/admin/app-sidebar.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar/index';

	const { children } = $props();
</script>

<Sidebar.Provider>
	<AppSidebar />
	<Sidebar.Inset>
		<AppHeader />
		<div class="flex-1 p-4">
			{@render children?.()}
		</div>
	</Sidebar.Inset>
</Sidebar.Provider>
