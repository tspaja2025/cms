<script>
	import * as Avatar from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
	import { buttonVariants } from '$lib/components/ui/button/index';
	import * as Card from '$lib/components/ui/card/index';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import { meetingSchelude } from '$lib/store';
	import EllipsisVerticalIcon from '@lucide/svelte/icons/ellipsis-vertical';
	import PencilIcon from '@lucide/svelte/icons/pencil';
	import RefreshCcwIcon from '@lucide/svelte/icons/refresh-ccw';
	import ShareIcon from '@lucide/svelte/icons/share';
</script>

<Card.Root class="bg-gradient-to-t from-primary/5 to-card shadow-xs dark:bg-card">
	<Card.Header>
		<Card.Title>Meeting schedule</Card.Title>
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
	<Card.Content>
		{#each meetingSchelude as item, index (index)}
			<div class="flex items-center justify-between gap-2 rounded-md p-2">
				<div class="flex items-center gap-2">
					<div class="flex h-10 w-10 items-center justify-center rounded-md">
						<Avatar.Root>
							<Avatar.Image alt="..." src="https://placehold.co/32x32" />
							<Avatar.Fallback>Avatar</Avatar.Fallback>
						</Avatar.Root>
					</div>
					<div class="flex flex-col">
						<h3 class="text-lg font-semibold">{item.title}</h3>
						<p class="text-xs">{item.date}</p>
					</div>
				</div>
				<Badge class={item.badgeColor}>{item.badgeText}</Badge>
			</div>
		{/each}
	</Card.Content>
</Card.Root>
