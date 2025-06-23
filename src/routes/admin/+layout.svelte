<script lang="ts">
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import * as Collapsible from '$lib/components/ui/collapsible';
	import * as Sidebar from '$lib/components/ui/sidebar';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import SearchIcon from '@lucide/svelte/icons/search'
	import LanguagesIcon from '@lucide/svelte/icons/languages'
	import SunIcon from '@lucide/svelte/icons/sun'
	import MoonIcon from '@lucide/svelte/icons/moon'
	import BellIcon from '@lucide/svelte/icons/bell'
	import UserIcon from '@lucide/svelte/icons/user'
	import ChevronRightIcon  from '@lucide/svelte/icons/chevron-right'
	import { toggleMode } from 'mode-watcher';
	import { navigation } from '$lib/navigation';

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
        <Sidebar.Group class="!py-0">
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
                  {#if childItem.parent}
                    <!-- Nested collapsible for third level -->
                    <Collapsible.Root title={childItem.parent} class="group/collapsible">
                      <Sidebar.Group class="p-0">
                        <Sidebar.GroupLabel
                          class="group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm"
                        >
                          {#snippet child({ props })}
                            <Collapsible.Trigger {...props}>
                              {childItem.parent}
                              <ChevronRightIcon
                                class="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90"
                              />
                            </Collapsible.Trigger>
                          {/snippet}
                        </Sidebar.GroupLabel>
                        <Collapsible.Content>
                          <Sidebar.GroupContent>
                            <Sidebar.Menu>
                              {#each childItem.children as grandChildItem, grandChildItemIndex (grandChildItemIndex)}
                                <Sidebar.MenuItem>
                                  <Sidebar.MenuButton isActive={grandChildItem.isActive}>
                                    {#snippet child({ props })}
                                      <a href={grandChildItem.href} {...props}>{grandChildItem.name}</a>
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
                    <Sidebar.MenuItem>
                      <Sidebar.MenuButton isActive={childItem.isActive}>
                        {#snippet child({ props })}
                          <a href={childItem.href} {...props}>{childItem.name}</a>
                        {/snippet}
                      </Sidebar.MenuButton>
                    </Sidebar.MenuItem>
                  {/if}
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
		<nav class="flex h-16 w-full items-center gap-2 px-4 border-b border-(--sidebar-border) bg-(--sidebar)">
			<Sidebar.Trigger class="!px-5 {buttonVariants({ variant: 'outline' })}" />
			<Button variant="outline" aria-labelledby="search">
				<SearchIcon class="h-5 w-5" />
			</Button>
			<div class="flex-1"></div>
			<Button variant="outline"  aria-labelledby="language">
				<LanguagesIcon class="h-5 w-5" />
			</Button>
			<Button variant="outline" onclick={toggleMode}  aria-labelledby="darkMode">
				<SunIcon class="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
				<MoonIcon class="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
				<span class="sr-only">Toggle theme</span>
			</Button>
			<Button variant="outline" aria-labelledby="notifications">
				<BellIcon class="h-5 w-5" />
			</Button>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger class={buttonVariants({ variant: 'outline' })}>
					<UserIcon class="h-5 w-5" />
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<DropdownMenu.Item>Profile</DropdownMenu.Item>
					<DropdownMenu.Item>Settings</DropdownMenu.Item>
          <a href="/">
            <DropdownMenu.Item>
             	Sign Out
            </DropdownMenu.Item>
          </a>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</nav>
		<div class="h-[calc(100vh-64px)] p-4">
			{@render children()}
		</div>
	</div>
</Sidebar.Provider>
