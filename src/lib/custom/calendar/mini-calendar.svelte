<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import {
    CalendarDate,
    isToday as isTodayIntl,
    isSameDay,
    DateFormatter,
  } from "@internationalized/date";
  import { getLocalTimeZone } from "@internationalized/date";

  export let days: CalendarDate[];
  export let dayNames: string[];
  export let dayFormatter: DateFormatter;
  export let monthYearFormatter: DateFormatter;
  export let selectDay: (day: CalendarDate) => void;
  export let currentDate: CalendarDate;
</script>

<div class="mb-6">
  <h3 class="mb-3 text-sm font-medium text-gray-500">MINI CALENDAR</h3>
  <div class="mini-calendar">
    <div class="mb-2 text-sm font-medium">
      {monthYearFormatter.format(currentDate.toDate(getLocalTimeZone()))}
    </div>

    <div class="grid grid-cols-7 gap-1 text-xs">
      {#each dayNames as day}
        <div class="py-1 text-center font-medium text-gray-500">{day}</div>
      {/each}

      {#each days as day}
        <Button
          class="rounded-full {isTodayIntl(day, getLocalTimeZone())
            ? ' text-white'
            : isSameDay(day, currentDate)
              ? ' text-primary-800'
              : day.month === currentDate.month
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
