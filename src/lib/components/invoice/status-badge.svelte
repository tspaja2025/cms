<script lang="ts">
	import type { InvoiceStatus } from '$lib/components/invoice/types';
	import { getStatusLabel, getStatusColorClass } from '$lib/components/invoice/utils';

	export let status: InvoiceStatus;
</script>

<span class={`badge ${getStatusColorClass(status)}`}>
	{getStatusLabel(status)}
</span>
