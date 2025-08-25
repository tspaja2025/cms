<script>
	import { Button } from '$lib/components/ui/button';
	import { UseAutoScroll } from '$lib/hooks/use-auto-scroll.svelte';
	import { cn } from '$lib/utils';
	import { ArrowDownIcon } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';

    let { ref = $bindable(null), children, class: className, ...rest } = $props();

    let canScrollSmooth = $state(false);
    const autoScroll = new UseAutoScroll();

    onMount(() => {
        canScrollSmooth = true;
    })
</script>

<div class="relative">
	<div
		{...rest}
		bind:this={ref}
		bind:this={autoScroll.ref}
		class={cn('no-scrollbar flex h-full w-full flex-col gap-4 overflow-y-auto p-4', className, {
			'scroll-smooth': canScrollSmooth
		})}
	>
		{@render children?.()}
	</div>
	{#if !autoScroll.isAtBottom}
		<div
			in:scale={{ start: 0.85, duration: 100, delay: 250 }}
			out:scale={{ start: 0.85, duration: 100 }}
		>
			<Button
				variant="outline"
				size="icon"
				class="absolute bottom-2 left-1/2 inline-flex -translate-x-1/2 transform rounded-full shadow-md"
				onclick={() => autoScroll.scrollToBottom()}
			>
				<ArrowDownIcon />
			</Button>
		</div>
	{/if}
</div>
