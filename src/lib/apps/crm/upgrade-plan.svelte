<script>
	import * as Card from '$lib/components/ui/card/index';
	import { Button, buttonVariants } from '$lib/components/ui/button/index';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import EllipsisVerticalIcon from '@lucide/svelte/icons/ellipsis-vertical';
	import PencilIcon from '@lucide/svelte/icons/pencil';
	import RefreshCcwIcon from '@lucide/svelte/icons/refresh-ccw';
	import ShareIcon from '@lucide/svelte/icons/share';
	import { BriefcaseBusinessIcon } from '@lucide/svelte';
	import { Input } from '$lib/components/ui/input';
</script>

<Card.Root class="bg-gradient-to-t from-primary/5 to-card shadow-xs dark:bg-card">
	<Card.Header>
		<Card.Title>Upgrade Plan</Card.Title>
		<Card.Description
			>Please make the payment to start enjoying all the features of our premium plan as soon as
			possible.</Card.Description
		>
		<Card.Action>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger class={buttonVariants({ variant: 'ghost', size: 'icon' })}>
					<EllipsisVerticalIcon />
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<DropdownMenu.Item><RefreshCcwIcon /> Refresh</DropdownMenu.Item>
					<DropdownMenu.Item><ShareIcon /> Share</DropdownMenu.Item>
					<DropdownMenu.Item><PencilIcon /> Edit</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</Card.Action>
	</Card.Header>
	<Card.Content class="space-y-4">
		<div class="flex items-center justify-between gap-2 rounded-md bg-purple-300 p-2">
			<div class="flex items-center gap-2">
				<div class="flex h-10 w-10 items-center justify-center rounded-md bg-purple-500">
					<BriefcaseBusinessIcon />
				</div>
				<div class="flex flex-col">
					<h3 class="text-lg font-semibold">Platinum</h3>
					<p class="text-purple-500">Upgrade Plan</p>
				</div>
			</div>
			<div class="font-bold"><span class="text-3xl">$5000</span> / Year</div>
		</div>
		<div class="grid gap-2">
			<Input id="email" type="email" placeholder="Email Address" />
			<Button>Contact Now</Button>
		</div>
	</Card.Content>
</Card.Root>
