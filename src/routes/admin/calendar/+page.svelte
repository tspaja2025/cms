<script lang="ts">
	import EventDialog from '$lib/apps/calendar/event-dialog.svelte';
	import Filters from '$lib/apps/calendar/filters.svelte';
	import { Button } from '$lib/components/ui/button/index';
	import * as Card from '$lib/components/ui/card/index';
	import { RangeCalendar } from '$lib/components/ui/range-calendar/index';
	import * as Select from '$lib/components/ui/select/index';
	import { Separator } from '$lib/components/ui/separator/index';
	import {
		currentDate,
		daysFromNextMonth,
		daysFromPrevMonth,
		daysInCurrentMonth,
		formatHeaderDate,
		prevMonthStartDay,
		weekDayNames
	} from '$lib/store';
	import ChevronLeftIcon from '@lucide/svelte/icons/chevron-left';
	import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';

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
</script>

<svelte:head>
	<title>CMS | Admin | Calendar</title>
	<meta name="description" content="CMS" />
</svelte:head>

<div class="mx-auto grid gap-4 md:max-w-full lg:max-w-7xl">
	<div class="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
		<Card.Root
			class="overflow-hidden bg-gradient-to-t from-primary/5 to-card p-0
shadow-xs dark:bg-card"
		>
			<Card.Content class="flex overflow-hidden px-0">
				<div class="flex w-64 flex-col border-r p-4">
					<EventDialog />

					<RangeCalendar class="px-0" />

					<Filters />
				</div>
				<div class="flex flex-1 flex-col">
					<div class="flex h-16 items-center justify-between border-b px-4 py-2">
						<div class="flex flex-col">
							<h1 class="text-lg font-bold">{headerDate}</h1>
						</div>

						<div class="flex items-center gap-1">
							<Button variant="ghost" aria-label="Previous month">
								<ChevronLeftIcon class="h-5 w-5" />
							</Button>

							<Button variant="ghost">Today</Button>

							<Button variant="ghost" aria-label="Next month">
								<ChevronRightIcon class="h-5 w-5" />
							</Button>

							<Separator orientation="vertical" />

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
						{#each weekDayNames as weekday, index (index)}
							<div class="flex items-center justify-center">{weekday}</div>
						{/each}
					</div>
					<div class="-mr-px -mb-px grid grid-cols-7">
						<!-- Days from previous month (grayed out) -->
						{#each { length: daysFromPrevMonth } as _, i (i)}
							<div class="h-28 border-r border-b bg-sidebar p-1 dark:bg-sidebar-accent">
								<div class="flex h-7 w-7 items-center justify-center rounded-full">
									{prevMonthStartDay + i}
								</div>
							</div>
						{/each}

						<!-- Days of current month -->
						{#each { length: daysInCurrentMonth } as _, i (i)}
							<div class="h-28 border-r border-b p-1">
								<div
									class="flex h-7 w-7 items-center justify-center rounded-full {i + 1 ===
									currentDate.day
										? 'bg-blue-500 text-white'
										: 'bg-sidebar'}"
								>
									{i + 1}
								</div>
							</div>
						{/each}

						<!-- Days from next month (grayed out) -->
						{#each { length: daysFromNextMonth } as _, i (i)}
							<div class="h-28 border-r border-b bg-sidebar p-1 dark:bg-sidebar-accent">
								<div class="flex h-7 w-7 items-center justify-center rounded-full">
									{i + 1}
								</div>
							</div>
						{/each}
					</div>
				</div>
			</Card.Content>
		</Card.Root>
	</div>
</div>
