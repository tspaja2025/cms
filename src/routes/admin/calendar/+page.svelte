<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import * as Select from '$lib/components/ui/select/index';
	import { Button } from '$lib/components/ui/button/index';
	import { RangeCalendar } from '$lib/components/ui/range-calendar/index';
	import ChevronLeftIcon from '@lucide/svelte/icons/chevron-left';
	import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
	import { Separator } from '$lib/components/ui/separator/index';
	import ComposeDialog from '$lib/custom/calendar/compose-dialog.svelte';
	import Filters from '$lib/custom/calendar/filters.svelte';
	import {
		currentDate,
		daysFromNextMonth,
		daysFromPrevMonth,
		daysInCurrentMonth,
		formatHeaderDate,
		prevMonthStartDay,
		weekDayNames
	} from '$lib/custom/calendar/store/data';

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

<Card.Root class="overflow-hidden p-0 shadow-none">
	<Card.Content class="flex overflow-hidden px-0">
		<div class="flex w-64 flex-col border-r p-4">
			<ComposeDialog />

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
					<div class="h-28 border-r border-b bg-slate-100 p-1 text-slate-400 dark:bg-(--sidebar)">
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
								: 'bg-slate-100 dark:bg-neutral-800'}"
						>
							{i + 1}
						</div>
					</div>
				{/each}

				<!-- Days from next month (grayed out) -->
				{#each { length: daysFromNextMonth } as _, i (i)}
					<div class="h-28 border-r border-b bg-slate-100 p-1 text-slate-400 dark:bg-(--sidebar)">
						<div class="flex h-7 w-7 items-center justify-center rounded-full">
							{i + 1}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</Card.Content>
</Card.Root>
