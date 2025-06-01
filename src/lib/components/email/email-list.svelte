<script lang="ts">
	import {
		folderEmails,
		selectedEmailId,
		toggleStar,
		markAsRead
	} from '$lib/components/email/store/email-store';
	import Icon from '$lib/components/email/icon.svelte';
	import EmailLabel from '$lib/components/email/email-label.svelte';

	function formatDate(dateString: string): string {
		const date = new Date(dateString);
		const now = new Date();

		// Today
		if (date.toDateString() === now.toDateString()) {
			return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
		}

		// This year
		if (date.getFullYear() === now.getFullYear()) {
			return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
		}

		// Previous years
		return date.toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric' });
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

<div class="h-full overflow-y-auto bg-white">
	{#if $folderEmails.length === 0}
		<div class="flex h-64 flex-col items-center justify-center text-gray-500">
			<Icon name="inbox" class="mb-2 h-12 w-12" />
			<p>No emails in this folder</p>
		</div>
	{:else}
		<ul>
			{#each $folderEmails as email (email.id)}
				<li
					class="email-item {!email.isRead ? 'unread' : ''} {$selectedEmailId === email.id
						? 'bg-primary-50'
						: ''}"
					on:click={() => handleEmailClick(email.id)}
					{...$$restProps}
				>
					<div class="flex-shrink-0">
						<button
							class="hover:text-warning-500 text-gray-400 {email.isStarred
								? 'text-warning-500'
								: ''}"
							on:click={(e) => handleStarClick(e, email.id)}
						>
							<Icon name="star" class="h-5 w-5" />
						</button>
					</div>

					<div class="min-w-0 flex-grow">
						<div class="flex items-center justify-between">
							<p
								class="truncate text-sm font-medium {!email.isRead
									? 'text-gray-900'
									: 'text-gray-700'}"
							>
								{email.from.name}
							</p>
							<p class="ml-2 text-xs whitespace-nowrap text-gray-500">
								{formatDate(email.timestamp)}
							</p>
						</div>

						<p
							class="truncate text-sm font-medium {!email.isRead
								? 'text-gray-900'
								: 'text-gray-700'}"
						>
							{email.subject}
						</p>

						<div class="flex items-center">
							<p class="truncate text-xs text-gray-500">
								{email.preview}
							</p>

							{#if email.attachments && email.attachments.length > 0}
								<span class="ml-2 text-gray-400">
									<Icon name="paperclip" class="h-4 w-4" />
								</span>
							{/if}
						</div>

						{#if email.labels.length > 0}
							<div class="mt-1 flex gap-1">
								{#each email.labels.slice(0, 2) as labelId, labId (labId)}
									<EmailLabel {labelId} />
								{/each}
								{#if email.labels.length > 2}
									<span class="badge bg-gray-100 text-gray-700">
										+{email.labels.length - 2}
									</span>
								{/if}
							</div>
						{/if}
					</div>
				</li>
			{/each}
		</ul>
	{/if}
</div>
