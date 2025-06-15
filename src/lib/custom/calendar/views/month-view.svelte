<script lang="ts">
	import { currentDate, monthDays } from '$lib/custom/calendar/store/calendar';
	import { filteredEvents, getEventsForDay } from '$lib/custom/calendar/store/events';
	import { getDayClassNames } from '$lib/custom/calendar/utils/date-utils';
	import EventItem from '$lib/custom/calendar/event-item.svelte';

	// Constants
	const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	// Function to get day cell class names
	function getCellClass(day) {
		return getDayClassNames(day.date, $currentDate);
	}
</script>

<div class="calendar-month-view animate-fade-in h-full overflow-auto">
	<div class="sticky top-0 z-10 grid grid-cols-7 border-b border-gray-200 bg-white">
		{#each dayNames as day, daynames (daynames)}
			<div class="py-2 text-center text-sm font-medium text-gray-500">
				{day}
			</div>
		{/each}
	</div>

	<div class="grid grid-cols-7">
		{#each $monthDays as day, monthdays (monthdays)}
			<div class={getCellClass(day)}>
				<div class="flex items-start justify-between">
					<div
						class={`
            flex h-6 w-6 items-center justify-center rounded-full text-sm font-medium
            ${day.isToday ? 'bg-primary-500 text-white' : ''}
          `}
					>
						{day.dayNumber}
					</div>

					{#if day.isCurrentMonth}
						<!-- More events indicator could go here -->
					{/if}
				</div>

				<div class="mt-1 max-h-[80px] space-y-1 overflow-hidden">
					{#each getEventsForDay(day.date, $filteredEvents).slice(0, 3) as event (event.title)}
						<EventItem {event} compact={true} />
					{/each}

					{#if getEventsForDay(day.date, $filteredEvents).length > 3}
						<div class="px-1 text-xs text-gray-500">
							+{getEventsForDay(day.date, $filteredEvents).length - 3} more
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>
