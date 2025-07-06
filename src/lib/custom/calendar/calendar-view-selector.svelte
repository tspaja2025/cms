<script lang="ts">
  import { Button } from "$lib/components/ui/button";

  export let view: string;
  export let views: string[];

  const viewLabels = {
    month: "Month",
    week: "Week",
    day: "Day",
  };
</script>

<div class="flex items-center gap-1 rounded-lg bg-neutral-700 p-1 md:flex">
  {#each views as v}
    <Button
      onclick={() => (view = v)}
      variant={view === v ? "default" : "ghost"}
      class={view === v ? "shadow-sm" : "text-gray-600"}
    >
      {viewLabels[v] || v}
    </Button>
  {/each}
</div>
