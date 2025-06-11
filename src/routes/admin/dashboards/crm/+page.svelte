<script>
	import Button from '$lib/dashboard/ui/button/button.svelte';
	import Card from '$lib/dashboard/ui/card/card.svelte';
	import DropdownMenu from '$lib/dashboard/ui/dropdown-menu/dropdown-menu.svelte';
	import { EllipsisVerticalIcon } from '@lucide/svelte';

	let open = $state(true);
</script>

<svelte:head>
	<title>Admin Dashboard</title>
</svelte:head>

<div class="mb-4 grid grid-cols-12 gap-4">
	<div class="col-span-3">
		<Card title="Ratings"></Card>
	</div>
	<div class="col-span-3">
		<Card title="Sessions"></Card>
	</div>
	<div class="col-span-6">
		<Card title="Transactions">
			{#snippet actions()}
				<DropdownMenu icon>
					<Button>Item 1</Button>
					<Button>Item 2</Button>
					<Button>Item 3</Button>
				</DropdownMenu>
			{/snippet}
		</Card>
	</div>
</div>
<div class="mb-4 grid grid-cols-12 gap-4">
	<div class="col-span-3">
		<Card title="Total Sales">
			{#snippet actions()}
				<DropdownMenu icon>
					<Button>Item 1</Button>
					<Button>Item 2</Button>
					<Button>Item 3</Button>
				</DropdownMenu>
			{/snippet}
		</Card>
	</div>
	<div class="col-span-3">
		<Card title="Revenue Report">
			{#snippet actions()}
				<DropdownMenu icon>
					<Button>Item 1</Button>
					<Button>Item 2</Button>
					<Button>Item 3</Button>
				</DropdownMenu>
			{/snippet}
		</Card>
	</div>
	<div class="col-span-6">
		<Card title="Sales Overview">
			{#snippet actions()}
				<DropdownMenu icon>
					<Button>Item 1</Button>
					<Button>Item 2</Button>
					<Button>Item 3</Button>
				</DropdownMenu>
			{/snippet}
		</Card>
	</div>
</div>
<div class="mb-4 grid grid-cols-12 gap-4">
	<div class="col-span-6">
		<Card title="Activity Timeline">
			{#snippet actions()}
				<DropdownMenu icon>
					<Button>Item 1</Button>
					<Button>Item 2</Button>
					<Button>Item 3</Button>
				</DropdownMenu>
			{/snippet}
		</Card>
	</div>
	<div class="col-span-4">
		<Card title="Weekly Sales">
			{#snippet actions()}
				<DropdownMenu icon>
					<Button>Item 1</Button>
					<Button>Item 2</Button>
					<Button>Item 3</Button>
				</DropdownMenu>
			{/snippet}
		</Card>
	</div>
	<div class="col-span-2">
		<Card title="Sales Overview"></Card>
	</div>
</div>
<div class="grid grid-cols-12 gap-4">
	<div class="col-span-4">
		<Card title="Upgrade Plan">
			{#snippet actions()}
				<DropdownMenu icon>
					<Button>Item 1</Button>
					<Button>Item 2</Button>
					<Button>Item 3</Button>
				</DropdownMenu>
			{/snippet}
		</Card>
	</div>
	<div class="col-span-4">
		<Card title="Meeting Schedule">
			{#snippet actions()}
				<DropdownMenu icon>
					<Button>Item 1</Button>
					<Button>Item 2</Button>
					<Button>Item 3</Button>
				</DropdownMenu>
			{/snippet}
		</Card>
	</div>
	<div class="col-span-4">
		<Card title="Overview"></Card>
	</div>
</div>
