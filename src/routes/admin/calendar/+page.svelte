<script lang="ts">
	import { CalendarDate, DateFormatter, getLocalTimeZone, today } from '@internationalized/date';
	import * as Card from '$lib/components/ui/card/index';
	import * as Dialog from '$lib/components/ui/dialog/index';
	import * as Select from '$lib/components/ui/select/index';
	import { Button, buttonVariants } from '$lib/components/ui/button/index';
	import { Label } from '$lib/components/ui/label/index';
	import { Input } from '$lib/components/ui/input/index';
	import { Textarea } from '$lib/components/ui/textarea/index';
	import { Checkbox } from '$lib/components/ui/checkbox/index';
	import { RangeCalendar } from '$lib/components/ui/range-calendar/index';
	import PlusIcon from '@lucide/svelte/icons/plus';
	import ChevronLeftIcon from '@lucide/svelte/icons/chevron-left';
	import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
	import { Separator } from '$lib/components/ui/separator/index';

	const currentDate = today(getLocalTimeZone());

	const headerDateFormatter = new DateFormatter('en-US', {
		weekday: 'long',
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});

	function formatHeaderDate(date: CalendarDate): string {
		return headerDateFormatter.format(date.toDate(getLocalTimeZone()));
	}

	let headerDate = $derived(formatHeaderDate(currentDate));

	let viewValue = $state('');
	const views = [
		{ value: 'day', label: 'Day' },
		{ value: 'week', label: 'Week' },
		{ value: 'month', label: 'Month' }
	];
	const triggerContent = $derived(
		views.find((v) => v.value === viewValue)?.label ?? 'Select a view'
	);

	let eventValue = $state('');
	let categories = [
		{ value: 'work', label: 'Work', color: 'bg-blue-500' },
		{ value: 'personal', label: 'Personal', color: 'bg-green-500' },
		{ value: 'family', label: 'Family', color: 'bg-purple-500' },
		{ value: 'other', label: 'Other', color: 'bg-neutral-500' }
	];
	const eventTrigger = $derived(
		categories.find((v) => v.value === eventValue)?.label ?? 'Select Category'
	);

	// Calendar grid
	// Helper functions
	function getDaysInMonth(year: number, month: number): number {
		return new Date(year, month + 1, 0).getDate();
	}

	function getFirstDayOfMonth(year: number, month: number): number {
		return new Date(year, month, 1).getDay();
	}

	// Get current month info
	const currentYear = currentDate.year;
	const currentMonth = currentDate.month - 1; // JavaScript months are 0-indexed
	const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);
	const firstDayOfCurrentMonth = getFirstDayOfMonth(currentYear, currentMonth);

	// Get previous month info
	const prevMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;
	const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
	const daysInPrevMonth = getDaysInMonth(prevMonthYear, prevMonth);

	// Calculate days to show from previous month
	const daysFromPrevMonth = firstDayOfCurrentMonth;
	const prevMonthStartDay = daysInPrevMonth - daysFromPrevMonth + 1;

	// Calculate days to show from next month
	const totalCells = Math.ceil((daysFromPrevMonth + daysInCurrentMonth) / 7) * 7;
	const daysFromNextMonth = totalCells - (daysFromPrevMonth + daysInCurrentMonth);
</script>

<Card.Root class="p-0 shadow-none">
	<Card.Content class="flex overflow-hidden px-0">
		<div class="flex w-64 flex-col border-r p-4">
			<Dialog.Root>
				<Dialog.Trigger class="w-full {buttonVariants({ variant: 'default' })}">
					<PlusIcon class="h-5 w-5" />
					Add Event
				</Dialog.Trigger>

				<Dialog.Content>
					<Dialog.Header>
						<Dialog.Title>New Event</Dialog.Title>
					</Dialog.Header>

					<form class="space-y-4">
						<div class="space-y-2">
							<Label for="title">Title</Label>
							<Input id="title" placeholder="Event title" required />
						</div>

						<div class="space-y-2">
							<Label for="description">Description (optional)</Label>
							<Textarea id="description" placeholder="Add a description" rows={2} />
						</div>

						<div class="flex items-center">
							<Checkbox id="all-day" />
							<Label for="all-day" class="ml-2">All day</Label>
						</div>

						<div class="grid grid-cols-2 gap-4">
							<div class="space-y-2">
								<Label for="start-date">Start</Label>
								<Input type="datetime-local" id="start-date" />
							</div>

							<div class="space-y-2">
								<Label for="end-date">End</Label>
								<Input type="datetime-local" id="end-date" />
							</div>
						</div>

						<div class="space-y-2">
							<Label for="date">Date</Label>
							<Input type="date" id="date" />
						</div>

						<div class="space-y-2">
							<Label for="category">Category</Label>
							<Select.Root type="single" bind:value={eventValue}>
								<Select.Trigger>{eventTrigger}</Select.Trigger>
								<Select.Content>
									{#each categories as category, index (index)}
										<Select.Item value={category.value}>
											{category.label}
										</Select.Item>
									{/each}
								</Select.Content>
							</Select.Root>
						</div>

						<div class="flex justify-end gap-2 pt-2">
							<Button type="submit" variant="secondary">Cancel</Button>
							<Button type="submit">Create Event</Button>
						</div>
					</form>
				</Dialog.Content>
			</Dialog.Root>

			<RangeCalendar class="px-0" />

			<h3 class="mb-3 text-sm font-medium text-gray-500">FILTERS</h3>
			<div class="flex flex-col gap-2">
				<div class="inline-flex items-center gap-2">
					<Checkbox id="work" />
					<Label for="work">
						<span class="inline-block h-3 w-3 rounded-full bg-blue-500"></span>
						Work
					</Label>
				</div>
				<div class="inline-flex items-center gap-2">
					<Checkbox id="personal" />
					<Label for="personal">
						<span class="inline-block h-3 w-3 rounded-full bg-green-500"></span>
						Personal
					</Label>
				</div>
				<div class="inline-flex items-center gap-2">
					<Checkbox id="family" />
					<Label for="family">
						<span class="inline-block h-3 w-3 rounded-full bg-purple-500"></span>
						Family
					</Label>
				</div>
				<div class="inline-flex items-center gap-2">
					<Checkbox id="other" />
					<Label for="other">
						<span class="inline-block h-3 w-3 rounded-full bg-neutral-500"></span>
						Other
					</Label>
				</div>
			</div>
		</div>
		<div class="flex flex-1 flex-col">
			<div class="flex h-16 items-center justify-between border-b px-4 py-2">
				<div class="flex flex-col">
					<h1 class="text-xl font-bold">{headerDate}</h1>
				</div>

				<div class="flex items-center gap-1">
					<Button variant="ghost" aria-label="Previous month">
						<ChevronLeftIcon class="h-5 w-5" />
					</Button>

					<Button variant="ghost">Today</Button>

					<Button variant="ghost" aria-label="Next month">
						<ChevronRightIcon class="h-5 w-5" />
					</Button>

					<Separator orientation="vertical"/>

					<Select.Root type="single" bind:value={viewValue}>
						<Select.Trigger name="viewSelector">{triggerContent}</Select.Trigger>
						<Select.Content>
							{#each views as viewSelected, index (index)}
								<Select.Item value={viewSelected.value}>{viewSelected.label}</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
				</div>
			</div>
			<div class="grid h-8 grid-cols-7 items-center border-b">
				<div class="flex items-center justify-center">Sun</div>
				<div class="flex items-center justify-center">Mon</div>
				<div class="flex items-center justify-center">Tue</div>
				<div class="flex items-center justify-center">Wed</div>
				<div class="flex items-center justify-center">Thu</div>
				<div class="flex items-center justify-center">Fri</div>
				<div class="flex items-center justify-center">Sat</div>
			</div>
			<div class="-mr-px -mb-px grid grid-cols-7">
				<!-- Days from previous month (grayed out) -->
				{#each { length: daysFromPrevMonth } as _, i (i)}
					<div class="h-32 border-r border-b bg-slate-100 p-1 text-slate-400 dark:bg-(--sidebar)">
						<div class="flex h-7 w-7 items-center justify-center rounded-full">
							{prevMonthStartDay + i}
						</div>
					</div>
				{/each}

				<!-- Days of current month -->
				{#each { length: daysInCurrentMonth } as _, i (i)}
					<div class="h-32 border-r border-b p-1">
						<div
							class="flex h-7 w-7 items-center justify-center rounded-full {i + 1 ===
							currentDate.day
								? 'bg-blue-500 text-white'
								: 'bg-slate-100 dark:bg-neutral-800'}"
						>
							{i + 1}
						</div>
					</div>
				{/each}

				<!-- Days from next month (grayed out) -->
				{#each { length: daysFromNextMonth } as _, i (i)}
					<div class="h-32 border-r border-b bg-slate-100 p-1 text-slate-400 dark:bg-(--sidebar)">
						<div class="flex h-7 w-7 items-center justify-center rounded-full">
							{i + 1}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</Card.Content>
</Card.Root>
