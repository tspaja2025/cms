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

	$: headerDate = formatHeaderDate($currentDate);
</script>

<header class="border-b border-gray-200 bg-white px-6 py-4">
	<div class="flex items-center justify-between">
		<div class="flex items-center gap-2">
			<h1 class="text-2xl font-bold text-gray-800">{$currentMonthYear}</h1>
			<div class="hidden text-sm text-gray-500 md:block">{headerDate}</div>
		</div>

		<div class="flex items-center gap-4">
			<div class="flex items-center gap-1">
				<button
					on:click={goToPreviousMonth}
					class="rounded-full p-2 transition-colors duration-200 hover:bg-gray-100"
					aria-label="Previous month"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>

				<button
					on:click={goToToday}
					class="rounded px-3 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-100"
				>
					Today
				</button>

				<button
					on:click={goToNextMonth}
					class="rounded-full p-2 transition-colors duration-200 hover:bg-gray-100"
					aria-label="Next month"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
			</div>

			<div class="hidden h-6 border-l border-gray-300 md:block"></div>

			<div class="hidden items-center gap-1 rounded-lg bg-gray-100 p-1 md:flex">
				<button
					on:click={() => calendarView.set('month')}
					class="rounded px-3 py-1 text-sm font-medium transition-colors duration-200 {$calendarView ===
					'month'
						? 'bg-white shadow-sm'
						: 'text-gray-600 hover:bg-gray-200'}"
				>
					Month
				</button>
				<button
					on:click={() => calendarView.set('week')}
					class="rounded px-3 py-1 text-sm font-medium transition-colors duration-200 {$calendarView ===
					'week'
						? 'bg-white shadow-sm'
						: 'text-gray-600 hover:bg-gray-200'}"
				>
					Week
				</button>
				<button
					on:click={() => calendarView.set('day')}
					class="rounded px-3 py-1 text-sm font-medium transition-colors duration-200 {$calendarView ===
					'day'
						? 'bg-white shadow-sm'
						: 'text-gray-600 hover:bg-gray-200'}"
				>
					Day
				</button>
			</div>
		</div>
	</div>
</header>

<style>
	/* Add any component-specific styles here */
</style>
