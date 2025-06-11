<script lang="ts">
	import { currentDate } from '$lib/components/calendar/stores/calendar';
	import Button from '$lib/dashboard/ui/button/button.svelte';
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

	const monthStart = $derived(startOfMonth($currentDate));
	const monthEnd = $derived(endOfMonth($currentDate));
	const calendarStart = $derived(startOfWeek(monthStart));
	const calendarEnd = $derived(endOfWeek(monthEnd));
	const days = $derived(eachDayOfInterval({ start: calendarStart, end: calendarEnd }));

	const dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

	function selectDay(day: Date) {
		currentDate.set(day);
	}
</script>

<div>
	<div class="mb-2 text-sm font-medium">
		{format($currentDate, 'MMMM yyyy')}
	</div>

	<div class="grid grid-cols-7 gap-1 text-xs">
		{#each dayNames as day, dn (dn)}
			<div class="py-1 text-center font-medium text-gray-500">{day}</div>
		{/each}

		{#each days as day, d (d)}
			<Button
				class="h-7 w-7 rounded-full {isToday(day)
					? 'bg-neutral-500 text-black'
					: isSameDay(day, $currentDate)
						? 'bg-neutral-100 text-neutral-800'
						: isSameMonth(day, $currentDate)
							? 'hover:bg-gray-100'
							: 'text-gray-400 hover:bg-gray-100'}"
				onclick={() => selectDay(day)}
			>
				{format(day, 'd')}
			</Button>
		{/each}
	</div>
</div>
