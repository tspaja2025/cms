<script lang="ts">
	import { onMount } from 'svelte';
	import InvoiceListComponent from '$lib/custom/invoice/invoice-list.svelte';
	import type { InvoiceStatus } from '$lib/custom/invoice/types';

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
	<title>Admin Dashboard</title>
</svelte:head>

<InvoiceListComponent {status} />
