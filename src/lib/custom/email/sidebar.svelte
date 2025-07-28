<script lang="ts">
	import type { FolderId, FolderType } from '$lib/custom/email/types';
	import { Badge } from '$lib/components/ui/badge/index';
	import { Button, buttonVariants } from '$lib/components/ui/button/index';
	import * as Dialog from '$lib/components/ui/dialog/index';
	import { Textarea } from '$lib/components/ui/textarea/index';
	import { Label } from '$lib/components/ui/label/index';
	import { Input } from '$lib/components/ui/input/index';
	import { currentFolder, isComposeOpen, labels } from '$lib/custom/email/store/email';
	import SquarePenIcon from '@lucide/svelte/icons/square-pen';
	import PaperclipIcon from '@lucide/svelte/icons/paperclip';
	import InboxIcon from '@lucide/svelte/icons/inbox';
	import StarIcon from '@lucide/svelte/icons/star';
	import TrashIcon from '@lucide/svelte/icons/trash';
	import SendIcon from '@lucide/svelte/icons/send';
	import FileTextIcon from '@lucide/svelte/icons/file-text';
	import ShieldAlertIcon from '@lucide/svelte/icons/shield-alert';

	let subject = $state('');
	let to = $state('');
	let body = $state('');

	function handleClose() {
		isComposeOpen.set(false);
		resetForm();
	}

	function resetForm() {
		subject = '';
		to = '';
		body = '';
	}

	function handleSubmit() {
		if (to && subject) {
			addEmail({
				from: {
					name: 'Me',
					email: 'me@example.com'
				},
				to: [
					{
						name: to,
						email: to
					}
				],
				subject,
				body,
				preview: body.substring(0, 100),
				isRead: true,
				isStarred: false,
				labels: [],
				folder: 'sent'
			});

			handleClose();
		}
	}

	const folderCounts: Record<FolderId, number> = {
		inbox: 12,
		sent: 5,
		draft: 2,
		starred: 3,
		spam: 4,
		trash: 0
	};

	const folders: FolderType[] = [
		{ id: 'inbox', name: 'Inbox', icon: 'inbox' },
		{ id: 'sent', name: 'Sent', icon: 'paper-airplane' },
		{ id: 'draft', name: 'Drafts', icon: 'document' },
		{ id: 'starred', name: 'Starred', icon: 'star' },
		{ id: 'spam', name: 'Spam', icon: 'shield-exclamation' },
		{ id: 'trash', name: 'Trash', icon: 'trash' }
	];

	function handleFolderClick(folder) {
		currentFolder.set(folder);
	}
</script>

<div class="flex min-w-52 flex-col space-y-2 border-r p-2">
	<!-- Compose dialog -->

	<Dialog.Root open={$isComposeOpen} onOpenChange={handleClose}>
		<Dialog.Trigger class={buttonVariants({ variant: 'outline' })}>
			<SquarePenIcon class="h-5 w-5" />
			<span>Compose</span>
		</Dialog.Trigger>
		<Dialog.Overlay class="bg-background/80" />
		<Dialog.Content class="flex max-h-[80vh] flex-col p-4 sm:max-w-xl">
			<Dialog.Header class="border-b px-4 py-3">
				<Dialog.Title class="text-lg">New Message</Dialog.Title>
			</Dialog.Header>

			<div class="flex-1 overflow-y-auto">
				<div class="space-y-4">
					<div class="grid gap-1.5">
						<Label for="to" class="sr-only">To</Label>
						<Input id="to" type="email" placeholder="To" bind:value={to} />
					</div>

					<div class="grid gap-1.5">
						<Label for="subject" class="sr-only">Subject</Label>
						<Input id="subject" type="text" placeholder="Subject" bind:value={subject} />
					</div>

					<div class="grid gap-1.5">
						<Label for="body" class="sr-only">Message</Label>
						<Textarea
							id="body"
							placeholder="Compose your message..."
							rows={12}
							bind:value={body}
							class="min-h-[200px]"
						/>
					</div>
				</div>
			</div>
			<Dialog.Footer class="flex !justify-between px-4 py-2">
				<Button variant="ghost" size="icon" class="h-8 w-8 rounded-full">
					<PaperclipIcon class="h-5 w-5" />
					<span class="sr-only">Attach file</span>
				</Button>
				<div class="flex items-center justify-between space-x-2">
					<Button variant="outline" onclick={handleClose}>Discard</Button>
					<Button onclick={handleSubmit} disabled={!to || !subject}>Send</Button>
				</div>
			</Dialog.Footer>
		</Dialog.Content>
	</Dialog.Root>
	<h3 class="px-2 text-xs font-semibold text-gray-500 uppercase">Folders</h3>
	<nav class="space-y-1">
		{#each folders as folder (folder)}
			<Button
				variant="ghost"
				class="w-full justify-between {$currentFolder === folder.id ? '' : ''}"
				onclick={() => handleFolderClick(folder.id)}
			>
				<div class="flex items-center gap-3">
					{#if folder.icon === 'inbox'}
						<InboxIcon class="h-5 w-5" />
					{:else if folder.icon === 'paper-airplane'}
						<SendIcon class="h-5 w-5" />
					{:else if folder.icon === 'document'}
						<FileTextIcon class="h-5 w-5" />
					{:else if folder.icon === 'star'}
						<StarIcon class="h-5 w-5" />
					{:else if folder.icon === 'shield-exclamation'}
						<ShieldAlertIcon class="h-5 w-5" />
					{:else if folder.icon === 'trash'}
						<TrashIcon class="h-5 w-5" />
					{/if}
					<span>{folder.name}</span>
				</div>
				{#if folderCounts[folder.id] > 0}
					<Badge variant="secondary">
						{folderCounts[folder.id]}
					</Badge>
				{/if}
			</Button>
		{/each}
	</nav>
	<h3 class="px-2 text-xs font-semibold text-gray-500 uppercase">Labels</h3>
	{#each $labels as label (label)}
		<Button variant="ghost" class="w-full justify-start">
			<span class="h-3 w-3 rounded-full {label.color}"></span>
			<span>{label.name}</span>
		</Button>
	{/each}
</div>
