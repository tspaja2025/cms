<script>
	import Calendar from '$lib/components/calendar/calendar.svelte';
	import Header from '$lib/components/calendar/header.svelte';
	import Sidenav from '$lib/components/calendar/sidenav.svelte';
</script>

<svelte:head>
	<title>Admin Dashboard</title>
</svelte:head>

<div class="flex h-[calc(100vh-92px)] flex-col overflow-hidden bg-gray-50">
	<div class="flex h-full overflow-hidden">
		<!-- Sidenav -->
		<div class="hidden md:block">
			<Sidenav />
		</div>

		<!-- Main content -->
		<div class="flex flex-1 flex-col overflow-hidden">
			<Header />
			<main class="flex-1 overflow-hidden">
				<Calendar />
			</main>
		</div>
	</div>
</div>
