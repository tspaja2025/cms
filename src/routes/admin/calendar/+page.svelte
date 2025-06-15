<script lang="ts">
	import MonthView from '$lib/custom/calendar/views/month-view.svelte';
	import WeekView from '$lib/custom/calendar/views/week-view.svelte';
	import DayView from '$lib/custom/calendar/views/day-view.svelte';
	import {
		currentDate,
		currentMonthYear,
		calendarView,
		goToPreviousMonth,
		goToNextMonth,
		goToToday
	} from '$lib/custom/calendar/store/calendar';
	import { formatHeaderDate } from '$lib/custom/calendar/utils/date-utils';
	import { Button } from '$lib/components/ui/button';
	import { ChevronLeftIcon, ChevronRightIcon } from '@lucide/svelte';
	import { categoryFilters, toggleCategoryFilter } from '$lib/custom/calendar/store/events';
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
	import type { CalendarEvent, EventCategory } from '$lib/custom/calendar/types';
	import { addEvent, updateEvent } from '$lib/custom/calendar/store/events';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import * as Select from '$lib/components/ui/select';
	import { buttonVariants } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Label } from '$lib/components/ui/label';
	import { PlusIcon } from '@lucide/svelte';

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

	// Header
	const headerDate = $derived(formatHeaderDate($currentDate));

	// Sidenav
	// Event categories with colors
	const categories = [
		{ id: 'work', name: 'Work', color: 'bg-blue-500' },
		{ id: 'personal', name: 'Personal', color: 'bg-green-500' },
		{ id: 'family', name: 'Family', color: 'bg-purple-500' },
		{ id: 'other', name: 'Other', color: 'bg-gray-500' }
	];

	// Event Form
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

	// Mini Calendar
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

<svelte:head>
	<title>Admin Dashboard</title>
</svelte:head>

<div class="flex h-full overflow-hidden">
	<!-- Sidenav -->
	<div class="flex w-64 flex-col space-y-4 border-r border-gray-200 bg-white p-4">
		<div class="flex items-center justify-center">
			<Dialog.Root>
				<Dialog.Trigger class="w-full {buttonVariants({ variant: 'default' })}">
					<PlusIcon class="h-5 w-5" />
					Add Event
				</Dialog.Trigger>
				<Dialog.Content>
					<Dialog.Header>
						<Dialog.Title>New Event</Dialog.Title>
					</Dialog.Header>
					<form onsubmit={handleSubmit} class="space-y-4">
						<div class="space-y-2">
							<Label for="title">Title</Label>
							<Input
								type="text"
								id="title"
								bind:value={event.title}
								placeholder="Event title"
								required
							/>
						</div>

						<div class="space-y-2">
							<Label for="description">Description (optional)</Label>
							<Textarea
								id="description"
								bind:value={event.description}
								placeholder="Add a description"
								rows="2"
							/>
						</div>

						<div class="flex items-center space-x-2">
							<Checkbox id="all-day" onCheckedChange={event.allDay} />
							<Label for="all-day">All day</Label>
						</div>

						{#if !event.allDay}
							<div class="grid grid-cols-2 gap-4">
								<div class="space-y-2">
									<Label for="start-date">Start</Label>
									<Input
										type="datetime-local"
										id="start-date"
										value={startDateTime}
										onchange={updateStartDate}
									/>
								</div>

								<div class="space-y-2">
									<Label for="end-date">End</Label>
									<Input
										type="datetime-local"
										id="end-date"
										value={endDateTime}
										onchange={updateEndDate}
									/>
								</div>
							</div>
						{:else}
							<div class="space-y-2">
								<Label for="date">Date</Label>
								<Input
									type="date"
									id="date"
									value={event.start ? event.start.toISOString().split('T')[0] : ''}
									onchange={updateStartDate}
								/>
							</div>
						{/if}

						<div class="space-y-2">
							<Label for="category">Category</Label>
							<Select.Root bind:value={event.category}>
								<Select.Trigger>Select category</Select.Trigger>
								<Select.Content>
									{#each categories as category (category.id)}
										<Select.Item value={category.id}>{category.name}</Select.Item>
									{/each}
								</Select.Content>
							</Select.Root>
						</div>

						<div class="flex justify-end gap-2 pt-2">
							<Button type="button" variant="outline" onclick={handleCancel}>Cancel</Button>
							<Button type="submit">
								{isEdit ? 'Update' : 'Create'} Event
							</Button>
						</div>
					</form>
				</Dialog.Content>
			</Dialog.Root>
		</div>
		<h3 class="text-sm font-medium text-gray-500">MINI CALENDAR</h3>
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
		<h3 class="mb-3 text-sm font-medium text-gray-500">FILTERS</h3>
		<div class="flex flex-col gap-2">
			{#each categories as category, cate (cate)}
				<div class="flex items-center gap-2">
					<Checkbox
						id="filters"
						onCheckedChange={() => toggleCategoryFilter(category.id)}
						checked={$categoryFilters.includes(category.id)}
					/>
					<Label for="filters">
						<span class="{category.color} inline-block h-3 w-3 rounded-full"></span>
						{category.name}
					</Label>
				</div>
			{/each}
		</div>
	</div>
	<div class="flex-1">
		<!-- Header -->
		<header class="border-b border-gray-200 bg-white px-4 py-2">
			<div class="flex items-center justify-between">
				<div class="flex items-center gap-2">
					<h1 class="text-2xl font-bold text-gray-800">{$currentMonthYear}</h1>
					<div class="hidden text-sm text-gray-500 md:block">{headerDate}</div>
				</div>

				<div class="flex items-center gap-4">
					<div class="flex items-center gap-1">
						<Button onclick={goToPreviousMonth} aria-label="Previous month">
							<ChevronLeftIcon />
						</Button>

						<Button onclick={goToToday}>Today</Button>

						<Button onclick={goToNextMonth} aria-label="Next month">
							<ChevronRightIcon />
						</Button>
					</div>

					<div class="hidden h-6 border-l border-gray-300 md:block"></div>

					<div class="hidden items-center gap-1 rounded-lg bg-gray-100 p-1 md:flex">
						<Button
							onclick={() => calendarView.set('month')}
							class="!px-3 !py-1 text-sm font-medium {$calendarView === 'month'
								? ''
								: 'text-gray-600 hover:bg-neutral-800'}"
						>
							Month
						</Button>
						<Button
							onclick={() => calendarView.set('week')}
							class="!px-3 !py-1 text-sm font-medium {$calendarView === 'week'
								? ''
								: 'text-gray-600 hover:bg-neutral-800'}"
						>
							Week
						</Button>
						<Button
							onclick={() => calendarView.set('day')}
							class="!px-3 !py-1 text-sm font-medium {$calendarView === 'day'
								? ''
								: 'text-gray-600 hover:bg-neutral-800'}"
						>
							Day
						</Button>
					</div>
				</div>
			</div>
		</header>
		<!-- Calendar -->
		<div class="h-full overflow-hidden bg-white">
			{#if $calendarView === 'month'}
				<MonthView />
			{:else if $calendarView === 'week'}
				<WeekView />
			{:else if $calendarView === 'day'}
				<DayView />
			{/if}
		</div>
	</div>
</div>
