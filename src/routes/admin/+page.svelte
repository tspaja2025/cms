<script>
	import ActivityTimeline from '$lib/apps/crm/activity-timeline.svelte';
	import MeetingSchedule from '$lib/apps/crm/meeting-schedule.svelte';
	import Ratings from '$lib/apps/crm/ratings.svelte';
	import RevenueReport from '$lib/apps/crm/revenue-report.svelte';
	import SalesOverview from '$lib/apps/crm/sales-overview.svelte';
	import Sessions from '$lib/apps/crm/sessions.svelte';
	import TotalSales from '$lib/apps/crm/total-sales.svelte';
	import Transactions from '$lib/apps/crm/transactions.svelte';
	import UpgradePlan from '$lib/apps/crm/upgrade-plan.svelte';
	import WeeklySales from '$lib/apps/crm/weekly-sales.svelte';
</script>

<svelte:head>
	<title>CMS | Admin</title>
	<meta name="description" content="CMS" />
</svelte:head>

<div class="mx-auto grid gap-4 md:max-w-full lg:max-w-7xl">
	<div class="grid gap-4 md:grid-cols-1 lg:grid-cols-4">
		<Ratings />
		<Sessions />
		<Transactions />
	</div>

	<div class="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
		<TotalSales />
		<RevenueReport />
		<SalesOverview />
	</div>

	<div class="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
		<ActivityTimeline />
		<WeeklySales />
	</div>

	<div class="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
		<UpgradePlan />
		<MeetingSchedule />
	</div>
</div>
