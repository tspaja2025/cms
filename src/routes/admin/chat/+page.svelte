<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import * as Avatar from '$lib/components/ui/avatar/index';
	import { Input } from '$lib/components/ui/input/index';
	import { Badge } from '$lib/components/ui/badge/index';
	import MessagesSquareIcon from '@lucide/svelte/icons/messages-square';
</script>

<Card.Root class="p-0">
	<Card.Content class="flex p-0">
		<div class="flex w-72 flex-col border-r">
			<div class="flex space-x-4 border-b p-4">
				<Avatar.Root>
					<Avatar.Image alt="" src="" />
					<Avatar.Fallback>Avatar</Avatar.Fallback>
				</Avatar.Root>
				<Input type="search" placeholder="Search Contacts" />
			</div>
			{#each { length: 5 } as _, index (index)}
				<div class="flex items-center justify-between border-b p-4">
					<div class="flex items-center space-x-4">
						<Avatar.Root>
							<Avatar.Image alt="" src="" />
							<Avatar.Fallback>Avatar</Avatar.Fallback>
						</Avatar.Root>
						<div class="flex flex-col">
							<h4 class="font-medium">John Doe</h4>
							<p class="text-xs">Last comment</p>
						</div>
					</div>
					<div class="flex flex-col items-center">
						<p>Jul 11</p>
						<Badge variant="destructive">1</Badge>
					</div>
				</div>
			{/each}
		</div>
		<div class="flex flex-1 flex-col items-center justify-center">
			<MessagesSquareIcon class="h-10 w-10" />
			<p>Select a contact to start a conversation.</p>
		</div>
	</Card.Content>
</Card.Root>
