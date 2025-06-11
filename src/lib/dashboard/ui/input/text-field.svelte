<script lang="ts">
	import type { TextFieldProps } from '$lib/dashboard/ui/input/types';

	let { label, type, name, autocomplete, placeholder, required }: TextFieldProps = $props();
</script>

<div>
	<label for="email" class="block text-sm font-medium text-gray-700">{label} </label>
	<div class="mt-1">
		<input
			{type}
			id={name}
			{name}
			{autocomplete}
			class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10"
			{placeholder}
			{required}
		/>
	</div>
</div>
