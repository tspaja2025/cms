<script lang="ts">
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

<div class="card animate-slide-up h-full {fullWidth ? 'w-full' : ''} {noPadding ? 'p-0' : ''}">
	{#if title}
		<div class="mb-4 flex items-center justify-between {noPadding ? 'px-6 pt-6' : ''}">
			<div class="flex items-center">
				{#if icon}
					<div class="bg-primary-50 mr-3 rounded-lg p-2">
						<svg
							class="text-primary-500 h-5 w-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={icon}></path>
						</svg>
					</div>
				{/if}
				<div>
					<h2 class="text-lg font-medium text-gray-900">{title}</h2>
					{#if subtitle}
						<p class="text-sm text-gray-500">{subtitle}</p>
					{/if}
				</div>
			</div>

			{#if hasAction}
				<a
					href={actionLink}
					class="text-primary-600 dark:text-primary-400 hover:text-primary-800 text-sm font-medium transition-colors"
				>
					{actionText}
				</a>
			{/if}
		</div>
	{/if}

	<div class={noPadding && title ? 'px-6 pb-6' : ''}>
		{@render children()}
	</div>
</div>
