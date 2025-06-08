<script lang="ts">
	import Sidebar from '$lib/components/ecommerce/layout/sidebar.svelte';
	import Header from '$lib/components/ecommerce/layout/header.svelte';

	let { children, darkMode, toggleDarkMode } = $props();
</script>

<div class="flex h-screen bg-gray-50 transition-colors duration-200">
	<Sidebar />

	<div class="flex flex-1 flex-col overflow-hidden">
		<Header {darkMode} {toggleDarkMode} />

		<main class="flex-1 overflow-y-auto p-4 md:p-6">
			<div class="mx-auto max-w-7xl">
				{@render children()}
			</div>
		</main>
	</div>
</div>
