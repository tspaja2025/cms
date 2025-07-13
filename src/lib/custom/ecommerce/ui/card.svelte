<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	let {
		children,
		title = '',
		subtitle = '',
		icon = '',
		fullWidth = false,
		noPadding = false,
		hasAction = false,
		actionText = 'View all',
		actionLink = '#'
	} = $props();
</script>

<Card.Root>
	<Card.Header>
		{#if icon}
			<div class="mr-3 rounded-lg p-2">
				<svg
					class="h-5 w-5"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={icon}></path>
				</svg>
			</div>
		{/if}
		{#if title}
			<Card.Title>{title}</Card.Title>
		{/if}
		{#if subtitle}
			<Card.Description>{subtitle}</Card.Description>
		{/if}
		{#if hasAction}
			<a href={actionLink} class="hover:text-primary-800 text-sm font-medium transition-colors">
				{actionText}
			</a>
		{/if}
	</Card.Header>
	<Card.Content>
		{@render children?.()}
	</Card.Content>
</Card.Root>
