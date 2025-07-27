<script lang="ts">
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card/index';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import { Input } from '$lib/components/ui/input/index';
	import EllipsisVerticalIcon from '@lucide/svelte/icons/ellipsis-vertical';
	import BriefcaseBusinessIcon from '@lucide/svelte/icons/briefcase-business';
</script>

<Card.Root class="shadow-none">
	<Card.Header class="flex items-center justify-between">
		<Card.Title>Upgrade Plan</Card.Title>
		<DropdownMenu.Root>
			<DropdownMenu.Trigger class={buttonVariants({ variant: 'ghost', size: 'icon' })}>
				<EllipsisVerticalIcon />
			</DropdownMenu.Trigger>
			<DropdownMenu.Content>
				<DropdownMenu.Item>Last 28 Days</DropdownMenu.Item>
				<DropdownMenu.Item>Last Month</DropdownMenu.Item>
				<DropdownMenu.Item>Last year</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</Card.Header>
	<Card.Content class="space-y-4">
		<p>
			Please make the payment to start enjoying all the features of our premium plan as soon as
			possible.
		</p>
		<div class="flex items-center justify-between rounded-md bg-purple-300 p-2">
			<div class="flex items-center gap-2">
				<div class="rounded-md border border-purple-500 p-2">
					<BriefcaseBusinessIcon />
				</div>
				<div class="flex flex-col">
					<h4 class="font-medium">Platinum</h4>
					<p class="text-sm text-purple-500">Upgrade Plan</p>
				</div>
			</div>
			<div>$<span class="text-2xl font-medium">5000</span> / year</div>
		</div>
		<Input type="text" placeholder="Email Address" />
		<Button class="w-full">Contact Now</Button>
	</Card.Content>
</Card.Root>
