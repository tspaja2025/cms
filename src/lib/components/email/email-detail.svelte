<script lang="ts">
	import {
		selectedEmail,
		selectedEmailId,
		toggleStar,
		deleteEmail,
		moveToFolder
	} from '$lib/components/email/store/email-store';
	import Icon from '$lib/components/email/icon.svelte';
	import EmailLabel from '$lib/components/email/email-label.svelte';

	function formatDate(dateString: string): string {
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

<div class="animate-fade-in flex h-full w-full flex-col bg-white">
	{#if $selectedEmail}
		<div class="flex items-center justify-between border-b border-gray-200 p-3">
			<div class="flex items-center">
				<button on:click={handleBack} class="mr-4 text-gray-600">
					<Icon name="arrow-left" class="h-5 w-5" />
				</button>
				<h2 class="max-w-xs truncate text-lg font-medium text-gray-900 sm:max-w-sm md:max-w-md">
					{$selectedEmail.subject}
				</h2>
			</div>

			<div class="flex items-center space-x-2">
				<button
					on:click={handleStarToggle}
					class="rounded-full p-2 hover:bg-gray-100 {$selectedEmail.isStarred
						? 'text-warning-500'
						: 'text-gray-400'}"
				>
					<Icon name="star" class="h-5 w-5" />
				</button>
				<button on:click={handleArchive} class="rounded-full p-2 text-gray-600 hover:bg-gray-100">
					<Icon name="archive" class="h-5 w-5" />
				</button>
				<button on:click={handleDelete} class="rounded-full p-2 text-gray-600 hover:bg-gray-100">
					<Icon name="trash" class="h-5 w-5" />
				</button>
				<button class="rounded-full p-2 text-gray-600 hover:bg-gray-100">
					<Icon name="dots-vertical" class="h-5 w-5" />
				</button>
			</div>
		</div>

		<div class="flex-grow overflow-y-auto p-4">
			<div class="mb-4">
				<div class="flex items-center justify-between">
					<div class="flex items-center">
						<div
							class="bg-primary-500 mr-3 flex h-10 w-10 items-center justify-center rounded-full font-medium text-white"
						>
							{$selectedEmail.from.name.charAt(0)}
						</div>
						<div>
							<div class="flex items-center">
								<h3 class="font-medium text-gray-900">
									{$selectedEmail.from.name}
								</h3>
								<span class="ml-2 text-sm text-gray-500">
									&lt;{$selectedEmail.from.email}&gt;
								</span>
							</div>
							<div class="text-sm text-gray-500">
								To: {$selectedEmail.to.map((recipient) => recipient.name).join(', ')}
							</div>
						</div>
					</div>

					<div class="text-sm text-gray-500">
						{formatDate($selectedEmail.timestamp)}
					</div>
				</div>

				{#if $selectedEmail.labels.length > 0}
					<div class="mt-2 flex flex-wrap gap-1">
						{#each $selectedEmail.labels as labelId (labelId)}
							<EmailLabel {labelId} />
						{/each}
					</div>
				{/if}
			</div>

			<div class="prose dark:prose-invert max-w-none">
				{@html $selectedEmail.body}
			</div>

			{#if $selectedEmail.attachments && $selectedEmail.attachments.length > 0}
				<div class="mt-6 border-t border-gray-200 pt-4">
					<h4 class="mb-2 text-sm font-medium text-gray-700">
						Attachments ({$selectedEmail.attachments.length})
					</h4>
					<div class="space-y-2">
						{#each $selectedEmail.attachments as attachment (attachment)}
							<div class="flex items-center rounded-lg border border-gray-200 bg-gray-50 p-3">
								<div class="mr-3 text-gray-500">
									<Icon name="paperclip" class="h-5 w-5" />
								</div>
								<div class="flex-grow">
									<div class="text-sm font-medium text-gray-900 dark:text-white">
										{attachment.name}
									</div>
									<div class="text-xs text-gray-500">
										{formatBytes(attachment.size)}
									</div>
								</div>
								<button class="text-primary-600 text-sm font-medium"> Download </button>
							</div>
						{/each}
					</div>
				</div>
			{/if}
		</div>

		<div class="border-t border-gray-200 p-4">
			<button
				class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-700 transition-colors duration-250 hover:bg-gray-100"
			>
				<Icon name="reply" class="h-5 w-5" />
				<span>Reply</span>
			</button>
		</div>
	{:else}
		<div class="flex h-full w-full flex-col items-center justify-center text-gray-500">
			<p>Select an email to view</p>
		</div>
	{/if}
</div>
