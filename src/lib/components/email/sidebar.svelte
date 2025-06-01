<script lang="ts">
	import { currentFolder, isComposeOpen, labels } from '$lib/components/email/store/email-store';
	import Icon from '$lib/components/email/icon.svelte';

	// Folder counts would normally come from the server
	const folderCounts = {
		inbox: 12,
		sent: 5,
		draft: 2,
		starred: 3,
		spam: 4,
		trash: 0
	};

	const folders = [
		{ id: 'inbox', name: 'Inbox', icon: 'inbox' },
		{ id: 'sent', name: 'Sent', icon: 'paper-airplane' },
		{ id: 'draft', name: 'Drafts', icon: 'document' },
		{ id: 'starred', name: 'Starred', icon: 'star' },
		{ id: 'spam', name: 'Spam', icon: 'shield-exclamation' },
		{ id: 'trash', name: 'Trash', icon: 'trash' }
	];

	function handleComposeClick() {
		isComposeOpen.set(true);
	}

	function handleFolderClick(folder) {
		currentFolder.set(folder);
	}
</script>

<aside
	class="hidden h-full w-64 flex-shrink-0 overflow-y-auto border-r border-gray-200 bg-white transition-all duration-300 md:block"
>
	<div class="p-4">
		<button
			on:click={handleComposeClick}
			class="bg-primary-600 hover:bg-primary-700 flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 font-medium text-white transition-colors duration-250"
		>
			<Icon name="pencil" class="h-5 w-5" />
			<span>Compose</span>
		</button>
	</div>

	<nav class="mt-2">
		<ul class="space-y-1 px-2">
			{#each folders as folder (folder)}
				<li>
					<button
						class="menu-item w-full justify-between {$currentFolder === folder.id ? 'active' : ''}"
						on:click={() => handleFolderClick(folder.id)}
					>
						<div class="flex items-center gap-3 text-black">
							<Icon name={folder.icon} class="h-5 w-5" />
							<span>{folder.name}</span>
						</div>
						{#if folderCounts[folder.id] > 0}
							<span class="badge bg-gray-200 text-gray-800">
								{folderCounts[folder.id]}
							</span>
						{/if}
					</button>
				</li>
			{/each}
		</ul>
	</nav>

	<div class="mt-8 px-4">
		<h3 class="mb-2 px-2 text-xs font-semibold text-gray-500 uppercase">Labels</h3>
		<ul class="space-y-1 px-2">
			{#each $labels as label (label)}
				<li>
					<button class="menu-item w-full text-black">
						<span
							class="h-3 w-3 rounded-full"
							style="background-color: var(--tw-colors-{label.color}-500)"
						></span>
						<span>{label.name}</span>
					</button>
				</li>
			{/each}
		</ul>
	</div>
</aside>

<div class="fixed right-0 bottom-0 left-0 z-10 border-t border-gray-200 bg-white md:hidden">
	<nav class="flex justify-around py-2">
		{#each folders.slice(0, 5) as folder, fd (fd)}
			<button
				class="flex flex-col items-center justify-center p-2 text-gray-600 {$currentFolder ===
				folder.id
					? 'text-primary-600'
					: ''}"
				on:click={() => handleFolderClick(folder.id)}
			>
				<Icon name={folder.icon} class="h-6 w-6" />
				<span class="mt-1 text-xs">{folder.name}</span>
			</button>
		{/each}
		<button
			on:click={handleComposeClick}
			class="text-primary-600 flex flex-col items-center justify-center p-2"
		>
			<Icon name="pencil" class="h-6 w-6" />
			<span class="mt-1 text-xs">Compose</span>
		</button>
	</nav>
</div>
