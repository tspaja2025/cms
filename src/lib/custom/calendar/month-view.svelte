<script lang="ts">
  import EventItem from "$lib/custom/calendar/event-item.svelte";

  export let days: Array<{
    date: CalendarDate,
    dayNumber: number,
    isToday: boolean,
    isCurrentMonth: boolean
  }>;
  export let dayNames: string[];
  export let getCellClass: (day: any) => string;
  export let getEventsForDay: (day: CalendarDate, events: any[]) => any[];
  export let events: any[];
</script>

<div class="h-full overflow-auto">
  <div class="sticky top-0 z-10 grid grid-cols-7 border-b border-neutral-500">
    {#each dayNames as day}
      <div class="py-2 text-center text-sm font-medium text-gray-500">
        {day}
      </div>
    {/each}
  </div>

  <div class="grid grid-cols-7">
    {#each days as day}
      <div class={getCellClass(day)}>
        <div class="flex items-start justify-between">
          <div
            class={`flex h-6 w-6 items-center justify-center rounded-full text-sm font-medium
              ${day.isToday ? "bg-neutral-500 text-white" : ""}`}
          >
            {day.dayNumber}
          </div>

          {#if day.isCurrentMonth}
            <!-- More events indicator could go here -->
          {/if}
        </div>

        <div class="mt-1 max-h-[80px] space-y-1 overflow-hidden">
          {#each getEventsForDay(day.date, events).slice(0, 3) as event}
            <EventItem {event} compact={true} />
          {/each}

          {#if getEventsForDay(day.date, events).length > 3}
            <div class="px-1 text-xs text-gray-500">
              +{getEventsForDay(day.date, events).length - 3} more
            </div>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</div>