<script lang="ts">
	import { ChevronDownIcon } from '@lucide/svelte';
	import type { Snippet } from 'svelte';
	import { slide, type SlideParams, type TransitionConfig } from 'svelte/transition';

	type TransitionFunc = (node: HTMLElement, params: SlideParams) => TransitionConfig;

	let {
		children,
		title = '',
		open = $bindable(),
		params = {},
		transition = slide
	}: {
		children: Snippet;
		title?: string;
		open?: boolean;
		params?: SlideParams;
		transition?: TransitionFunc;
	} = $props();
</script>

<div class="relative">
	<button
		type="button"
		class="relative flex w-full items-center justify-between rounded px-4 py-2 transition-colors duration-200 hover:bg-neutral-100 {open
			? 'bg-neutral-100'
			: ''}"
		onclick={() => (open = !open)}
	>
		{title}
		<ChevronDownIcon
			class={open
				? 'rotate-180 transition-transform duration-200'
				: 'transition-transform duration-200'}
		/>
	</button>
	{#if open}
		<div
			class="flex flex-col [&>a]:justify-start [&>button]:justify-start"
			transition:transition={params}
		>
			{@render children()}
		</div>
	{/if}
</div>
