<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index';
	import type { ComponentProps } from 'svelte';
	import NavApps from '$lib/admin/nav-apps.svelte';
	import { navigation } from '$lib/admin/navigation';
	import NavPages from '$lib/admin/nav-pages.svelte';
	import NavOther from '$lib/admin/nav-other.svelte';
	import { resolve } from '$app/paths';

	let {
		ref = $bindable(null),
		collapsible = 'icon',
		...restProps
	}: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root {collapsible} {...restProps}>
	<Sidebar.Header
		class="flex h-16 shrink-0 items-center justify-center border-b text-2xl font-bold transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 group-has-data-[collapsible=icon]/sidebar-wrapper:text-base"
	>
		<a href={resolve('/admin')}>CMS</a>
	</Sidebar.Header>
	<Sidebar.Content>
		<NavApps items={navigation.apps} />
		<NavPages items={navigation.pages} />
		<NavOther items={navigation.other} />
	</Sidebar.Content>
	<Sidebar.Rail />
</Sidebar.Root>
