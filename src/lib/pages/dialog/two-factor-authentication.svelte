<script>
	import { Button, buttonVariants } from '$lib/components/ui/button/index';
	import * as Card from '$lib/components/ui/card/index';
	import * as Dialog from '$lib/components/ui/dialog/index';
	import { Label } from '$lib/components/ui/label/index';
	import * as RadioGroup from '$lib/components/ui/radio-group/index';
	import CreditCardIcon from '@lucide/svelte/icons/credit-card';
</script>

<Card.Root class="bg-gradient-to-t from-primary/5 to-card shadow-xs dark:bg-card">
	<Card.Header class="flex flex-col items-center">
		<CreditCardIcon />
		<Card.Title>Two Factor Authentication</Card.Title>
		<Card.Description class="text-center"
			>Enhance your application security by enabling two factor authentication.</Card.Description
		>
	</Card.Header>
	<Card.Content class="flex justify-center">
		<Dialog.Root>
			<Dialog.Trigger class={buttonVariants({})}>Show</Dialog.Trigger>
			<Dialog.Content>
				<Dialog.Title>Select Authentication Method</Dialog.Title>
				<Dialog.Description
					>You also need to select a method by which the proxy authenticates to the directory serve.</Dialog.Description
				>
				<RadioGroup.Root value="authenticator_app">
					<div class="flex items-center space-x-2 border p-4">
						<RadioGroup.Item value="authenticator_app" id="r1" />
						<div class="flex flex-col">
							<Label for="r1">Auhenticator Apps</Label>
							<p class="text-xs">
								Get code from an app like Google Authenticator or Microsoft Authenticator.
							</p>
						</div>
					</div>
					<div class="flex items-center space-x-2 border p-4">
						<RadioGroup.Item value="sms" id="r2" />
						<div class="flex flex-col">
							<Label for="r2">SMS</Label>
							<p class="text-xs">
								Get code from an app like Google Authenticator or Microsoft Authenticator.
							</p>
						</div>
					</div>
				</RadioGroup.Root>
				<Dialog.Footer>
					<Button>Continue</Button>
				</Dialog.Footer>
			</Dialog.Content>
		</Dialog.Root>
	</Card.Content>
</Card.Root>
