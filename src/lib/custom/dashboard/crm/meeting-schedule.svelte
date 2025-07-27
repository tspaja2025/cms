<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index';
	import { Badge } from '$lib/components/ui/badge/index';
	import { buttonVariants } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card/index';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import EllipsisVerticalIcon from '@lucide/svelte/icons/ellipsis-vertical';
	import CalendarIcon from '@lucide/svelte/icons/calendar';
</script>

<Card.Root class="shadow-none">
	<Card.Header class="flex items-center justify-between">
		<Card.Title>Meeting Schedule</Card.Title>
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
	<Card.Content class="flex flex-col">
		<div class="flex items-center justify-between">
			<div class="flex items-center gap-2">
				<Avatar.Root>
					<Avatar.Image alt="" src="" />
					<Avatar.Fallback>avatar</Avatar.Fallback>
				</Avatar.Root>
				<div class="flex flex-col">
					<h4 class="font-medium">First Schelude</h4>
					<div class="flex items-center gap-2">
						<CalendarIcon class="h-4 w-4 text-slate-500" /> 7/21/2025
					</div>
				</div>
			</div>
			<Badge class="bg-purple-300 text-purple-700">Business</Badge>
		</div>
		<div class="flex items-center justify-between">
			<div class="flex items-center gap-2">
				<Avatar.Root>
					<Avatar.Image alt="" src="" />
					<Avatar.Fallback>avatar</Avatar.Fallback>
				</Avatar.Root>
				<div class="flex flex-col">
					<h4 class="font-medium">First Schelude</h4>
					<div class="flex items-center gap-2">
						<CalendarIcon class="h-4 w-4 text-slate-500" /> 7/21/2025
					</div>
				</div>
			</div>
			<Badge class="bg-yellow-300 text-yellow-700">Meditation</Badge>
		</div>
		<div class="flex items-center justify-between">
			<div class="flex items-center gap-2">
				<Avatar.Root>
					<Avatar.Image alt="" src="" />
					<Avatar.Fallback>avatar</Avatar.Fallback>
				</Avatar.Root>
				<div class="flex flex-col">
					<h4 class="font-medium">First Schelude</h4>
					<div class="flex items-center gap-2">
						<CalendarIcon class="h-4 w-4 text-slate-500" /> 7/21/2025
					</div>
				</div>
			</div>
			<Badge class="bg-slate-300 text-slate-700">Meetup</Badge>
		</div>
		<div class="flex items-center justify-between">
			<div class="flex items-center gap-2">
				<Avatar.Root>
					<Avatar.Image alt="" src="" />
					<Avatar.Fallback>avatar</Avatar.Fallback>
				</Avatar.Root>
				<div class="flex flex-col">
					<h4 class="font-medium">First Schelude</h4>
					<div class="flex items-center gap-2">
						<CalendarIcon class="h-4 w-4 text-slate-500" /> 7/21/2025
					</div>
				</div>
			</div>
			<Badge class="bg-red-300 text-red-700">Dinner</Badge>
		</div>
	</Card.Content>
</Card.Root>
