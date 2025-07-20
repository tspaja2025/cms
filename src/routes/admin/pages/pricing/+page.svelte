<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import { Badge } from '$lib/components/ui/badge/index';
	import { Button } from '$lib/components/ui/button/index';
	import { Switch } from '$lib/components/ui/switch/index';
</script>

<Card.Root>
	<Card.Header class="flex flex-col items-center justify-center">
		<Card.Title>Pricing Plans</Card.Title>
		<Card.Description class="text-center"
			>All plans include 40+ advanced tools and features to boost your product. Choose the best plan
			to fit your needs.</Card.Description
		>
		<div class="flex items-center gap-2">
			Monthly <Switch /> Annually
		</div>
	</Card.Header>
	<Card.Content class="flex space-x-4">
		<Card.Root class="flex-1 pb-2 shadow-none">
			<Card.Header class="flex flex-col items-center justify-center">
				<Card.Title>Basic</Card.Title>
				<Card.Description class="text-center">A simple start for everyone</Card.Description>
			</Card.Header>
			<Card.Content>
				<ul class="list-inside list-disc text-sm">
					<li>100 responses a month</li>
					<li>Unlimited forms and surveys</li>
					<li>Unlimited Fields</li>
					<li>Basic form creation tools</li>
					<li>Up to 2 subdomains</li>
				</ul>
			</Card.Content>
			<Card.Footer class="px-2">
				<Button variant="ghost" class="w-full">Your Current Plan</Button>
			</Card.Footer>
		</Card.Root>
		<Card.Root class="flex-1 border-purple-500 pb-2 shadow-none">
			<Card.Header class="relative flex flex-col items-center justify-center">
				<Card.Title>Standard</Card.Title>
				<Card.Description class="text-center">For small to medium businesses</Card.Description>
				<Badge class="absolute -top-6 right-0 w-full rounded-b-none bg-purple-500">Popular</Badge>
			</Card.Header>
			<Card.Content>
				<ul class="list-inside list-disc text-sm">
					<li>Unlimited Responses</li>
					<li>Unlimited forms and surveys</li>
					<li>Instagram profile page</li>
					<li>Google Docs integration</li>
					<li>Custom "Thank you" page</li>
				</ul>
			</Card.Content>
			<Card.Footer class="px-2">
				<Button class="w-full bg-purple-500">Upgrade</Button>
			</Card.Footer>
		</Card.Root>
		<Card.Root class="flex-1 pb-2 shadow-none">
			<Card.Header class="flex flex-col items-center justify-center">
				<Card.Title>Enterprise</Card.Title>
				<Card.Description class="text-center">Solution for big organizations</Card.Description>
			</Card.Header>
			<Card.Content>
				<ul class="list-inside list-disc text-sm">
					<li>Paypal payments</li>
					<li>Logic Jumps</li>
					<li>File upload with 5GB storage</li>
					<li>Custom domain support</li>
					<li>Stripe integration</li>
				</ul>
			</Card.Content>
			<Card.Footer class="px-2">
				<Button variant="outline" class="w-full">Upgrade</Button>
			</Card.Footer>
		</Card.Root>
	</Card.Content>
</Card.Root>
