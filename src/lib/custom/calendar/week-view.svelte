<script lang="ts">
  import EventItem from "$lib/custom/calendar/event-item.svelte";
  import { CalendarDate, isToday as isTodayIntl } from "@internationalized/date";
  import { getLocalTimeZone } from "@internationalized/date";

  export let weekDays: CalendarDate[];
  export let hours: string[];
  export let weekdayFormatter: DateFormatter;
  export let dayFormatter: DateFormatter;
  export let getEventsForDate: (date: CalendarDate) => any[];
  export let getEventStyle: (event: any) => string;
</script>

<div class="calendar-week-view animate-fade-in h-full overflow-auto">
  <div class="sticky top-0 z-10 grid grid-cols-8 border-b border-neutral-500">
    <div class="border-r border-neutral-500 py-2 text-center text-sm font-medium text-gray-500">
      Time
    </div>

    {#each weekDays as day}
      <div class={`border-r border-neutral-500 py-2 text-center ${
        isTodayIntl(day, getLocalTimeZone()) ? "bg-neutral-500" : ""
      }`}>
        <div class="text-sm font-medium text-gray-500">
          {weekdayFormatter.format(day.toDate(getLocalTimeZone()))}
        </div>
        <div class={`text-base font-bold ${
          isTodayIntl(day, getLocalTimeZone()) ? "text-primary-600" : ""
        }`}>
          {dayFormatter.format(day.toDate(getLocalTimeZone()))}
        </div>
      </div>
    {/each}
  </div>

  <div class="relative grid grid-cols-8">
    {#each hours as hour, i}
      <div class="h-[60px] border-r border-b border-neutral-500 pr-2 text-right text-xs text-gray-500">
        {hour}
      </div>

      {#each weekDays as day}
        <div class="relative h-[60px] border-r border-b border-neutral-500">
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