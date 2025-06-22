<script lang="ts">
  import { onMount, createEventDispatcher } from "svelte";
  import {
    categoryFilters,
    toggleCategoryFilter,
    filteredEvents,
    getEventsForDay,
    addEvent,
    updateEvent,
  } from "$lib/custom/calendar/store/events";
  import {
    currentDate,
    currentMonthYear,
    calendarView,
    goToPreviousMonth,
    goToNextMonth,
    goToToday,
    monthDays,
  } from "$lib/custom/calendar/store/calendar";
  import {
    formatHeaderDate,
    getHourLabels,
    getTimeValue,
    getDayClassNames,
  } from "$lib/custom/calendar/store/utils";
  import {
    startOfWeek,
    endOfWeek,
    getLocalTimeZone,
    today,
    isToday as isTodayIntl,
    isSameDay,
    DateFormatter,
    CalendarDate,
    toCalendarDateTime,
    CalendarDateTime,
    startOfMonth,
    endOfMonth,
  } from "@internationalized/date";
  import EventItem from "$lib/custom/calendar/event-item.svelte";
  // Shadcn-svelte and @lucide/svelte
  import * as Dialog from "$lib/components/ui/dialog";
  import { Label } from "$lib/components/ui/label";
  import { Checkbox } from "$lib/components/ui/checkbox";
  import { Button, buttonVariants } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import * as Select from "$lib/components/ui/select";
  import { Textarea } from "$lib/components/ui/textarea";
  import PlusIcon from "@lucide/svelte/icons/plus";
  import ChevronLeftIcon from "@lucide/svelte/icons/chevron-left";
  import ChevronRightIcon from "@lucide/svelte/icons/chevron-right";

  // Common constants and utilities
  const categories = [
    { id: "work", name: "Work", color: "bg-blue-500" },
    { id: "personal", name: "Personal", color: "bg-green-500" },
    { id: "family", name: "Family", color: "bg-purple-500" },
    { id: "other", name: "Other", color: "bg-gray-500" },
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const hours = getHourLabels();

  // Header
  $: headerDate = formatHeaderDate($currentDate);

  // Calendar initialization
  onMount(() => {
    if (!$currentDate) {
      currentDate.set(today(getLocalTimeZone()));
    }
  });

  // Common formatters
  const headerDateFormatter = new DateFormatter("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const weekdayFormatter = new DateFormatter("en-US", { weekday: "short" });
  const dayFormatter = new DateFormatter("en-US", { day: "numeric" });
  const monthYearFormatter = new DateFormatter("en-US", {
    month: "long",
    year: "numeric",
  });

  // Event-related functions
  function getEventsForDate(date: CalendarDate | CalendarDateTime) {
    return $filteredEvents.filter((event) => {
      const eventDate =
        event.start instanceof CalendarDate
          ? toCalendarDateTime(event.start)
          : event.start;
      const compareDate = toCalendarDateTime(date);
      return isSameDay(eventDate, compareDate);
    });
  }

  function getEventStyle(event) {
    const startTime = getTimeValue(event.start);
    const endTime = getTimeValue(event.end);
    const duration = endTime - startTime;

    return `
			top: calc(${startTime * 60}px);
			height: calc(${duration * 60}px);
			${$calendarView === "day" ? "left: 8px; right: 8px;" : ""}
		`;
  }

  // day-view
  let dayEvents = [];
  let allDayEvents = [];
  let timedEvents = [];

  $: {
    dayEvents = getEventsForDate($currentDate);
    allDayEvents = dayEvents.filter((event) => event.allDay);
    timedEvents = dayEvents.filter((event) => !event.allDay);
  }

  // week-view
  $: weekStart = startOfWeek($currentDate, "en-US", 0);
  $: weekEnd = endOfWeek($currentDate, "en-US", 0);
  $: weekDays = generateDateRange(weekStart, weekEnd);

  // month-view
  function getCellClass(day) {
    return getDayClassNames(day.date, $currentDate);
  }

  // mini-calendar
  $: monthStart = startOfMonth($currentDate);
  $: monthEnd = endOfMonth($currentDate);
  $: calendarStart = startOfWeek(monthStart, "en-US", 0);
  $: calendarEnd = endOfWeek(monthEnd, "en-US", 0);
  $: days = generateDateRange(calendarStart, calendarEnd);

  function generateDateRange(
    start: CalendarDate,
    end: CalendarDate,
  ): CalendarDate[] {
    const daysArray: CalendarDate[] = [];
    let current = start;
    while (current.compare(end) <= 0) {
      daysArray.push(current);
      current = current.add({ days: 1 });
    }
    return daysArray;
  }

  function selectDay(day: CalendarDate) {
    currentDate.set(day);
  }

  // event-form
  interface CalendarEvent {
    id: string;
    title: string;
    description?: string;
    start: CalendarDateTime;
    end: CalendarDateTime;
    allDay: boolean;
    category: EventCategory;
  }

  type EventCategory = "work" | "personal" | "family" | "other";

  const dispatch = createEventDispatcher();

  // Helper functions for date conversion
  function dateToCalendarDateTime(date: Date): CalendarDateTime {
    return new CalendarDateTime(
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds(),
    );
  }

  function dateToCalendarDate(date: Date): CalendarDate {
    return new CalendarDate(
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
    );
  }

  function calendarDateToDate(date: CalendarDate | CalendarDateTime): Date {
    return date.toDate(getLocalTimeZone());
  }

  export let event: Partial<CalendarEvent> = {
    title: "",
    description: "",
    start: dateToCalendarDateTime(new Date()),
    end: dateToCalendarDateTime(
      new Date(new Date().setHours(new Date().getHours() + 1)),
    ),
    allDay: false,
    category: "work",
  };

  export let isEdit = false;

  function handleSubmit() {
    if (!event.title) return;

    if (isEdit && event.id) {
      updateEvent(event as CalendarEvent);
    } else {
      addEvent({
        title: event.title,
        description: event.description,
        start: event.start as CalendarDateTime,
        end: event.end as CalendarDateTime,
        allDay: event.allDay,
        category: event.category as EventCategory,
      });
    }

    dispatch("close");
  }

  function handleCancel() {
    dispatch("close");
  }

  function formatDateTimeForInput(date: CalendarDateTime): string {
    return calendarDateToDate(date).toISOString().slice(0, 16);
  }

  $: startDateTime = event.start ? formatDateTimeForInput(event.start) : "";
  $: endDateTime = event.end ? formatDateTimeForInput(event.end) : "";

  function updateStartDate(e: Event) {
    const input = e.target as HTMLInputElement;
    const newDate = new Date(input.value);

    if (event.allDay) {
      event.start = toCalendarDateTime(dateToCalendarDate(newDate));
      event.end = toCalendarDateTime(dateToCalendarDate(newDate));
    } else {
      event.start = dateToCalendarDateTime(newDate);
      if (event.end && calendarDateToDate(event.end) < newDate) {
        event.end = dateToCalendarDateTime(
          new Date(newDate.setHours(newDate.getHours() + 1)),
        );
      }
    }
  }

  function updateEndDate(e: Event) {
    const input = e.target as HTMLInputElement;
    const newDate = new Date(input.value);
    event.end = event.allDay
      ? toCalendarDateTime(dateToCalendarDate(newDate))
      : dateToCalendarDateTime(newDate);
  }
</script>

<div class="flex">
  <!-- Sidenav -->
  <div class="flex h-full w-64 flex-col border-r border-gray-200 bg-white p-4">
    <div class="mb-6">
      <Dialog.Root>
        <Dialog.Trigger class="w-full {buttonVariants({ variant: 'ghost' })}">
          <PlusIcon class="h-5 w-5" />
          Add Event
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>New Event</Dialog.Title>
          </Dialog.Header>
          <form on:submit|preventDefault={handleSubmit} class="space-y-4">
            <div class="space-y-2">
              <Label for="title">Title</Label>
              <Input
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
              ></Textarea>
            </div>

            <div class="flex items-center">
              <Checkbox id="all-day" bind:checked={event.allDay} />
              <Label for="all-day" class="ml-2">All day</Label>
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
                  value={event.start
                    ? event.start.toString().split("T")[0]
                    : ""}
                  onchange={updateStartDate}
                />
              </div>
            {/if}

            <div class="space-y-2">
              <Label for="category">Category</Label>
              <Select.Root bind:value={event.category}>
                <Select.Trigger>Select Category</Select.Trigger>
                <Select.Content>
                  {#each categories as category}
                    <Select.Item value={category.id}
                      >{category.name}</Select.Item
                    >
                  {/each}
                </Select.Content>
              </Select.Root>
            </div>

            <div class="flex justify-end gap-2 pt-2">
              <Button onclick={handleCancel} variant="secondary">Cancel</Button>
              <Button type="submit">
                {isEdit ? "Update" : "Create"} Event
              </Button>
            </div>
          </form>
          <Dialog.Footer>
            <Button>Cancel</Button>
            <Button>Save Event</Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Root>
    </div>

    <div class="mb-6">
      <h3 class="mb-3 text-sm font-medium text-gray-500">MINI CALENDAR</h3>
      <div class="mini-calendar">
        <div class="mb-2 text-sm font-medium">
          {monthYearFormatter.format($currentDate.toDate(getLocalTimeZone()))}
        </div>

        <div class="grid grid-cols-7 gap-1 text-xs">
          {#each dayNames as day}
            <div class="py-1 text-center font-medium text-gray-500">{day}</div>
          {/each}

          {#each days as day}
            <Button
              class="rounded-full {isTodayIntl(day, getLocalTimeZone())
                ? 'bg-neutral-500 text-white'
                : isSameDay(day, $currentDate)
                  ? 'bg-primary-100 text-primary-800'
                  : day.month === $currentDate.month
                    ? ''
                    : 'text-gray-400'}"
              onclick={() => selectDay(day)}
            >
              {dayFormatter.format(day.toDate(getLocalTimeZone()))}
            </Button>
          {/each}
        </div>
      </div>
    </div>

    <div>
      <h3 class="mb-3 text-sm font-medium text-gray-500">FILTERS</h3>
      <div class="flex flex-col gap-2">
        {#each categories as category}
          <div class="inline-flex items-center gap-2">
            <Checkbox
              name={category.name}
              onCheckedChange={() => toggleCategoryFilter(category.id)}
              checked={$categoryFilters.includes(category.id)}
            />
            <Label for={category.name}>
              <span class="{category.color} inline-block h-3 w-3 rounded-full"
              ></span>
              {category.name}
            </Label>
          </div>
        {/each}
      </div>
    </div>
  </div>
  <div class="flex flex-1 flex-col">
    <!-- Header -->
    <div class="border-b border-gray-200 bg-white px-6 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <h1 class="text-2xl font-bold text-gray-800">{$currentMonthYear}</h1>
          <div class="hidden text-sm text-gray-500 md:block">{headerDate}</div>
        </div>

        <div class="flex items-center gap-4">
          <div class="flex items-center gap-1">
            <Button onclick={goToPreviousMonth} aria-label="Previous month">
              <ChevronLeftIcon class="h-5 w-5" />
            </Button>

            <Button onclick={goToToday}>Today</Button>

            <Button onclick={goToNextMonth} aria-label="Next month">
              <ChevronRightIcon class="h-5 w-5" />
            </Button>
          </div>

          <div class="hidden h-6 border-l border-gray-300 md:block"></div>

          <div
            class="flex items-center gap-1 rounded-lg bg-gray-100 p-1 md:flex"
          >
            <Button
              onclick={() => calendarView.set("month")}
              class={$calendarView === "month" ? "shadow-sm" : "text-gray-600"}
            >
              Month
            </Button>
            <Button
              onclick={() => calendarView.set("week")}
              class=" {$calendarView === 'week'
                ? 'shadow-sm'
                : 'text-gray-600'}"
            >
              Week
            </Button>
            <Button
              onclick={() => calendarView.set("day")}
              class=" {$calendarView === 'day'
                ? 'shadow-sm'
                : 'text-gray-600 '}"
            >
              Day
            </Button>
          </div>
        </div>
      </div>
    </div>
    <!-- Calendar -->
    <div class="flex-1">
      {#if $calendarView === "month"}
        <div class="calendar-month-view animate-fade-in h-full overflow-auto">
          <div
            class="sticky top-0 z-10 grid grid-cols-7 border-b border-gray-200 bg-white"
          >
            {#each dayNames as day}
              <div class="py-2 text-center text-sm font-medium text-gray-500">
                {day}
              </div>
            {/each}
          </div>

          <div class="grid grid-cols-7">
            {#each $monthDays as day}
              <div class={getCellClass(day)}>
                <div class="flex items-start justify-between">
                  <div
                    class={`
            flex h-6 w-6 items-center justify-center rounded-full text-sm font-medium
            ${day.isToday ? "bg-primary-500 text-white" : ""}
          `}
                  >
                    {day.dayNumber}
                  </div>

                  {#if day.isCurrentMonth}
                    <!-- More events indicator could go here -->
                  {/if}
                </div>

                <div class="mt-1 max-h-[80px] space-y-1 overflow-hidden">
                  {#each getEventsForDay(day.date, $filteredEvents).slice(0, 3) as event}
                    <EventItem {event} compact={true} />
                  {/each}

                  {#if getEventsForDay(day.date, $filteredEvents).length > 3}
                    <div class="px-1 text-xs text-gray-500">
                      +{getEventsForDay(day.date, $filteredEvents).length - 3} more
                    </div>
                  {/if}
                </div>
              </div>
            {/each}
          </div>
        </div>
      {:else if $calendarView === "week"}
        <div class="calendar-week-view animate-fade-in h-full overflow-auto">
          <div
            class="sticky top-0 z-10 grid grid-cols-8 border-b border-gray-200 bg-white"
          >
            <div
              class="border-r border-gray-200 py-2 text-center text-sm font-medium text-gray-500"
            >
              Time
            </div>

            {#each weekDays as day}
              <div
                class={`border-r border-gray-200 py-2 text-center ${isTodayIntl(day, getLocalTimeZone()) ? "bg-primary-50" : ""}`}
              >
                <div class="text-sm font-medium text-gray-500">
                  {weekdayFormatter.format(day.toDate(getLocalTimeZone()))}
                </div>
                <div
                  class={`text-base font-bold ${isTodayIntl(day, getLocalTimeZone()) ? "text-primary-600" : ""}`}
                >
                  {dayFormatter.format(day.toDate(getLocalTimeZone()))}
                </div>
              </div>
            {/each}
          </div>

          <div class="relative grid grid-cols-8">
            {#each hours as hour, i}
              <div
                class="h-[60px] border-r border-b border-gray-200 pr-2 text-right text-xs text-gray-500"
              >
                {hour}
              </div>

              {#each weekDays as day}
                <div
                  class="relative h-[60px] border-r border-b border-gray-200"
                >
                  {#if i === 0}
                    <div class="absolute inset-0">
                      {#each getEventsForDate(day) as event}
                        {#if !event.allDay}
                          <div
                            class="absolute right-0 left-0 mx-1 overflow-hidden rounded"
                            style={getEventStyle(event)}
                          >
                            <EventItem {event} />
                          </div>
                        {/if}
                      {/each}
                    </div>
                  {/if}
                </div>
              {/each}
            {/each}
          </div>
        </div>
      {:else if $calendarView === "day"}
        <div class="calendar-day-view animate-fade-in h-full overflow-auto">
          <div
            class="sticky top-0 z-10 border-b border-gray-200 bg-white px-4 py-3"
          >
            <h2
              class={`text-xl font-bold ${isTodayIntl($currentDate, getLocalTimeZone()) ? "text-primary-600" : ""}`}
            >
              {headerDateFormatter.format(
                $currentDate.toDate(getLocalTimeZone()),
              )}
            </h2>

            {#if allDayEvents.length > 0}
              <div class="mt-2 space-y-1">
                <h3 class="text-sm font-medium text-gray-500">ALL DAY</h3>
                {#each allDayEvents as event}
                  <EventItem {event} />
                {/each}
              </div>
            {/if}
          </div>

          <div class="relative grid grid-cols-[80px_1fr]">
            {#each hours as hour}
              <div
                class="h-[60px] border-b border-gray-200 p-1 pr-2 text-right text-xs text-gray-500"
              >
                {hour}
              </div>
              <div class="relative h-[60px] border-b border-gray-200">
                <!-- Current time indicator would go here -->
              </div>
            {/each}

            <!-- Timed events -->
            <div
              class="pointer-events-none absolute top-0 right-0 bottom-0 left-[80px]"
            >
              {#each timedEvents as event}
                <div
                  class="pointer-events-auto absolute overflow-hidden rounded"
                  style={getEventStyle(event)}
                >
                  <EventItem {event} />
                </div>
              {/each}
            </div>
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>
