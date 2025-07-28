<script lang="ts">
	import { Badge } from '$lib/components/ui/badge/index';
	import { Button } from '$lib/components/ui/button/index';
	import * as Tooltip from '$lib/components/ui/tooltip/index';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import * as Avatar from '$lib/components/ui/avatar/index';
	import {
		selectedEmail,
		deleteEmail,
		moveToFolder,
		selectedEmailId,
		toggleStar
	} from '$lib/custom/email/store/email';
	import PaperclipIcon from '@lucide/svelte/icons/paperclip';
	import StarIcon from '@lucide/svelte/icons/star';
	import InboxIcon from '@lucide/svelte/icons/inbox';
	import ReplyIcon from '@lucide/svelte/icons/reply';
	import ArchiveIcon from '@lucide/svelte/icons/archive';
	import TrashIcon from '@lucide/svelte/icons/trash';
	import EllipsisVerticalIcon from '@lucide/svelte/icons/ellipsis-vertical';
	import ArrowLeftIcon from '@lucide/svelte/icons/arrow-left';

	function formatDetailDate(dateString: string): string {
		const date = new Date(dateString);
		return date.toLocaleString([], {
			weekday: 'short',
			month: 'short',
			day: 'numeric',
			year: 'numeric',
			hour: 'numeric',
			minute: '2-digit'
		});
	}

	function handleBack() {
		selectedEmailId.set(null);
	}

	function handleArchive() {
		if ($selectedEmail) {
			moveToFolder($selectedEmail.id, 'trash');
			selectedEmailId.set(null);
		}
	}

	function handleDelete() {
		if ($selectedEmail) {
			deleteEmail($selectedEmail.id);
		}
	}

	function handleStarToggle() {
		if ($selectedEmail) {
			toggleStar($selectedEmail.id);
		}
	}

	function formatBytes(bytes: number, decimals = 2) {
		if (bytes === 0) return '0 Bytes';

		const k = 1024;
		const sizes = ['Bytes', 'KB', 'MB', 'GB'];
		const i = Math.floor(Math.log(bytes) / Math.log(k));

		return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + ' ' + sizes[i];
	}
</script>

<div class="h-full w-full {!$selectedEmailId ? 'hidden md:flex' : ''}">
	<div class="animate-fade-in flex h-full w-full flex-col">
		{#if $selectedEmail}
			<div class="flex items-center justify-between border-b p-3">
				<div class="flex items-center">
					<Button variant="ghost" size="icon" onclick={handleBack} class="mr-2 h-9 w-9">
						<ArrowLeftIcon class="h-5 w-5" />
						<span class="sr-only">Back</span>
					</Button>
					<h2 class="max-w-xs truncate text-lg font-medium sm:max-w-sm md:max-w-md lg:max-w-lg">
						{$selectedEmail.subject}
					</h2>
				</div>

				<div class="flex items-center gap-1">
					<Tooltip.Root>
						<Tooltip.Trigger>
							<Button variant="ghost" size="icon" class="h-9 w-9" onclick={handleStarToggle}>
								<StarIcon
									class="h-5 w-5 {$selectedEmail.isStarred
										? 'fill-yellow-500 text-yellow-500'
										: ''}"
								/>
								<span class="sr-only">Toggle star</span>
							</Button>
						</Tooltip.Trigger>
						<Tooltip.Content>
							<p>
								{$selectedEmail.isStarred ? 'Remove star' : 'Add star'}
							</p>
						</Tooltip.Content>
					</Tooltip.Root>

					<Tooltip.Root>
						<Tooltip.Trigger>
							<Button variant="ghost" size="icon" class="h-9 w-9" onclick={handleArchive}>
								<ArchiveIcon class="h-5 w-5" />
								<span class="sr-only">Archive</span>
							</Button>
						</Tooltip.Trigger>
						<Tooltip.Content>
							<p>Archive</p>
						</Tooltip.Content>
					</Tooltip.Root>

					<Tooltip.Root>
						<Tooltip.Trigger>
							<Button variant="ghost" size="icon" class="h-9 w-9" onclick={handleDelete}>
								<TrashIcon class="h-5 w-5" />
								<span class="sr-only">Delete</span>
							</Button>
						</Tooltip.Trigger>
						<Tooltip.Content>
							<p>Delete</p>
						</Tooltip.Content>
					</Tooltip.Root>

					<DropdownMenu.Root>
						<DropdownMenu.Trigger>
							<Button variant="ghost" size="icon" class="h-9 w-9">
								<EllipsisVerticalIcon class="h-5 w-5" />
								<span class="sr-only">More options</span>
							</Button>
						</DropdownMenu.Trigger>
						<DropdownMenu.Content align="end">
							<DropdownMenu.Item onclick={() => console.log('Mark as unread')}>
								Mark as unread
							</DropdownMenu.Item>
							<DropdownMenu.Item onclick={() => console.log('Forward')}>Forward</DropdownMenu.Item>
							<DropdownMenu.Separator />
							<DropdownMenu.Item class="text-destructive" onclick={handleDelete}>
								Delete
							</DropdownMenu.Item>
						</DropdownMenu.Content>
					</DropdownMenu.Root>
				</div>
			</div>

			<div class="flex-grow overflow-y-auto p-4">
				<div class="mb-6">
					<div class="flex items-start justify-between">
						<div class="flex items-start">
							<Avatar.Root class="mr-3 h-10 w-10">
								<Avatar.Fallback class="bg-primary-500 text-white">
									{$selectedEmail.from.name.charAt(0)}
								</Avatar.Fallback>
							</Avatar.Root>
							<div>
								<div class="flex items-center">
									<h3 class="text-sm font-medium">
										{$selectedEmail.from.name}
									</h3>
									<span class="ml-2 text-sm text-gray-500">
										&lt;{$selectedEmail.from.email}&gt;
									</span>
								</div>
								<div class="mt-1 text-sm text-gray-500">
									To: {$selectedEmail.to.map((recipient) => recipient.name).join(', ')}
								</div>
							</div>
						</div>

						<div class="text-sm text-gray-500">
							{formatDetailDate($selectedEmail.timestamp)}
						</div>
					</div>

					<div class="mt-4 flex flex-wrap gap-1">
						{#each $selectedEmail.labels.slice(0, 2) as labelName, index (index)}
							<Badge
								variant="secondary"
								class="px-1.5 py-0.5 text-xs {labelName === 'work'
									? 'bg-blue-500'
									: labelName === 'personal'
										? 'bg-green-500'
										: labelName === 'social'
											? 'bg-pink-500'
											: labelName === 'important'
												? 'bg-red-500'
												: labelName === 'urgent'
													? 'bg-orange-500'
													: labelName === 'newsletters'
														? 'bg-yellow-500'
														: ''}"
							>
								{labelName}
							</Badge>
						{/each}
					</div>
				</div>

				<div class="prose dark:prose-invert max-w-none">
					{@html $selectedEmail.body}
				</div>

				{#if $selectedEmail.attachments && $selectedEmail.attachments.length > 0}
					<div class="mt-6 border-t pt-4">
						<h4 class="mb-3 text-sm font-medium text-gray-700">
							Attachments ({$selectedEmail.attachments.length})
						</h4>
						<div class="space-y-3">
							{#each $selectedEmail.attachments as attachment (attachment)}
								<div class="flex items-center justify-between rounded-lg border p-3">
									<div class="flex items-center">
										<div class="mr-3 text-gray-500">
											<PaperclipIcon class="h-5 w-5" />
										</div>
										<div>
											<div class="text-sm font-medium">
												{attachment.name}
											</div>
											<div class="text-xs text-gray-500">
												{formatBytes(attachment.size)}
											</div>
										</div>
									</div>
									<Button variant="outline" size="sm">Download</Button>
								</div>
							{/each}
						</div>
					</div>
				{/if}
			</div>

			<div class="border-t p-4">
				<Button variant="ghost">
					<ReplyIcon class="mr-2 h-5 w-5" />
					Reply
				</Button>
			</div>
		{:else}
			<div class="flex h-full w-full flex-col items-center justify-center text-gray-500">
				<InboxIcon class="mb-2 h-12 w-12" />
				<p>Select an email to view</p>
			</div>
		{/if}
	</div>
</div>
