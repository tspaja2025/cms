<script lang="ts">
  import { buttonVariants } from "$lib/components/ui/button";
  import ChevronLeftIcon from "@lucide/svelte/icons/chevron-left";
  import ChevronRightIcon from "@lucide/svelte/icons/chevron-right";

  export let goToPreviousMonth: () => void;
  export let goToNextMonth: () => void;
  export let goToToday: () => void;
  export let monthYear: string;
  export let headerDate: string;
</script>

<div class="border-b border-neutral-500 px-6 py-4">
  <div class="flex items-center justify-between">
    <div class="flex items-center gap-2">
      <h1 class="text-2xl font-bold">{monthYear}</h1>
      <div class="hidden text-sm text-gray-500 md:block">{headerDate}</div>
    </div>

    <div class="flex items-center gap-4">
      <div class="flex items-center gap-1">
        <button
          on:click={goToPreviousMonth}
          class={buttonVariants({ variant: "ghost" })}
          aria-label="Previous month"
        >
          <ChevronLeftIcon class="h-5 w-5" />
        </button>

        <button on:click={goToToday} class={buttonVariants({ variant: "ghost" })}>
          Today
        </button>

        <button
          on:click={goToNextMonth}
          class={buttonVariants({ variant: "ghost" })}
          aria-label="Next month"
        >
          <ChevronRightIcon class="h-5 w-5" />
        </button>
      </div>

      <div class="hidden h-6 border-l border-gray-300 md:block"></div>
    </div>
  </div>
</div>