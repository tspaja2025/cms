<script lang="ts">
	import Sidebar from '$lib/components/email/sidebar.svelte';
	import Header from '$lib/components/email/header.svelte';
	import Content from '$lib/components/email/content.svelte';
	import ComposeModal from '$lib/components/email/compose-modal.svelte';
	import { isComposeOpen } from '$lib/components/email/store/email-store';

	let isSidebarOpen = false;

	// Listen for sidebar toggle events
	import { onMount } from 'svelte';

	onMount(() => {
		const handleToggleSidebar = (event: CustomEvent) => {
			isSidebarOpen = event.detail.isOpen;
		};

		window.addEventListener('toggleSidebar', handleToggleSidebar as EventListener);

		return () => {
			window.removeEventListener('toggleSidebar', handleToggleSidebar as EventListener);
		};
	});
</script>

<svelte:head>
	<title>Admin Dashboard</title>
</svelte:head>

<div class="flex h-[calc(100vh-92px)] w-[calc(100vw-256px)] flex-col bg-gray-50 text-gray-900">
	<Header />

	<div class="flex flex-grow overflow-hidden">
		<Sidebar />

		<!-- Mobile Sidebar Overlay -->
		{#if isSidebarOpen}
			<div
				class="bg-opacity-75 fixed inset-0 z-20 bg-gray-500 md:hidden"
				on:click={() => (isSidebarOpen = false)}
				{...$$restProps}
			></div>
			<div class="fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-xl md:hidden">
				<Sidebar />
			</div>
		{/if}

		<Content />
	</div>

	<ComposeModal />
</div>
