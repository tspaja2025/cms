<script lang="ts">
	import {
		currentDate,
		currentMonthYear,
		calendarView,
		goToPreviousMonth,
		goToNextMonth,
		goToToday
	} from '$lib/components/calendar/stores/calendar';
	import { formatHeaderDate } from '$lib/components/calendar/utils/date-utils';
	import Button from '$lib/dashboard/ui/button/button.svelte';
	import { ChevronLeftIcon, ChevronRightIcon } from '@lucide/svelte';

	const headerDate = $derived(formatHeaderDate($currentDate));
</script>

<header class="border-b border-gray-200 bg-white px-4 py-2">
	<div class="flex items-center justify-between">
		<div class="flex items-center gap-2">
			<h1 class="text-2xl font-bold text-gray-800">{$currentMonthYear}</h1>
			<div class="hidden text-sm text-gray-500 md:block">{headerDate}</div>
		</div>

		<div class="flex items-center gap-4">
			<div class="flex items-center gap-1">
				<Button icon onclick={goToPreviousMonth} aria-label="Previous month">
					<ChevronLeftIcon />
				</Button>

				<Button onclick={goToToday}>Today</Button>

				<Button icon onclick={goToNextMonth} aria-label="Next month">
					<ChevronRightIcon />
				</Button>
			</div>

			<div class="hidden h-6 border-l border-gray-300 md:block"></div>

			<div class="hidden items-center gap-1 rounded-lg bg-gray-100 p-1 md:flex">
				<Button
					onclick={() => calendarView.set('month')}
					class="!px-3 !py-1 text-sm font-medium {$calendarView === 'month'
						? 'bg-white shadow-sm'
						: 'text-gray-600 hover:bg-gray-200'}"
				>
					Month
				</Button>
				<Button
					onclick={() => calendarView.set('week')}
					class="!px-3 !py-1 text-sm font-medium {$calendarView === 'week'
						? 'bg-white shadow-sm'
						: 'text-gray-600 hover:bg-gray-200'}"
				>
					Week
				</Button>
				<Button
					onclick={() => calendarView.set('day')}
					class="!px-3 !py-1 text-sm font-medium {$calendarView === 'day'
						? 'bg-white shadow-sm'
						: 'text-gray-600 hover:bg-gray-200'}"
				>
					Day
				</Button>
			</div>
		</div>
	</div>
</header>
