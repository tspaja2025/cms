<script lang="ts">
	import ChatBubbleAvatar from '$lib/apps/chat/chat-bubble-avatar.svelte';
	import ChatBubbleMessage from '$lib/apps/chat/chat-bubble-message.svelte';
	import ChatBubble from '$lib/apps/chat/chat-bubble.svelte';
	import ChatList from '$lib/apps/chat/chat-list.svelte';
	import * as Avatar from '$lib/components/ui/avatar/index';
	import { Badge } from '$lib/components/ui/badge/index';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card/index';
	import { Input } from '$lib/components/ui/input/index';
	import { InfoIcon, PhoneIcon, SendIcon, VideoIcon } from '@lucide/svelte';
	import MessagesSquareIcon from '@lucide/svelte/icons/messages-square';
	import { chatFriend, chatMessages, chatUser, chatUsers } from '$lib/store';
	import { formatShortTime } from '$lib/utils';

	function initials(name: string) {
		name
			.split(' ')
			.map((n) => n[0])
			.join('');
	}

	let message = $state('');
	const messages = $state(chatMessages);
	let open = $state(false);
</script>

<svelte:head>
	<title>CMS | Admin | Chat</title>
	<meta name="description" content="CMS" />
</svelte:head>

<div class="mx-auto grid gap-4 md:max-w-full lg:max-w-7xl">
	<div class="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
		<div class="w-full border border-border">
			<div class="flex place-items-center justify-between">
				<div class="flex place-items-center gap-2">
					<Avatar.Root>
						<Avatar.Image src={chatFriend.img} alt={chatFriend.username} />
						<Avatar.Fallback>
							{initials(chatFriend.name)}
						</Avatar.Fallback>
					</Avatar.Root>
					<div class="flex flex-col">
						<span class="text-sm font-medium">{chatFriend.name}</span>
						<span class="text-xs">Active 2 mins ago</span>
					</div>
				</div>
				<div class="flex place-items-center">
					<Button variant="ghost" size="icon">
						<PhoneIcon />
					</Button>
					<Button variant="ghost" size="icon">
						<VideoIcon />
					</Button>
					<Button variant="ghost" size="icon">
						<InfoIcon />
					</Button>
				</div>
			</div>
			<ChatList class="max-h-[400px]">
				{#each messages as message (message)}
					{@const sender = chatUsers.find((u) => u.id === message.senderId)}

					<ChatBubble variant={message.senderId === chatUser.id ? 'sent' : 'received'}>
						<ChatBubbleAvatar>
							<Avatar.Image src={sender?.img} alt={sender?.username} />
							<Avatar.Fallback>
								{initials(sender?.name ?? '')}
							</Avatar.Fallback>
						</ChatBubbleAvatar>
						<ChatBubbleMessage class="flex flex-col gap-1">
							<p>{message.message}</p>
							<div class="w-full text-xs group-data-[variant='sent']/chat-bubble:text-end">
								{message.sentAt}
							</div>
						</ChatBubbleMessage>
					</ChatBubble>
				{/each}
				<ChatBubble variant="received">
					<ChatBubbleAvatar>
						<Avatar.Image src={chatFriend.img} alt={chatFriend.username} />
						<Avatar.Fallback>
							{initials(chatFriend.name)}
						</Avatar.Fallback>
					</ChatBubbleAvatar>
				</ChatBubble>
			</ChatList>
			<form
				onsubmit={(e) => {
					e.preventDefault();
					messages.push({ message, senderId: chatUser.id, sentAt: formatShortTime(new Date()) });
					message = '';
				}}
				class="flex place-items-center gap-2 p-2"
			>
				<!-- <EmojiPicker showRecents recentsKey="emoji-picker-recents" disableInitialScroll onSelect={(selected) => {
					open = false;
					message += selected.emoji;
				}}></EmojiPicker> -->
				<Input bind:value={message} placeholder="Type a message..."/>
				<Button type="submit" size="icon" disabled={message === ''}>
					<SendIcon/>
				</Button>
		</form>
		</div>
		<!-- <Card.Root
			class="bg-gradient-to-t from-primary/5 to-card p-0
shadow-xs dark:bg-card"
		>
			<Card.Content class="flex p-0">
				<div class="flex w-72 flex-col border-r">
					<div class="flex space-x-4 border-b p-4">
						<Avatar.Root>
							<Avatar.Image alt="" src="" />
							<Avatar.Fallback>Avatar</Avatar.Fallback>
						</Avatar.Root>
						<Input id="search" type="search" placeholder="Search Contacts" />
					</div>
					{#each { length: 5 } as _, index (index)}
						<div class="flex items-center justify-between border-b p-4">
							<div class="flex items-center space-x-4">
								<Avatar.Root>
									<Avatar.Image alt="" src="" />
									<Avatar.Fallback>Avatar</Avatar.Fallback>
								</Avatar.Root>
								<div class="flex flex-col">
									<h4 class="font-medium">John Doe</h4>
									<p class="text-xs">Last comment</p>
								</div>
							</div>
							<div class="flex flex-col items-center">
								<p>Jul 11</p>
								<Badge variant="destructive">1</Badge>
							</div>
						</div>
					{/each}
				</div>
				<div class="flex flex-1 flex-col items-center justify-center">
					<MessagesSquareIcon class="h-10 w-10" />
					<p>Select a contact to start a conversation.</p>
				</div>
			</Card.Content>
		</Card.Root> -->
	</div>
</div>
