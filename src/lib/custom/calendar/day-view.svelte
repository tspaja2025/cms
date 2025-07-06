<script lang="ts">
  import EventItem from "$lib/custom/calendar/event-item.svelte";
  import {
    CalendarDate,
    DateFormatter,
    isToday as isTodayIntl,
  } from "@internationalized/date";
  import { getLocalTimeZone } from "@internationalized/date";

  export let currentDate: CalendarDate;
  export let hours: string[];
  export let headerDateFormatter: DateFormatter;
  export let allDayEvents: any[];
  export let timedEvents: any[];
  export let getEventStyle: (event: any) => string;
</script>

<div class="calendar-day-view animate-fade-in h-full overflow-auto">
  <div class="sticky top-0 z-10 border-b border-neutral-500 px-4 py-3">
    <h2
      class={`text-xl font-bold ${
        isTodayIntl(currentDate, getLocalTimeZone()) ? "text-primary-600" : ""
      }`}
    >
      {headerDateFormatter.format(currentDate.toDate(getLocalTimeZone()))}
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
        class="h-[60px] border-b border-neutral-500 p-1 pr-2 text-right text-xs text-gray-500"
      >
        {hour}
      </div>
      <div class="relative h-[60px] border-b border-neutral-500">
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
