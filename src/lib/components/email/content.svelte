<script lang="ts">
	import { selectedEmailId } from '$lib/components/email/store/email-store';
	import EmailList from '$lib/components/email/email-list.svelte';
	import EmailDetail from '$lib/components/email/email-detail.svelte';
</script>

<div class="flex h-screen w-full flex-grow overflow-hidden">
	<div
		class="h-full border-r border-gray-200 md:w-1/2 xl:w-2/5 {$selectedEmailId
			? 'hidden md:block'
			: ''}"
	>
		<EmailList />
	</div>
	<div class="h-full md:w-1/2 xl:w-3/5 {!$selectedEmailId ? 'hidden md:flex' : ''}">
		<EmailDetail />
	</div>
</div>
