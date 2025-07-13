<script lang="ts">
	import * as Collapsible from '$lib/components/ui/collapsible';
	import * as Sidebar from '$lib/components/ui/sidebar';
	import { Button } from '$lib/components/ui/button';
	import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
	import { navigation } from '$lib/navigation';
</script>

<Sidebar.Root>
	<Sidebar.Header class="flex h-16 items-center justify-center">
		<h1 class="text-2xl font-bold">CMS</h1>
	</Sidebar.Header>
	<Sidebar.Content class="gap-0">
		{#each navigation as item, index (index)}
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
																				<a href={grandChildItem.href} {...props}
																					>{grandChildItem.name}</a
																				>
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
</Sidebar.Root>
