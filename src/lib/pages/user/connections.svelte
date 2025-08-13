<script>
	import * as Avatar from '$lib/components/ui/avatar/index';
	import { Button } from '$lib/components/ui/button/index';
	import * as Card from '$lib/components/ui/card/index';
	import { Switch } from '$lib/components/ui/switch/index';
	import { connectedAccounts, socialAccounts } from '$lib/store';
	import LinkIcon from '@lucide/svelte/icons/link';
</script>

<Card.Root
	class="bg-gradient-to-t from-primary/5 to-card
shadow-xs dark:bg-card"
>
	<Card.Header>
		<Card.Title>Connected Accounts</Card.Title>
		<Card.Description>Display content from your connected accounts on your site</Card.Description>
	</Card.Header>
	<Card.Content class="space-y-4">
		{#each connectedAccounts as item, index (index)}
			<div class="flex items-center justify-between">
				<div class="flex items-center gap-4">
					<Avatar.Root>
						<Avatar.Image src="" alt="" />
						<Avatar.Fallback>{item.title}</Avatar.Fallback>
					</Avatar.Root>
					<div>
						<h5 class="font-medium">{item.title}</h5>
						<p class="text-xs">{item.description}</p>
					</div>
				</div>
				<Switch bind:checked={item.checked} />
			</div>
		{/each}
	</Card.Content>
</Card.Root>
<Card.Root
	class="bg-gradient-to-t from-primary/5 to-card
shadow-xs dark:bg-card"
>
	<Card.Header>
		<Card.Title>Social Accounts</Card.Title>
		<Card.Description>Display content from social accounts on your site</Card.Description>
	</Card.Header>
	<Card.Content class="space-y-4">
		{#each socialAccounts as item, index (index)}
			<div class="flex items-center justify-between">
				<div class="flex items-center gap-4">
					<Avatar.Root>
						<Avatar.Image src="" alt="" />
						<Avatar.Fallback>{item.title}</Avatar.Fallback>
					</Avatar.Root>
					<div>
						<h5 class="font-medium">{item.title}</h5>
						<p class="text-xs">{item.connected}</p>
					</div>
				</div>
				<Button variant="ghost">
					<LinkIcon />
				</Button>
			</div>
		{/each}
	</Card.Content>
</Card.Root>
