<script lang="ts">
	const { children } = $props();
</script>

<div
  class="flex min-h-screen flex-col items-center justify-center"
>
{@render children()}
</div>
