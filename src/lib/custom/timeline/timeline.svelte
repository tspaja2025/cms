<script lang="ts">
	const { children } = $props();
</script>

<ol class="relative border-s">
	{@render children?.()}
</ol>
