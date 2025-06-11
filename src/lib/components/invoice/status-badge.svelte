<script lang="ts">
	import type { InvoiceStatus } from '$lib/components/invoice/types';
	import { getStatusLabel, getStatusColorClass } from '$lib/components/invoice/utils';

	let {
		status
	}: {
		status: InvoiceStatus;
	} = $props();
</script>

<span class={`badge ${getStatusColorClass(status)}`}>
	{getStatusLabel(status)}
</span>
