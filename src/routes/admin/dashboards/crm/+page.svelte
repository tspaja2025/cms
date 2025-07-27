<script lang="ts">
	import Ratings from '$lib/custom/dashboard/crm/ratings.svelte';
	import Sessions from '$lib/custom/dashboard/crm/sessions.svelte';
	import Transactions from '$lib/custom/dashboard/crm/transactions.svelte';
	import TotalSales from '$lib/custom/dashboard/crm/total-sales.svelte';
	import RevenueReport from '$lib/custom/dashboard/crm/revenue-report.svelte';
	import SalesOverview from '$lib/custom/dashboard/crm/sales-overview.svelte';
	import ActivityTimeline from '$lib/custom/dashboard/crm/activity-timeline.svelte';
	import WeeklySales from '$lib/custom/dashboard/crm/weekly-sales.svelte';
	import UpgradePlan from '$lib/custom/dashboard/crm/upgrade-plan.svelte';
	import MeetingSchedule from '$lib/custom/dashboard/crm/meeting-schedule.svelte';
</script>

<div class="mb-4 grid grid-cols-4 gap-4">
	<Ratings />
	<Sessions />
	<Transactions />
</div>

<div class="mb-4 grid grid-cols-3 gap-4">
	<TotalSales />
	<RevenueReport />
	<SalesOverview />
</div>

<div class="mb-4 grid grid-cols-2 gap-4">
	<ActivityTimeline />
	<WeeklySales />
</div>

<div class="mb-4 grid grid-cols-2 gap-4">
	<UpgradePlan />
	<MeetingSchedule />
</div>

<div class="p-1"></div>
