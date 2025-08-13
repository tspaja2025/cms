<script lang="ts">
	const { children } = $props();
</script>

<time class="mb-1 text-sm leading-none font-normal">{@render children?.()}</time>
