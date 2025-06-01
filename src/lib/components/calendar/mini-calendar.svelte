<script lang="ts">
	import { currentDate } from '$lib/components/calendar/stores/calendar';
	import {
		startOfMonth,
		endOfMonth,
		startOfWeek,
		endOfWeek,
		eachDayOfInterval,
		format,
		isSameMonth,
		isToday,
		isSameDay
	} from 'date-fns';

	$: monthStart = startOfMonth($currentDate);
	$: monthEnd = endOfMonth($currentDate);
	$: calendarStart = startOfWeek(monthStart);
	$: calendarEnd = endOfWeek(monthEnd);
	$: days = eachDayOfInterval({ start: calendarStart, end: calendarEnd });

	const dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

	function selectDay(day: Date) {
		currentDate.set(day);
	}
</script>

<div class="mini-calendar">
	<div class="mb-2 text-sm font-medium">
		{format($currentDate, 'MMMM yyyy')}
	</div>

	<div class="grid grid-cols-7 gap-1 text-xs">
		{#each dayNames as day, dn (dn)}
			<div class="py-1 text-center font-medium text-gray-500">{day}</div>
		{/each}

		{#each days as day, d (d)}
			<button
				class="flex h-7 w-7 items-center justify-center rounded-full transition-colors duration-200 {isToday(
					day
				)
					? 'bg-primary-500 text-white'
					: isSameDay(day, $currentDate)
						? 'bg-primary-100 text-primary-800'
						: isSameMonth(day, $currentDate)
							? 'hover:bg-gray-100'
							: 'text-gray-400 hover:bg-gray-100'}"
				on:click={() => selectDay(day)}
			>
				{format(day, 'd')}
			</button>
		{/each}
	</div>
</div>

<style>
	/* Add any component-specific styles here */
</style>
