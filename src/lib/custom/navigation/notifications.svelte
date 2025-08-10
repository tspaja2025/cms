<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button/index';
	import * as Avatar from '$lib/components/ui/avatar/index';
	import * as Tooltip from '$lib/components/ui/tooltip/index';
	import { Badge } from '$lib/components/ui/badge/index';
	import MailCheckIcon from '@lucide/svelte/icons/mail-check';
</script>

<div class="flex items-center justify-between border-b px-4 py-2">
	<h5 class="font-medium">Notifications</h5>
	<div class="flex items-center gap-2">
		<Badge>2 New</Badge>
		<Tooltip.Provider>
			<Tooltip.Root>
				<Tooltip.Trigger class={buttonVariants({ variant: 'ghost', size: 'icon' })}>
					<MailCheckIcon />
				</Tooltip.Trigger>
				<Tooltip.Content>Mark all as read</Tooltip.Content>
			</Tooltip.Root>
		</Tooltip.Provider>
	</div>
</div>
{#each { length: 4 } as _, index (index)}
	<div class="flex gap-4 border-b p-4">
		<Avatar.Root>
			<Avatar.Image src="" alt="" />
			<Avatar.Fallback>CN</Avatar.Fallback>
		</Avatar.Root>
		<div>
			<h5 class="font-medium">Congratulations</h5>
			<p class="text-xs">Won something</p>
			<p class="text-xs text-neutral-500">1h ago</p>
		</div>
	</div>
{/each}
