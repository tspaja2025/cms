<script lang="ts">
	import { resolve } from '$app/paths';
	import * as Sidebar from '$lib/components/ui/sidebar/index';
	import { navigation } from '$lib/custom/navigation/navigation';
	import type { ComponentProps } from 'svelte';
	import Apps from '$lib/custom/navigation/apps.svelte';
	import Other from '$lib/custom/navigation/other.svelte';
	import Pages from '$lib/custom/navigation/pages.svelte';

	let {
		ref = $bindable(null),
		collapsible = 'icon',
		...restProps
	}: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root {collapsible} {...restProps}>
	<Sidebar.Header class="flex h-16 items-center justify-center border-b">
		<a href={resolve('/admin')}>
			<h1 class="text-2xl font-bold">CMS</h1>
		</a>
	</Sidebar.Header>
	<Sidebar.Content class="gap-0">
		<Apps items={navigation.apps} />
		<Pages items={navigation.pages} />
		<Other items={navigation.other} />
	</Sidebar.Content>
	<Sidebar.Rail />
</Sidebar.Root>
