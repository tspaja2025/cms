<script lang="ts">
	import { onMount } from 'svelte';
	// import { location } from 'svelte-spa-router';
	import InvoiceListComponent from '$lib/components/invoice/invoice-list.svelte';
	import type { InvoiceStatus } from '$lib/components/invoice/types';

	let status = $state<InvoiceStatus | 'all'>('all');

	onMount(() => {
		const params = new URLSearchParams(location.split('?')[1] || '');
		const statusParam = params.get('status') as InvoiceStatus | null;

		if (statusParam && ['draft', 'sent', 'paid', 'overdue'].includes(statusParam)) {
			status = statusParam;
		} else {
			status = 'all';
		}
	});

	// $: {
	// 	const params = new URLSearchParams($location.split('?')[1] || '');
	// 	const statusParam = params.get('status') as InvoiceStatus | null;

	// 	if (statusParam && ['draft', 'sent', 'paid', 'overdue'].includes(statusParam)) {
	// 		status = statusParam;
	// 	} else {
	// 		status = 'all';
	// 	}
	// }
</script>

<svelte:head>
	<title>Admin Dashboard</title>
</svelte:head>

<InvoiceListComponent {status} />
