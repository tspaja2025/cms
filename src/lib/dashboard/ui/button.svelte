<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		href,
		type = 'button',
		tag = 'button',
		disabled,
		class: className = '',
		...restProps
	}: {
		children: Snippet;
		href?: string;
		type?: 'button' | 'submit' | 'reset' | null | undefined;
		tag?: string;
		disabled?: boolean;
		class?: string;
	} = $props();
</script>

{#if href}
	<a
		role="button"
		class="relative flex items-center justify-center px-4 py-2 transition-colors duration-200 hover:bg-neutral-100 {className}"
		{href}
		{...restProps}
	>
		{@render children()}
	</a>
{:else if tag === 'button'}
	<button
		{type}
		class="relative flex items-center justify-center px-4 py-2 transition-colors duration-200 hover:bg-neutral-100 disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:opacity-50 {className}"
		{disabled}
		{...restProps}
	>
		{@render children()}
	</button>
{:else}
	<svelte:element this={tag} {...restProps}>
		{@render children()}
	</svelte:element>
{/if}
