<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';

	let {status} = $props();

	// Define badge styles based on status
	const getBadgeClass = (status: string) => {
		switch (status.toLowerCase()) {
			case 'completed':
			case 'delivered':
			case 'active':
			case 'in stock':
			case 'paid':
				return 'badge-success';
			case 'pending':
			case 'processing':
			case 'on hold':
			case 'low stock':
				return 'badge-warning';
			case 'cancelled':
			case 'failed':
			case 'out of stock':
			case 'refunded':
				return 'badge-error';
			default:
				return 'bg-gray-100 text-gray-800';
		}
	};
</script>

<Badge class={getBadgeClass(status)}>
	{status}
</Badge>
