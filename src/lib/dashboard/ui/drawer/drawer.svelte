<script lang="ts">
	import type { Snippet } from 'svelte';
	import { slide, type SlideParams, type TransitionConfig } from 'svelte/transition';

	type TransitionFunc = (node: HTMLElement, params: SlideParams) => TransitionConfig;

	let {
		children,
		open = $bindable(),
		params = { axis: 'x', duration: 200 },
		transition = slide
	}: {
		children: Snippet;
		open?: boolean;
		params?: SlideParams;
		transition?: TransitionFunc;
	} = $props();
</script>

{#if open}
	<div class="h-screen w-72" transition:transition={params}>
		{@render children()}
	</div>
{/if}
