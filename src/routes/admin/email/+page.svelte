<script>
	import * as Avatar from '$lib/components/ui/avatar/index';
	import { Badge } from '$lib/components/ui/badge/index';
	import { Button, buttonVariants } from '$lib/components/ui/button/index';
	import * as Card from '$lib/components/ui/card/index';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import { Input } from '$lib/components/ui/input/index';
	import { Label } from '$lib/components/ui/label/index';
	import * as Resizable from '$lib/components/ui/resizable/index';
	import { Separator } from '$lib/components/ui/separator/index';
	import { Switch } from '$lib/components/ui/switch/index';
	import { Textarea } from '$lib/components/ui/textarea/index';
	import ClockIcon from '@lucide/svelte/icons/clock';
	import ArchiveIcon from '@lucide/svelte/icons/archive';
	import ArchiveXIcon from '@lucide/svelte/icons/archive-x';
	import CircleAlertIcon from '@lucide/svelte/icons/circle-alert';
	import FileIcon from '@lucide/svelte/icons/file';
	import InboxIcon from '@lucide/svelte/icons/inbox';
	import MessagesSquareIcon from '@lucide/svelte/icons/messages-square';
	import SendIcon from '@lucide/svelte/icons/send';
	import ShoppingCartIcon from '@lucide/svelte/icons/shopping-cart';
	import TrashIcon from '@lucide/svelte/icons/trash';
	import UsersIcon from '@lucide/svelte/icons/users';
	import CornerUpLeftIcon from '@lucide/svelte/icons/corner-up-left';
	import CornerUpRightIcon from '@lucide/svelte/icons/corner-up-right';
	import EllipsisVerticalIcon from '@lucide/svelte/icons/ellipsis-vertical';
	import { emails } from '$lib/store';
</script>

<svelte:head>
	<title>CMS | Admin | Email</title>
	<meta name="description" content="CMS" />
</svelte:head>

<div class="mx-auto grid gap-4 md:max-w-full lg:max-w-7xl">
	<div class="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
		<Card.Root
			class="overflow-hidden bg-gradient-to-t from-primary/5 to-card p-0 shadow-xs dark:bg-card"
		>
			<Card.Content class="p-0">
				<Resizable.PaneGroup direction="horizontal" class="min-h-[600px]">
					<Resizable.Pane defaultSize={20} minSize={14} maxSize={20}>
						<div class="p-4">
							<Button class="w-full">Compose</Button>
						</div>
						<Separator />
						<div class="p-4">
							<Button variant="ghost" class="w-full justify-start">
								<InboxIcon /> Inbox
							</Button>
							<Button variant="ghost" class="w-full justify-start">
								<FileIcon /> Drafts
							</Button>
							<Button variant="ghost" class="w-full justify-start">
								<SendIcon /> Sent
							</Button>
							<Button variant="ghost" class="w-full justify-start">
								<ArchiveXIcon /> Junk
							</Button>
							<Button variant="ghost" class="w-full justify-start">
								<TrashIcon /> Trash
							</Button>
							<Button variant="ghost" class="w-full justify-start">
								<ArchiveIcon /> Archive
							</Button>
						</div>
						<Separator />
						<div class="p-4">
							<Button variant="ghost" class="w-full justify-start">
								<UsersIcon /> Social
							</Button>
							<Button variant="ghost" class="w-full justify-start">
								<CircleAlertIcon /> Updates
							</Button>
							<Button variant="ghost" class="w-full justify-start">
								<MessagesSquareIcon /> Forums
							</Button>
							<Button variant="ghost" class="w-full justify-start">
								<ShoppingCartIcon /> Shopping
							</Button>
							<Button variant="ghost" class="w-full justify-start">
								<ArchiveIcon /> Promotions
							</Button>
						</div>
					</Resizable.Pane>
					<Resizable.Handle withHandle />
					<Resizable.Pane defaultSize={25} minSize={14} maxSize={25}>
						<div class="flex h-17 items-center p-4 text-2xl font-medium">Inbox</div>
						<Separator />
						<div class="space-y-4 p-4">
							<Input id="search" type="search" placeholder="Search" />
							{#each emails as item, index (index)}
								<Card.Root
									class="gap-0 p-0 transition-colors {item.active
										? 'bg-accent'
										: 'hover:bg-accent'}"
								>
									<Card.Header class="px-2 py-2">
										<Card.Title>{item.title}</Card.Title>
										<Card.Description>{item.description}</Card.Description>
										<Card.Action class="text-xs">{item.action}</Card.Action>
									</Card.Header>
									<Card.Content class="px-2">{item.text}</Card.Content>
									<Card.Footer class="gap-2 px-2 py-2">
										{#each item.badges as itemBadge, index (index)}
											<Badge variant={itemBadge.variant}>{itemBadge.badge}</Badge>
										{/each}
									</Card.Footer>
								</Card.Root>
							{/each}
						</div>
					</Resizable.Pane>
					<Resizable.Handle withHandle />
					<Resizable.Pane>
						<div class="flex h-17 items-center gap-2 p-4">
							<Button variant="ghost" size="icon"><ArchiveIcon /></Button>
							<Button variant="ghost" size="icon"><ArchiveXIcon /></Button>
							<Button variant="ghost" size="icon"><TrashIcon /></Button>
							<Separator orientation="vertical" />
							<Button variant="ghost" size="icon"><ClockIcon /></Button>
							<div class="flex-1"></div>
							<Button variant="ghost" size="icon"><CornerUpLeftIcon /></Button>
							<Button variant="ghost" size="icon"><CornerUpRightIcon /></Button>
							<Separator orientation="vertical" />
							<DropdownMenu.Root>
								<DropdownMenu.Trigger class={buttonVariants({ variant: 'ghost', size: 'icon' })}>
									<EllipsisVerticalIcon />
								</DropdownMenu.Trigger>
								<DropdownMenu.Content>
									<DropdownMenu.Item>Mark as unread</DropdownMenu.Item>
									<DropdownMenu.Item>Star thread</DropdownMenu.Item>
									<DropdownMenu.Item>Add label</DropdownMenu.Item>
									<DropdownMenu.Item>Mute thread</DropdownMenu.Item>
								</DropdownMenu.Content>
							</DropdownMenu.Root>
						</div>
						<Separator />
						<div class="flex items-center gap-2 p-4">
							<Avatar.Root>
								<Avatar.Image alt="" src="" />
								<Avatar.Fallback>WS</Avatar.Fallback>
							</Avatar.Root>
							<div class="flex w-full flex-col">
								<div class="flex items-center justify-between">
									<h4 class="text-lg font-medium">William Smith</h4>
									<p class="text-xs">Oct 22, 2023, 9:00:00 AM</p>
								</div>
								<p class="text-xs">Meeting Tomorrow</p>
								<p class="text-xs">Reply-To: williamsmith@example.com</p>
							</div>
						</div>
						<Separator />
						<div class="h-[378px] p-4">
							Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the
							project details and have some ideas I'd like to share. It's crucial that we align on
							our next steps to ensure the project's success.<br /><br /> Please come prepared with
							any questions or insights you may have. Looking forward to our meeting!<br /><br /> Best
							regards, William
						</div>
						<Separator />
						<div class="flex flex-col space-y-4 p-4">
							<Textarea id="reply" placeholder="Reply William Smith..."></Textarea>
							<div class="flex justify-between">
								<div class="flex items-center gap-2">
									<Switch id="mute" />
									<Label for="mute">Mute this thread</Label>
								</div>
								<Button>Send</Button>
							</div>
						</div>
					</Resizable.Pane>
				</Resizable.PaneGroup>
			</Card.Content>
		</Card.Root>
	</div>
</div>
