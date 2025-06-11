<script lang="ts">
	import type { CheckboxProps } from '$lib/dashboard/ui/checkbox/types';

	let { label, name }: CheckboxProps = $props();
</script>

<!-- <div class="flex items-center gap-2">
	<input type="checkbox" id={label} name={label} />
	<label for={label}>{label}</label>
</div> -->

<div class="flex items-center">
	<input type="checkbox" id={name} {name} class="h-4 w-4 rounded border-gray-300" />
	<label for={name} class="ml-2 block text-sm text-gray-900">
		{label}
	</label>
</div>
