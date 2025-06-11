<script lang="ts">
	import { calendarView } from '$lib/components/calendar/stores/calendar';
	import MonthView from '$lib/components/calendar/views/month-view.svelte';
	import WeekView from '$lib/components/calendar/views/week-view.svelte';
	import DayView from '$lib/components/calendar/views/day-view.svelte';
</script>

<div class="h-full overflow-hidden bg-white">
	{#if $calendarView === 'month'}
		<MonthView />
	{:else if $calendarView === 'week'}
		<WeekView />
	{:else if $calendarView === 'day'}
		<DayView />
	{/if}
</div>
