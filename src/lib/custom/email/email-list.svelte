<script lang="ts">
	import { Badge } from '$lib/components/ui/badge/index';
	import { Button } from '$lib/components/ui/button/index';
	import { Input } from '$lib/components/ui/input/index';
	import {
		searchQuery,
		folderEmails,
		markAsRead,
		selectedEmailId,
		toggleStar
	} from '$lib/custom/email/store/email';
	import InboxIcon from '@lucide/svelte/icons/inbox';
	import StarIcon from '@lucide/svelte/icons/star';
	import PaperclipIcon from '@lucide/svelte/icons/paperclip';

	const { ...restProps } = $props();

	let searchValue = $state('');

	function handleSearch() {
		searchQuery.set(searchValue);
	}

	function formatDate(dateString: string): string {
		const date = new Date(dateString);
		const now = new Date();

		// Today
		if (date.toDateString() === now.toDateString()) {
			return date.toLocaleTimeString([], {
				hour: '2-digit',
				minute: '2-digit'
			});
		}

		// This year
		if (date.getFullYear() === now.getFullYear()) {
			return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
		}

		// Previous years
		return date.toLocaleDateString([], {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
	}

	function handleEmailClick(emailId: string) {
		selectedEmailId.set(emailId);
		markAsRead(emailId);
	}

	function handleStarClick(event: MouseEvent, emailId: string) {
		event.stopPropagation();
		toggleStar(emailId);
	}
</script>

<div class="w-64 border-r {$selectedEmailId ? 'hidden md:block' : ''}">
	<!-- Email List -->
	<div class="px-4 py-2">
		<Input
			class="w-full"
			bind:value={searchValue}
			oninput={handleSearch}
			placeholder="Search emails"
		/>
	</div>
	<div class="h-full overflow-y-auto">
		{#if $folderEmails.length === 0}
			<div class="flex h-64 flex-col items-center justify-center text-gray-500">
				<InboxIcon class="mb-2 h-12 w-12" />
				<p>No emails in this folder</p>
			</div>
		{:else}
			<ul class="divide-y">
				{#each $folderEmails as email (email.id)}
					<li
						class="relative flex cursor-pointer items-start space-x-3 px-4 py-4 focus-within:bg-gray-50 hover:bg-(--sidebar-accent) {!email.isRead
							? 'bg-(--sidebar-accent)'
							: ''} {$selectedEmailId === email.id ? 'bg-(--sidebar-accent)' : ''}"
						onclick={() => handleEmailClick(email.id)}
						{...restProps}
					>
						<div class="flex-shrink-0 pt-1">
							<Button
								variant="ghost"
								size="icon"
								class="hover:text-warning-500 h-8 w-8 rounded-full hover:bg-transparent {email.isStarred
									? 'text-warning-500'
									: 'text-gray-400'}"
								onclick={(e) => handleStarClick(e, email.id)}
							>
								<StarIcon class="h-5 w-5" />
								<span class="sr-only">Star</span>
							</Button>
						</div>

						<div class="min-w-0 flex-1">
							<div class="flex items-center justify-between">
								<p class="truncate text-sm font-medium {!email.isRead ? '' : ''}">
									{email.from.name}
								</p>
								<p class="ml-2 text-xs whitespace-nowrap text-gray-500">
									{formatDate(email.timestamp)}
								</p>
							</div>

							<p class="truncate text-sm font-medium {!email.isRead ? '' : 'text-gray-700'}">
								{email.subject}
							</p>

							<div class="flex items-center justify-between">
								<p class="truncate text-xs text-gray-500">
									{email.preview}
								</p>
								{#if email.attachments && email.attachments.length > 0}
									<span class="ml-2 text-gray-400">
										<PaperclipIcon class="h-4 w-4" />
									</span>
								{/if}
							</div>

							<div class="mt-1 flex flex-wrap gap-1">
								{#each email.labels.slice(0, 2) as labelName, index (index)}
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
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>
