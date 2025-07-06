<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import ChevronLeftIcon from "@lucide/svelte/icons/chevron-left";
  import ChevronRightIcon from "@lucide/svelte/icons/chevron-right";
  import CalendarViewSelector from "$lib/custom/calendar/calendar-view-selector.svelte";
  import { calendarView } from "$lib/custom/calendar/store/calendar";

  export let goToPreviousMonth: () => void;
  export let goToNextMonth: () => void;
  export let goToToday: () => void;
  export let monthYear: string;
  export let headerDate: string;
</script>

<div class="border-b border-neutral-500 px-6 py-4">
  <div class="flex items-center justify-between">
    <div class="flex flex-col">
      <h1 class="text-2xl font-bold">{monthYear}</h1>
      <div class="hidden text-sm text-gray-500 md:block">{headerDate}</div>
    </div>

    <div class="flex items-center gap-4">
      <div class="flex items-center gap-1">
        <Button
          variant="ghost"
          onclick={goToPreviousMonth}
          aria-label="Previous month"
        >
          <ChevronLeftIcon class="h-5 w-5" />
        </Button>

        <Button variant="ghost" onclick={goToToday}>Today</Button>

        <Button variant="ghost" onclick={goToNextMonth} aria-label="Next month">
          <ChevronRightIcon class="h-5 w-5" />
        </Button>
      </div>

      <div class="hidden h-6 border-l border-gray-300 md:block"></div>
      <CalendarViewSelector
        bind:view={$calendarView}
        views={["month", "week", "day"]}
      />
    </div>
  </div>
</div>
