<script lang="ts">
	import InvoiceList from '$lib/pages/invoice/invoice-list.svelte';
	import type { InvoiceStatus } from '$lib/types';
	import { onMount } from 'svelte';

	let status = $state<InvoiceStatus | 'all'>('all');

	onMount(() => {
		const params = new URLSearchParams(location.search);
		const statusParam = params.get('status') as InvoiceStatus | null;

		if (statusParam && ['draft', 'sent', 'paid', 'overdue'].includes(statusParam)) {
			status = statusParam;
		} else {
			status = 'all';
		}
	});
</script>

<svelte:head>
	<title>CMS | Admin | Invoice list</title>
	<meta name="description" content="CMS" />
</svelte:head>

<div class="mx-auto grid gap-4 md:max-w-full lg:max-w-7xl">
	<div class="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
		<InvoiceList {status} />
	</div>
</div>
