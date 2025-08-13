<script lang="ts">
	const { children, color = 'bg-sidebar' } = $props();
</script>

<li class="ms-4 mb-4">
	<div class="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border {color}"></div>
	{@render children?.()}
</li>
