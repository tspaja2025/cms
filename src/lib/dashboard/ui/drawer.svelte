<script lang="ts">
	import { slide } from 'svelte/transition';

	let {
		children,
		open = $bindable(),
		params = { axis: 'x', duration: 200 },
		transition = slide
	} = $props();
</script>

{#if open}
	<div class="h-screen w-72" transition:transition={params}>
		{@render children()}
	</div>
{/if}
