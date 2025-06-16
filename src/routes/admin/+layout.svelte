<script lang="ts">
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import * as Collapsible from '$lib/components/ui/collapsible';
	import * as Sidebar from '$lib/components/ui/sidebar';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import {
		SearchIcon,
		LanguagesIcon,
		SunIcon,
		BellIcon,
		UserIcon,
		ChevronRightIcon
	} from '@lucide/svelte';
	import { navigation } from '$lib/navigation';
	import DropdownMenuItem from '$lib/components/ui/dropdown-menu/dropdown-menu-item.svelte';

	const { children } = $props();
</script>

<Sidebar.Provider>
	<Sidebar.Root>
		<Sidebar.Header class="flex h-16 items-center justify-center">
			<h1 class="text-2xl font-bold">CMS</h1>
		</Sidebar.Header>
		<Sidebar.Content class="gap-0">
			{#each navigation as item, navIndex (navIndex)}
				{#if item.header}
					<h4 class="mx-4 my-4 text-sm text-neutral-500">{item.header}</h4>
				{:else if item.parent}
					<Collapsible.Root title={item.parent} class="group/collapsible">
						<Sidebar.Group>
							<Sidebar.GroupLabel
								class="group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm"
							>
								{#snippet child({ props })}
									<Collapsible.Trigger {...props}>
										{item.parent}
										<ChevronRightIcon
											class="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90"
										/>
									</Collapsible.Trigger>
								{/snippet}
							</Sidebar.GroupLabel>
							<Collapsible.Content>
								<Sidebar.GroupContent>
									<Sidebar.Menu>
										{#each item.children as childItem, childItemIndex (childItemIndex)}
											<Sidebar.MenuItem>
												<Sidebar.MenuButton isActive={childItem.isActive}>
													{#snippet child({ props })}
														<a href={childItem.href} {...props}>{childItem.name}</a>
													{/snippet}
												</Sidebar.MenuButton>
											</Sidebar.MenuItem>
										{/each}
									</Sidebar.Menu>
								</Sidebar.GroupContent>
							</Collapsible.Content>
						</Sidebar.Group>
					</Collapsible.Root>
				{:else}
					<Button class="justify-start" variant="ghost" href={item.href}>{item.name}</Button>
				{/if}
			{/each}
		</Sidebar.Content>
		<Sidebar.Rail />
		<Sidebar.Footer />
	</Sidebar.Root>
	<div class="flex-1">
		<nav class="flex h-16 w-full items-center gap-2 px-4">
			<Sidebar.Trigger class="!px-5 {buttonVariants({ variant: 'outline' })}" />
			<Button variant="outline">
				<SearchIcon class="h-5 w-5" />
			</Button>
			<div class="flex-1"></div>
			<Button variant="outline">
				<LanguagesIcon class="h-5 w-5" />
			</Button>
			<Button variant="outline">
				<SunIcon class="h-5 w-5" />
			</Button>
			<Button variant="outline">
				<BellIcon class="h-5 w-5" />
			</Button>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger class={buttonVariants({ variant: 'outline'})}>
					<UserIcon class="h-5 w-5" />
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<DropdownMenu.Item>Profile</DropdownMenu.Item>
					<DropdownMenu.Item>Settings</DropdownMenu.Item>
					<DropdownMenu.Item>Sign Out</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</nav>
		<div class="h-[calc(100vh-64px)] bg-neutral-100 p-4">
			{@render children()}
		</div>
	</div>
</Sidebar.Provider>
