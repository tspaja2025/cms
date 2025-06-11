<script>
	import Calendar from '$lib/components/calendar/calendar.svelte';
	import Header from '$lib/components/calendar/header.svelte';
	import Sidenav from '$lib/components/calendar/sidenav.svelte';
</script>

<svelte:head>
	<title>Admin Dashboard</title>
</svelte:head>

<div class="flex h-full overflow-hidden">
	<Sidenav />
	<div class="flex-1">
		<Header />
		<Calendar />
	</div>
</div>
