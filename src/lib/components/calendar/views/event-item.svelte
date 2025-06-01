<script lang="ts">
	import type { CalendarEvent } from '$lib/components/calendar/types';
	import { formatEventTime } from '$lib/components/calendar/utils/date-utils';

	export let event: CalendarEvent;
	export let compact = false;

	const categoryColors = {
		work: 'bg-blue-100 text-blue-800 border-blue-200',
		personal: 'bg-green-100 text-green-800 border-green-200',
		family: 'bg-purple-100 text-purple-800 border-purple-200',
		other: 'bg-gray-100 text-gray-800 border-gray-200'
	};

	const categoryDots = {
		work: 'bg-blue-500',
		personal: 'bg-green-500',
		family: 'bg-purple-500',
		other: 'bg-gray-500'
	};
</script>

{#if compact}
	<div class="flex items-center gap-1 truncate px-1 py-0.5 text-xs">
		<span class="h-2 w-2 rounded-full {categoryDots[event.category]}"></span>
		<span class="truncate">{event.title}</span>
	</div>
{:else}
	<div class="p-1 text-xs {categoryColors[event.category]} overflow-hidden rounded border">
		{#if !event.allDay}
			<div class="mb-1 font-medium">
				{formatEventTime(event.start)} - {formatEventTime(event.end)}
			</div>
		{/if}
		<div class="truncate font-bold">{event.title}</div>
		{#if event.description && !compact}
			<div class="mt-0.5 truncate">{event.description}</div>
		{/if}
	</div>
{/if}

<style>
	/* Add any component-specific styles here */
</style>
