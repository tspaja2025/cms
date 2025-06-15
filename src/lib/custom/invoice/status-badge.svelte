<script lang="ts">
	import type { InvoiceStatus } from '$lib/custom/invoice/types';
	import { getStatusLabel, getStatusColorClass } from '$lib/custom/invoice/utils';

	let {
		status
	}: {
		status: InvoiceStatus;
	} = $props();
</script>

<span class={`badge ${getStatusColorClass(status)}`}>
	{getStatusLabel(status)}
</span>
