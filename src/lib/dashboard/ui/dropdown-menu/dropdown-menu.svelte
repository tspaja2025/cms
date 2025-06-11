<script lang="ts">
	import Button from '$lib/dashboard/ui/button/button.svelte';
	import { EllipsisVerticalIcon } from '@lucide/svelte';
	import type { Snippet } from 'svelte';
	import { fly, type FlyParams, type TransitionConfig } from 'svelte/transition';

	type TransitionFunc = (node: HTMLElement, params: FlyParams) => TransitionConfig;

	let {
		children,
		title,
		icon,
		open = $bindable(),
		params = {},
		transition = fly
	}: {
		children: Snippet;
		title?: string;
		icon?: boolean;
		open?: boolean;
		params?: FlyParams;
		transition?: TransitionFunc;
	} = $props();
</script>

<div class="relative">
	<Button icon onclick={() => (open = !open)}>
		{#if title}
			{title}
		{:else if icon}
			<EllipsisVerticalIcon class="h-5 w-5" />
		{/if}
	</Button>
	{#if open}
		<div
			class="absolute right-0 z-50 flex min-w-max flex-col overflow-hidden rounded-md bg-white shadow"
			transition:transition={params}
		>
			{@render children()}
		</div>
	{/if}
</div>
