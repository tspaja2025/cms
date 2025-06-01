<script lang="ts">
	import { currentDate } from '$lib/components/calendar/stores/calendar';
	import { filteredEvents } from '$lib/components/calendar/stores/events';
	import { isToday, format, isSameDay } from 'date-fns';
	import { getHourLabels, getTimeValue } from '$lib/components/calendar/utils/date-utils';
	import EventItem from '$lib/components/calendar/views/event-item.svelte';

	// Get the hours for the day
	const hours = getHourLabels();

	// Get events for the current day
	$: dayEvents = $filteredEvents.filter((event) => isSameDay(event.start, $currentDate));

	// All-day events
	$: allDayEvents = dayEvents.filter((event) => event.allDay);

	// Timed events
	$: timedEvents = dayEvents.filter((event) => !event.allDay);

	// Calculate event position and height
	function getEventStyle(event) {
		const startTime = getTimeValue(event.start);
		const endTime = getTimeValue(event.end);
		const duration = endTime - startTime;

		return `
      top: calc(${startTime * 60}px);
      height: calc(${duration * 60}px);
      left: 8px;
      right: 8px;
    `;
	}
</script>

<div class="calendar-day-view animate-fade-in h-full overflow-auto">
	<div class="sticky top-0 z-10 border-b border-gray-200 bg-white px-4 py-3">
		<h2 class={`text-xl font-bold ${isToday($currentDate) ? 'text-primary-600' : ''}`}>
			{format($currentDate, 'EEEE, MMMM d, yyyy')}
		</h2>

		{#if allDayEvents.length > 0}
			<div class="mt-2 space-y-1">
				<h3 class="text-sm font-medium text-gray-500">ALL DAY</h3>
				{#each allDayEvents as event (event)}
					<EventItem {event} />
				{/each}
			</div>
		{/if}
	</div>

	<div class="relative grid grid-cols-[80px_1fr]">
		{#each hours as hour (hour)}
			<div class="h-[60px] border-b border-gray-200 p-1 pr-2 text-right text-xs text-gray-500">
				{hour}
			</div>
			<div class="relative h-[60px] border-b border-gray-200">
				<!-- Current time indicator would go here -->
			</div>
		{/each}

		<!-- Timed events -->
		<div class="pointer-events-none absolute top-0 right-0 bottom-0 left-[80px]">
			{#each timedEvents as event (event.id)}
				<div
					class="pointer-events-auto absolute overflow-hidden rounded"
					style={getEventStyle(event)}
				>
					<EventItem {event} />
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	/* Add any component-specific styles here */
</style>
