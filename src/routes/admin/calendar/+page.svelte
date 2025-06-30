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
  
  // Components
  import EventItem from "$lib/custom/calendar/event-item.svelte";
  import CalendarHeader from "$lib/custom/calendar/calendar-header.svelte";
  import CalendarViewSelector from "$lib/custom/calendar/calendar-view-selector.svelte";
  import EventFormDialog from "$lib/custom/calendar/event-form-dialog.svelte";
  import MiniCalendar from "$lib/custom/calendar/mini-calendar.svelte";
  import CategoryFilters from "$lib/custom/calendar/category-filters.svelte";
  import MonthView from "$lib/custom/calendar/month-view.svelte";
  import WeekView from "$lib/custom/calendar/week-view.svelte";
  import DayView from "$lib/custom/calendar/day-view.svelte";
  import * as Card from '$lib/components/ui/card';
  
  // Types
  type EventCategory = "work" | "personal" | "family" | "other";
  
  interface CalendarEvent {
    id: string;
    title: string;
    description?: string;
    start: CalendarDateTime;
    end: CalendarDateTime;
    allDay: boolean;
    category: EventCategory;
  }
  
  // Constants
  const categories = [
    { id: "work", name: "Work", color: "bg-blue-500" },
    { id: "personal", name: "Personal", color: "bg-green-500" },
    { id: "family", name: "Family", color: "bg-purple-500" },
    { id: "other", name: "Other", color: "bg-neutral-500" },
  ];
  
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const hours = getHourLabels();
  
  // Formatters
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
  
  // Initialize calendar
  onMount(() => {
    if (!$currentDate) {
      currentDate.set(today(getLocalTimeZone()));
    }
  });
  
  // Derived values
  $: headerDate = formatHeaderDate($currentDate);
  $: weekStart = startOfWeek($currentDate, "en-US", 0);
  $: weekEnd = endOfWeek($currentDate, "en-US", 0);
  $: weekDays = generateDateRange(weekStart, weekEnd);
  $: monthStart = startOfMonth($currentDate);
  $: monthEnd = endOfMonth($currentDate);
  $: calendarStart = startOfWeek(monthStart, "en-US", 0);
  $: calendarEnd = endOfWeek(monthEnd, "en-US", 0);
  $: days = generateDateRange(calendarStart, calendarEnd);

  // day-view
  let dayEvents = [];
  let allDayEvents = [];
  let timedEvents = [];
  
  // Day view events
  $: {
    dayEvents = getEventsForDate($currentDate);
    allDayEvents = dayEvents.filter((event) => event.allDay);
    timedEvents = dayEvents.filter((event) => !event.allDay);
  }
  
  // Helper functions
  function generateDateRange(start: CalendarDate, end: CalendarDate): CalendarDate[] {
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
  
  function getEventsForDate(date: CalendarDate | CalendarDateTime) {
    return $filteredEvents.filter((event) => {
      const eventDate = event.start instanceof CalendarDate 
        ? toCalendarDateTime(event.start) 
        : event.start;
      const compareDate = toCalendarDateTime(date);
      return isSameDay(eventDate, compareDate);
    });
  }
  
  function getEventStyle(event: CalendarEvent) {
    const startTime = getTimeValue(event.start);
    const endTime = getTimeValue(event.end);
    const duration = endTime - startTime;
    
    return `
      top: calc(${startTime * 60}px);
      height: calc(${duration * 60}px);
      ${$calendarView === "day" ? "left: 8px; right: 8px;" : ""}
    `;
  }
  
  function getCellClass(day: { date: CalendarDate, isToday: boolean, isCurrentMonth: boolean }) {
    return getDayClassNames(day.date, $currentDate);
  }
</script>

<Card.Root>
  <Card.Content class="flex">
    <!-- Sidebar -->
    <aside class="flex h-full w-64 flex-col border-r border-neutral-800 p-4">
      <EventFormDialog {categories} />
      
      <MiniCalendar 
        {days} 
        {dayNames} 
        {dayFormatter} 
        {monthYearFormatter} 
        {selectDay} 
        currentDate={$currentDate}
      />
      
      <CategoryFilters {categories} {toggleCategoryFilter} filters={$categoryFilters} />
    </aside>
    
    <!-- Main Content -->
    <main class="flex flex-1 flex-col">
      <CalendarHeader 
        {goToPreviousMonth} 
        {goToNextMonth} 
        {goToToday} 
        monthYear={$currentMonthYear} 
        {headerDate}
      />
      
      <CalendarViewSelector 
        bind:view={$calendarView} 
        views={["month", "week", "day"]}
      />
      
      <!-- Calendar Views -->
      {#if $calendarView === "month"}
        <MonthView 
          days={$monthDays} 
          {dayNames} 
          {getCellClass} 
          {getEventsForDay} 
          events={$filteredEvents}
        />
      {:else if $calendarView === "week"}
        <WeekView 
          {weekDays} 
          {hours} 
          {weekdayFormatter} 
          {dayFormatter} 
          {getEventsForDate} 
          {getEventStyle}
        />
      {:else if $calendarView === "day"}
        <DayView 
          currentDate={$currentDate} 
          {hours} 
          {headerDateFormatter} 
          {allDayEvents} 
          {timedEvents} 
          {getEventStyle}
        />
      {/if}
    </main>
  </Card.Content>
</Card.Root>