<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import Sidebar from '$lib/custom/email/sidebar.svelte';
	import EmailList from '$lib/custom/email/email-list.svelte';
	import EmailDetail from '$lib/custom/email/email-detail.svelte';
</script>

<Card.Root class="p-0">
	<Card.Content class="flex p-0">
		<Sidebar />
		<EmailList />
		<EmailDetail />
	</Card.Content>
</Card.Root>
