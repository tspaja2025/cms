<script lang="ts">
	import { isComposeOpen, addEmail } from '$lib/components/email/store/email-store';
	import Icon from '$lib/components/email/icon.svelte';

	let subject = '';
	let to = '';
	let body = '';

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
		// Add validation here in a real app
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
</script>

{#if $isComposeOpen}
	<div
		class="bg-opacity-75 fixed inset-0 z-40 bg-gray-500 transition-opacity"
		on:click={handleClose}
		{...$$restProps}
	></div>

	<div
		class="animate-slide-in fixed inset-x-0 bottom-0 z-50 w-full sm:inset-auto sm:right-4 sm:bottom-4 sm:w-full sm:max-w-xl"
	>
		<div
			class="flex flex-col overflow-hidden rounded-t-lg border border-gray-200 bg-white shadow-xl sm:rounded-lg"
		>
			<div class="flex items-center justify-between border-b border-gray-200 bg-gray-100 px-4 py-3">
				<h3 class="text-lg font-medium text-gray-900">New Message</h3>
				<button on:click={handleClose} class="text-gray-500 hover:text-gray-700">
					<Icon name="x-mark" class="h-5 w-5" />
				</button>
			</div>

			<div class="max-h-[calc(80vh-8rem)] flex-grow overflow-y-auto p-4">
				<div class="space-y-4">
					<div>
						<label for="to" class="sr-only">To</label>
						<input
							type="email"
							id="to"
							placeholder="To"
							class="focus:border-primary-500 w-full border-b border-gray-200 bg-transparent px-3 py-2 text-gray-900 focus:outline-none"
							bind:value={to}
						/>
					</div>

					<div>
						<label for="subject" class="sr-only">Subject</label>
						<input
							type="text"
							id="subject"
							placeholder="Subject"
							class="focus:border-primary-500 w-full border-b border-gray-200 bg-transparent px-3 py-2 text-gray-900 focus:outline-none"
							bind:value={subject}
						/>
					</div>

					<div>
						<label for="body" class="sr-only">Message</label>
						<textarea
							id="body"
							rows="12"
							placeholder="Compose your message..."
							class="focus:border-primary-500 w-full resize-none bg-transparent px-3 py-2 text-gray-900 focus:outline-none"
							bind:value={body}
						></textarea>
					</div>
				</div>
			</div>

			<div class="flex justify-between border-t border-gray-200 bg-gray-50 px-4 py-3">
				<div class="flex items-center space-x-2">
					<button class="rounded-full p-2 text-gray-600 hover:bg-gray-200">
						<Icon name="paperclip" class="h-5 w-5" />
					</button>
				</div>

				<div class="flex items-center space-x-2">
					<button
						on:click={handleClose}
						class="rounded-md border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100"
					>
						Discard
					</button>
					<button
						on:click={handleSubmit}
						class="bg-primary-600 hover:bg-primary-700 rounded-md px-4 py-2 font-medium text-white disabled:cursor-not-allowed disabled:opacity-50"
						disabled={!to || !subject}
					>
						Send
					</button>
				</div>
			</div>
		</div>
	</div>
{/if}
