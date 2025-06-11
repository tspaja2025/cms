<script lang="ts">
	import { currentDate } from '$lib/components/calendar/stores/calendar';
	import { filteredEvents } from '$lib/components/calendar/stores/events';
	import { startOfWeek, endOfWeek, eachDayOfInterval, format, isToday, isSameDay } from 'date-fns';
	import { getHourLabels, getTimeValue } from '$lib/components/calendar/utils/date-utils';
	import EventItem from '$lib/components/calendar/views/event-item.svelte';

	// Get the week days
	const weekStart = $derived(startOfWeek($currentDate));
	const weekEnd = $derived(endOfWeek($currentDate));
	const weekDays = $derived(eachDayOfInterval({ start: weekStart, end: weekEnd }));

	// Get the hours for the day
	const hours = getHourLabels();

	// Function to get events for a specific day
	function getEventsForDay(day: Date) {
		return $filteredEvents.filter((event) => isSameDay(event.start, day));
	}

	// Calculate event position and height
	function getEventStyle(event) {
		const startTime = getTimeValue(event.start);
		const endTime = getTimeValue(event.end);
		const duration = endTime - startTime;

		return `
      top: calc(${startTime * 60}px);
      height: calc(${duration * 60}px);
    `;
	}
</script>

<div class="calendar-week-view animate-fade-in h-full overflow-auto">
	<div class="sticky top-0 z-10 grid grid-cols-8 border-b border-gray-200 bg-white">
		<div class="border-r border-gray-200 py-2 text-center text-sm font-medium text-gray-500">
			Time
		</div>

		{#each weekDays as day, weekdayIndex (weekdayIndex)}
			<div
				class={`border-r border-gray-200 py-2 text-center ${isToday(day) ? 'bg-primary-50' : ''}`}
			>
				<div class="text-sm font-medium text-gray-500">
					{format(day, 'EEE')}
				</div>
				<div class={`text-base font-bold ${isToday(day) ? 'text-primary-600' : ''}`}>
					{format(day, 'd')}
				</div>
			</div>
		{/each}
	</div>

	<div class="relative grid grid-cols-8">
		{#each hours as hour, i (i)}
			<div class="h-[60px] border-r border-b border-gray-200 pr-2 text-right text-xs text-gray-500">
				{hour}
			</div>

			{#each weekDays as day, eventsForDay (eventsForDay)}
				<div class="relative h-[60px] border-r border-b border-gray-200">
					<!-- Current time indicator would go here -->
					{#if i === 0}
						<div class="absolute inset-0">
							{#each getEventsForDay(day) as event, getEventsForDay (getEventsForDay)}
								{#if !event.allDay}
									<div
										class="absolute right-0 left-0 mx-1 overflow-hidden rounded"
										style={getEventStyle(event)}
									>
										<EventItem {event} />
									</div>
								{/if}
							{/each}
						</div>
					{/if}
				</div>
			{/each}
		{/each}
	</div>
</div>
