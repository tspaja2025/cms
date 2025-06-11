<script lang="ts">
	import type { CalendarEvent, EventCategory } from '$lib/components/calendar/types';
	import { addEvent, updateEvent } from '$lib/components/calendar/stores/events';

	let {
		event = {
			title: '',
			description: '',
			start: new Date(),
			end: new Date(new Date().setHours(new Date().getHours() + 1)),
			allDay: false,
			category: 'work'
		},
		isEdit = false,
		onClose
	} = $props();

	const categories = $state([
		{ id: 'work', name: 'Work' },
		{ id: 'personal', name: 'Personal' },
		{ id: 'family', name: 'Family' },
		{ id: 'other', name: 'Other' }
	]);

	const startDateTime = $derived(event.start ? formatDateTimeForInput(event.start) : '');
	const endDateTime = $derived(event.end ? formatDateTimeForInput(event.end) : '');

	function handleSubmit() {
		if (!event.title) return;

		if (isEdit && event.id) {
			updateEvent(event as CalendarEvent);
		} else {
			addEvent({
				title: event.title,
				description: event.description,
				start: event.start,
				end: event.end,
				allDay: event.allDay,
				category: event.category as EventCategory
			});
		}

		onClose?.();
	}

	function handleCancel() {
		onClose?.();
	}

	function formatDateTimeForInput(date: Date): string {
		return date.toISOString().slice(0, 16);
	}

	function updateStartDate(e: Event) {
		const input = e.target as HTMLInputElement;
		event.start = new Date(input.value);

		// If end date is before start date, update it
		if (event.end && event.end < event.start) {
			event.end = new Date(new Date(event.start).setHours(event.start.getHours() + 1));
		}
	}

	function updateEndDate(e: Event) {
		const input = e.target as HTMLInputElement;
		event.end = new Date(input.value);
	}
</script>

<form onsubmit={handleSubmit} class="space-y-4">
	<div>
		<label for="title" class="mb-1 block text-sm font-medium text-gray-700">Title</label>
		<input
			type="text"
			id="title"
			bind:value={event.title}
			class="focus:ring-primary-500 focus:border-primary-500 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none"
			placeholder="Event title"
			required
		/>
	</div>

	<div>
		<label for="description" class="mb-1 block text-sm font-medium text-gray-700"
			>Description (optional)</label
		>
		<textarea
			id="description"
			bind:value={event.description}
			class="focus:ring-primary-500 focus:border-primary-500 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none"
			rows="2"
			placeholder="Add a description"
		></textarea>
	</div>

	<div class="flex items-center">
		<input
			type="checkbox"
			id="all-day"
			bind:checked={event.allDay}
			class="text-primary-600 focus:ring-primary-500 h-4 w-4 rounded border-gray-300"
		/>
		<label for="all-day" class="ml-2 block text-sm text-gray-700">All day</label>
	</div>

	{#if !event.allDay}
		<div class="grid grid-cols-2 gap-4">
			<div>
				<label for="start-date" class="mb-1 block text-sm font-medium text-gray-700">Start</label>
				<input
					type="datetime-local"
					id="start-date"
					value={startDateTime}
					onchange={updateStartDate}
					class="focus:ring-primary-500 focus:border-primary-500 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none"
				/>
			</div>

			<div>
				<label for="end-date" class="mb-1 block text-sm font-medium text-gray-700">End</label>
				<input
					type="datetime-local"
					id="end-date"
					value={endDateTime}
					onchange={updateEndDate}
					class="focus:ring-primary-500 focus:border-primary-500 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none"
				/>
			</div>
		</div>
	{:else}
		<div>
			<label for="date" class="mb-1 block text-sm font-medium text-gray-700">Date</label>
			<input
				type="date"
				id="date"
				value={event.start ? event.start.toISOString().split('T')[0] : ''}
				onchange={updateStartDate}
				class="focus:ring-primary-500 focus:border-primary-500 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none"
			/>
		</div>
	{/if}

	<div>
		<label for="category" class="mb-1 block text-sm font-medium text-gray-700">Category</label>
		<select
			id="category"
			bind:value={event.category}
			class="focus:ring-primary-500 focus:border-primary-500 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none"
		>
			{#each categories as category (category.id)}
				<option value={category.id}>{category.name}</option>
			{/each}
		</select>
	</div>

	<div class="flex justify-end gap-2 pt-2">
		<button type="button" onclick={handleCancel} class="btn btn-secondary"> Cancel </button>
		<button type="submit" class="btn btn-primary">
			{isEdit ? 'Update' : 'Create'} Event
		</button>
	</div>
</form>
