<script lang="ts">
  import { Checkbox } from "$lib/components/ui/checkbox";
  import { Label } from "$lib/components/ui/label";

  export let categories: Array<{ id: string; name: string; color: string }>;
  export let toggleCategoryFilter: (id: string) => void;
  export let filters: string[];
</script>

<div>
  <h3 class="mb-3 text-sm font-medium text-gray-500">FILTERS</h3>
  <div class="flex flex-col gap-2">
    {#each categories as category}
      <div class="inline-flex items-center gap-2">
        <Checkbox
          id={category.id}
          onCheckedChange={() => toggleCategoryFilter(category.id)}
          checked={filters.includes(category.id)}
        />
        <Label for={category.id}>
          <span class="{category.color} inline-block h-3 w-3 rounded-full"
          ></span>
          {category.name}
        </Label>
      </div>
    {/each}
  </div>
</div>
