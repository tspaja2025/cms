<script lang="ts">
	import { calendarView, currentDate, goToToday } from '$lib/components/calendar/stores/calendar';
	import { categoryFilters, toggleCategoryFilter } from '$lib/components/calendar/stores/events';
	import MiniCalendar from '$lib/components/calendar/mini-calendar.svelte';
	import { format } from 'date-fns';

	// Event categories with colors
	const categories = [
		{ id: 'work', name: 'Work', color: 'bg-blue-500' },
		{ id: 'personal', name: 'Personal', color: 'bg-green-500' },
		{ id: 'family', name: 'Family', color: 'bg-purple-500' },
		{ id: 'other', name: 'Other', color: 'bg-gray-500' }
	];

	let showEventModal = false;

	function openNewEventModal() {
		showEventModal = true;
	}
</script>

<div class="flex h-full w-64 flex-col border-r border-gray-200 bg-white p-4">
	<div class="mb-6">
		<button
			on:click={openNewEventModal}
			class="btn btn-primary flex w-full items-center justify-center gap-2"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
					clip-rule="evenodd"
				/>
			</svg>
			Add Event
		</button>
	</div>

	<div class="mb-6">
		<h3 class="mb-3 text-sm font-medium text-gray-500">TODAY</h3>
		<div class="mb-1 text-xl font-bold">{format($currentDate, 'EEEE')}</div>
		<div class="text-primary-600 text-3xl font-bold">{format($currentDate, 'd')}</div>
		<div class="text-sm text-gray-500">{format($currentDate, 'MMMM yyyy')}</div>

		<button
			on:click={goToToday}
			class="text-primary-600 hover:text-primary-800 mt-3 text-sm font-medium"
		>
			Jump to today
		</button>
	</div>

	<div class="mb-6">
		<h3 class="mb-3 text-sm font-medium text-gray-500">MINI CALENDAR</h3>
		<MiniCalendar />
	</div>

	<div class="mb-6">
		<h3 class="mb-3 text-sm font-medium text-gray-500">VIEW</h3>
		<div class="flex flex-col gap-2">
			<button
				on:click={() => calendarView.set('month')}
				class="btn btn-outline flex items-center gap-2 text-left {$calendarView === 'month'
					? 'bg-gray-100'
					: ''}"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 text-gray-500"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M5 4a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1H5zm0 2h10v8H5V6z"
						clip-rule="evenodd"
					/>
				</svg>
				Month
			</button>
			<button
				on:click={() => calendarView.set('week')}
				class="btn btn-outline flex items-center gap-2 text-left {$calendarView === 'week'
					? 'bg-gray-100'
					: ''}"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 text-gray-500"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clip-rule="evenodd"
					/>
				</svg>
				Week
			</button>
			<button
				on:click={() => calendarView.set('day')}
				class="btn btn-outline flex items-center gap-2 text-left {$calendarView === 'day'
					? 'bg-gray-100'
					: ''}"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 text-gray-500"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5z" />
					<path d="M5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5z" />
					<path d="M13 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2h-2z" />
					<path d="M13 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2z" />
				</svg>
				Day
			</button>
		</div>
	</div>

	<div>
		<h3 class="mb-3 text-sm font-medium text-gray-500">FILTERS</h3>
		<div class="flex flex-col gap-2">
			{#each categories as category, cate (cate)}
				<label class="inline-flex cursor-pointer items-center">
					<input
						type="checkbox"
						class="text-primary-600 focus:border-primary-300 focus:ring-primary-200 focus:ring-opacity-50 mr-2 rounded border-gray-300 shadow-sm focus:ring"
						on:change={() => toggleCategoryFilter(category.id)}
						checked={$categoryFilters.includes(category.id)}
					/>
					<span class="flex items-center">
						<span class="{category.color} mr-2 inline-block h-3 w-3 rounded-full"></span>
						{category.name}
					</span>
				</label>
			{/each}
		</div>
	</div>

	<div class="mt-auto text-xs text-gray-400">
		<p>Calendar App v1.0</p>
	</div>
</div>

{#if showEventModal}
	<div
		class="bg-opacity-30 fixed inset-0 z-50 flex items-center justify-center bg-black"
		on:click={() => (showEventModal = false)}
		{...$$restProps}
	>
		<div class="w-full max-w-md rounded-lg bg-white p-6" on:click|stopPropagation {...$$restProps}>
			<h2 class="mb-4 text-xl font-bold">New Event</h2>
			<!-- Event form would go here -->
			<div class="mt-4 text-center">
				<button class="btn btn-secondary mr-2" on:click={() => (showEventModal = false)}>
					Cancel
				</button>
				<button class="btn btn-primary"> Save Event </button>
			</div>
		</div>
	</div>
{/if}

<style>
	/* Add any component-specific styles here */
</style>
