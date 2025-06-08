<script>
	import Button from '$lib/dashboard/ui/button.svelte';
	import Card from '$lib/dashboard/ui/card.svelte';
	import { EllipsisVerticalIcon } from '@lucide/svelte';
</script>

<svelte:head>
	<title>Admin Dashboard</title>
</svelte:head>

<div class="mb-4 grid grid-cols-12 gap-4">
	<div class="col-span-3">
		<Card title="On route vehicles"></Card>
	</div>
	<div class="col-span-3">
		<Card title="Vehicles with errors"></Card>
	</div>
	<div class="col-span-3">
		<Card title="Deviated from route"></Card>
	</div>
	<div class="col-span-3">
		<Card title="Late vehicles"></Card>
	</div>
</div>
<div class="mb-4 grid grid-cols-12 gap-4">
	<div class="col-span-6">
		<Card title="Vehicle overview">
			{#snippet actions()}
				<Button class="rounded-full !px-2">
					<EllipsisVerticalIcon />
				</Button>
			{/snippet}
		</Card>
	</div>
	<div class="col-span-6">
		<Card title="Shipment Statistics">
			{#snippet actions()}
				<Button class="rounded-full !px-2">
					<EllipsisVerticalIcon />
				</Button>
			{/snippet}
		</Card>
	</div>
</div>
<div class="mb-4 grid grid-cols-12 gap-4">
	<div class="col-span-4">
		<Card title="Delivery Performance">
			{#snippet actions()}
				<Button class="rounded-full !px-2">
					<EllipsisVerticalIcon />
				</Button>
			{/snippet}
		</Card>
	</div>
	<div class="col-span-4">
		<Card title="Delivery exceptions">
			{#snippet actions()}
				<Button class="rounded-full !px-2">
					<EllipsisVerticalIcon />
				</Button>
			{/snippet}
		</Card>
	</div>
	<div class="col-span-4">
		<Card title="Orders by Countries">
			{#snippet actions()}
				<Button class="rounded-full !px-2">
					<EllipsisVerticalIcon />
				</Button>
			{/snippet}
		</Card>
	</div>
</div>
<div class="grid grid-cols-12 gap-4">
	<div class="col-span-12">
		<Card title="On route vehicles"></Card>
	</div>
</div>
