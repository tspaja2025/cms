<script lang="ts">
	import { page } from '$app/state';
	import type { ButtonProps } from '$lib/dashboard/ui/button/types';

	let {
		children,
		href,
		type = 'button',
		tag = 'button',
		icon,
		disabled,
		class: className = '',
		onclick,
		...restProps
	}: ButtonProps = $props();
</script>

{#if href}
	<a
		role="button"
		class="relative flex items-center justify-center py-2 transition-colors duration-200 hover:bg-neutral-100 {className} {icon
			? 'rounded-full !px-2'
			: 'rounded px-4'}"
		class:bg-neutral-100={page.url.pathname === href}
		{href}
		{...restProps}
	>
		{@render children()}
	</a>
{:else if tag === 'button'}
	<button
		{type}
		class="relative flex items-center justify-center rounded px-4 py-2 transition-colors duration-200 hover:bg-neutral-100 disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:opacity-50 {className} {icon
			? 'rounded-full !px-2'
			: 'rounded px-4'}"
		{disabled}
		{onclick}
		{...restProps}
	>
		{@render children()}
	</button>
{:else}
	<svelte:element this={tag} {...restProps}>
		{@render children()}
	</svelte:element>
{/if}
