<script lang="ts">
	let {
		value,
		label,
		icon,
		trend = 0,
		trendLabel = trend > 0 ? 'increase' : 'decrease',
		trendPeriod = 'from last month'
	} = $props();
</script>

<div class="flex items-start">
	<div class="bg-primary-50 mr-4 rounded-lg p-3">
		<svg
			class="text-primary-500 h-6 w-6"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={icon}></path>
		</svg>
	</div>

	<div>
		<p class="text-sm font-medium text-slate-500">{label}</p>
		<p class="mt-1 text-2xl font-bold">{value}</p>

		{#if trend !== 0}
			<div class="mt-1 flex items-center">
				<span class="flex items-center text-sm {trend > 0 ? 'text-success-600' : 'text-error-600'}">
					<svg
						class="mr-1 h-4 w-4"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d={trend > 0 ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
						></path>
					</svg>
					{Math.abs(trend)}% {trendLabel}
				</span>
				<span class="ml-1 text-xs text-gray-500">{trendPeriod}</span>
			</div>
		{/if}
	</div>
</div>
