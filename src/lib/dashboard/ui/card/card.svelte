<script lang="ts">
	import type { CardProps } from '$lib/dashboard/ui/card/types';

	let { children, title, subtitle, actions }: CardProps = $props();
</script>

<div class="flex flex-col rounded-md bg-white shadow">
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
