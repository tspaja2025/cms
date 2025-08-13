<script>
	import { Checkbox } from '$lib/components/ui/checkbox/index';
	import { Label } from '$lib/components/ui/label/index';
	import { categories } from '$lib/store';
</script>

<h3 class="mb-3 text-sm font-medium text-gray-500">FILTERS</h3>
<div class="flex flex-col gap-2">
	{#each categories as filter, index (index)}
		<div class="inline-flex items-center gap-2">
			<Checkbox id={filter.value} />
			<Label for={filter.value}>
				<span class="inline-block h-3 w-3 rounded-full {filter.color}"></span>
				{filter.label}
			</Label>
		</div>
	{/each}
</div>
