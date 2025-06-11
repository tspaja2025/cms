<script lang="ts">
	import { calendarView } from '$lib/components/calendar/stores/calendar';
	import { categoryFilters, toggleCategoryFilter } from '$lib/components/calendar/stores/events';
	import MiniCalendar from '$lib/components/calendar/mini-calendar.svelte';
	import EventForm from '$lib/components/calendar/event-form.svelte';
	import Button from '$lib/dashboard/ui/button/button.svelte';
	import { PlusIcon } from '@lucide/svelte';

	const { ...restProps } = $props();
	let showEventModal = $state(false);

	// Event categories with colors
	const categories = [
		{ id: 'work', name: 'Work', color: 'bg-blue-500' },
		{ id: 'personal', name: 'Personal', color: 'bg-green-500' },
		{ id: 'family', name: 'Family', color: 'bg-purple-500' },
		{ id: 'other', name: 'Other', color: 'bg-gray-500' }
	];
</script>

<div class="flex w-64 flex-col space-y-4 border-r border-gray-200 bg-white p-4">
	<div class="flex items-center justify-center">
		<Button class="w-full gap-2" onclick={() => (showEventModal = !showEventModal)}>
			<PlusIcon class="h-5 w-5" />
			Add Event
		</Button>
	</div>
	<h3 class="text-sm font-medium text-gray-500">MINI CALENDAR</h3>
	<MiniCalendar />
	<h3 class="mb-3 text-sm font-medium text-gray-500">VIEW</h3>
	<div class="flex flex-col gap-2">
		<Button
			onclick={() => calendarView.set('month')}
			class="justify-start gap-2 {$calendarView === 'month' ? 'bg-gray-100' : ''}"
		>
			Month
		</Button>
		<Button
			onclick={() => calendarView.set('week')}
			class="justify-start gap-2 {$calendarView === 'week' ? 'bg-gray-100' : ''}"
		>
			Week
		</Button>
		<Button
			onclick={() => calendarView.set('day')}
			class="justify-start gap-2 {$calendarView === 'day' ? 'bg-gray-100' : ''}"
		>
			Day
		</Button>
	</div>
	<h3 class="mb-3 text-sm font-medium text-gray-500">FILTERS</h3>
	<div class="flex flex-col gap-2">
		{#each categories as category, cate (cate)}
			<label class="inline-flex cursor-pointer items-center">
				<input
					type="checkbox"
					class="text-primary-600 focus:border-primary-300 focus:ring-primary-200 focus:ring-opacity-50 mr-2 rounded border-gray-300 shadow-sm focus:ring"
					onchange={() => toggleCategoryFilter(category.id)}
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

{#if showEventModal}
	<div
		class="bg-opacity-30 fixed inset-0 z-50 flex items-center justify-center bg-gray-200"
		onclick={() => (showEventModal = false)}
		{...restProps}
	>
		<div class="w-full max-w-md rounded-lg bg-white p-6" {...restProps}>
			<h2 class="mb-4 text-xl font-bold">New Event</h2>
			<EventForm />
			<div class="mt-4 text-center">
				<button class="btn btn-secondary mr-2" onclick={() => (showEventModal = false)}>
					Cancel
				</button>
				<button class="btn btn-primary"> Save Event </button>
			</div>
		</div>
	</div>
{/if}
