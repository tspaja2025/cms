<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		title,
		subtitle,
		actions
	}: {
		children: Snippet;
		title?: string;
		subtitle?: string;
		actions?: Snippet;
	} = $props();
</script>

<div class="flex flex-col rounded bg-white">
	<div class="flex items-center justify-between px-4 py-2">
		<div class="flex flex-col">
			<h3>{title}</h3>
			{#if subtitle}
				<p class="text-sm">{subtitle}</p>
			{/if}
		</div>
		{#if actions}
			{@render actions?.()}
		{/if}
	</div>
	{#if children}
		<div class="p-4">
			{@render children?.()}
		</div>
	{/if}
</div>
