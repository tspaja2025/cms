<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import { Switch } from '$lib/components/ui/switch/index';
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Connected Accounts</Card.Title>
		<Card.Description>Display content from your connected accounts on your site</Card.Description>
	</Card.Header>
	<Card.Content>
		<div class="flex items-center justify-between">
			<div class="flex flex-col">
				<h3 class="font-medium">Google</h3>
				<p class="text-xs">Calendar and Contacts</p>
			</div>
			<Switch checked />
		</div>
		<div class="flex items-center justify-between">
			<div class="flex flex-col">
				<h3 class="font-medium">Slack</h3>
				<p class="text-xs">Communications</p>
			</div>
			<Switch />
		</div>
		<div class="flex items-center justify-between">
			<div class="flex flex-col">
				<h3 class="font-medium">Github</h3>
				<p class="text-xs">Manage your Git repositories</p>
			</div>
			<Switch checked />
		</div>
	</Card.Content>
</Card.Root>
<Card.Root>
	<Card.Header>
		<Card.Title>Social Accounts</Card.Title>
		<Card.Description>Display content from social accounts on your site</Card.Description>
	</Card.Header>
	<Card.Content>
		<div class="flex items-center justify-between">
			<div class="flex flex-col">
				<h3 class="font-medium">Facebook</h3>
				<p class="text-xs">-</p>
			</div>
			<Switch checked />
		</div>
		<div class="flex items-center justify-between">
			<div class="flex flex-col">
				<h3 class="font-medium">Twitter/X</h3>
				<p class="text-xs">-</p>
			</div>
			<Switch />
		</div>
		<div class="flex items-center justify-between">
			<div class="flex flex-col">
				<h3 class="font-medium">Linkedin</h3>
				<p class="text-xs">-</p>
			</div>
			<Switch checked />
		</div>
	</Card.Content>
</Card.Root>
