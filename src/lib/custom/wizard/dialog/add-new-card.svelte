<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import * as Dialog from '$lib/components/ui/dialog/index';
	import { Input } from '$lib/components/ui/input/index';
	import { Label } from '$lib/components/ui/label/index';
	import { Button, buttonVariants } from '$lib/components/ui/button/index';
	import { Switch } from '$lib/components/ui/switch/index';
	import CreditCardIcon from '@lucide/svelte/icons/credit-card';
</script>

<Card.Root class="shadow-none">
	<Card.Header class="flex flex-col items-center">
		<CreditCardIcon />
		<Card.Title>Add New Card</Card.Title>
		<Card.Description class="text-center"
			>Quickly collect the credit card details, built in input mask and form validation support.</Card.Description
		>
	</Card.Header>
	<Card.Content class="flex justify-center">
		<Dialog.Root>
			<Dialog.Trigger class={buttonVariants({})}>Show</Dialog.Trigger>
			<Dialog.Content>
				<Dialog.Title>Add New Card</Dialog.Title>
				<Dialog.Description>Add card for future billing.</Dialog.Description>

				<div class="space-y-2">
					<Label for="card_number">Card Number</Label>
					<Input type="text" id="card_number" />
				</div>
				<div class="flex space-x-4">
					<div class="space-y-2">
						<Label for="name_on_card">Name on Card</Label>
						<Input type="text" id="name_on_card" />
					</div>
					<div class="space-y-2">
						<Label for="expiration">Expiration</Label>
						<Input type="text" id="expiration" />
					</div>
					<div class="space-y-2">
						<Label for="cvv">CVV</Label>
						<Input type="text" id="cvv" />
					</div>
				</div>
				<div class="flex items-center space-x-2">
					<Switch id="save_card" />
					<Label for="save_card">Save Card for future billing?</Label>
				</div>
				<Dialog.Footer>
					<Button type="submit">Submit</Button>
					<Button type="submit">Cancel</Button>
				</Dialog.Footer>
			</Dialog.Content>
		</Dialog.Root>
	</Card.Content>
</Card.Root>
