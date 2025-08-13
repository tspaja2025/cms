<script>
	import { Button, buttonVariants } from '$lib/components/ui/button/index';
	import * as Card from '$lib/components/ui/card/index';
	import * as Dialog from '$lib/components/ui/dialog/index';
	import { Input } from '$lib/components/ui/input/index';
	import { Label } from '$lib/components/ui/label/index';
	import * as RadioGroup from '$lib/components/ui/radio-group/index';
	import * as Select from '$lib/components/ui/select/index';
	import { Switch } from '$lib/components/ui/switch/index';
	import CreditCardIcon from '@lucide/svelte/icons/credit-card';
</script>

<Card.Root class="bg-gradient-to-t from-primary/5 to-card shadow-xs dark:bg-card">
	<Card.Header class="flex flex-col items-center">
		<CreditCardIcon />
		<Card.Title>Add New Address</Card.Title>
		<Card.Description class="text-center"
			>Ready to use form to collect user address data with validation and custom input support.</Card.Description
		>
	</Card.Header>
	<Card.Content class="flex justify-center">
		<Dialog.Root>
			<Dialog.Trigger class={buttonVariants({})}>Show</Dialog.Trigger>
			<Dialog.Content>
				<Dialog.Title>Add New Address</Dialog.Title>
				<Dialog.Description>Add address for future billing</Dialog.Description>

				<RadioGroup.Root value="authenticator_app" class="flex">
					<div class="flex flex-1 items-center space-x-2 border p-4">
						<RadioGroup.Item value="authenticator_app" id="r1" />
						<div class="flex flex-col">
							<Label for="r1">Home</Label>
							<p class="text-xs">Delivery Time (7am - 9pm)</p>
						</div>
					</div>
					<div class="flex flex-1 items-center space-x-2 border p-4">
						<RadioGroup.Item value="sms" id="r2" />
						<div class="flex flex-col">
							<Label for="r2">Office</Label>
							<p class="text-xs">Delivery Time (10am - 6pm)</p>
						</div>
					</div>
				</RadioGroup.Root>

				<div class="flex space-x-4">
					<div class="flex-1 space-y-2">
						<Label for="firstname">First Name</Label>
						<Input type="text" id="firstname" />
					</div>
					<div class="flex-1 space-y-2">
						<Label for="lastname">Last Name</Label>
						<Input type="text" id="lastname" />
					</div>
				</div>

				<div class="flex">
					<div class="flex-1 space-y-2">
						<Label for="country">Country</Label>
						<Select.Root type="single">
							<Select.Trigger class="w-full">Country</Select.Trigger>
							<Select.Content>
								<Select.Item value="france">France</Select.Item>
								<Select.Item value="russia">Russia</Select.Item>
								<Select.Item value="china">China</Select.Item>
								<Select.Item value="uk">UK</Select.Item>
								<Select.Item value="us">US</Select.Item>
							</Select.Content>
						</Select.Root>
					</div>
				</div>
				<div class="flex">
					<div class="flex-1 space-y-2">
						<Label for="address1">Address Line 1</Label>
						<Input type="text" id="address1" />
					</div>
				</div>
				<div class="flex">
					<div class="flex-1 space-y-2">
						<Label for="address2">Address Line 2</Label>
						<Input type="text" id="address2" />
					</div>
				</div>
				<div class="flex space-x-4">
					<div class="flex-1 space-y-2">
						<Label for="landmark">Landmark</Label>
						<Input type="text" id="landmark" />
					</div>
					<div class="flex-1 space-y-2">
						<Label for="city">City</Label>
						<Input type="text" id="city" />
					</div>
				</div>
				<div class="flex space-x-4">
					<div class="flex-1 space-y-2">
						<Label for="state">State</Label>
						<Input type="text" id="state" />
					</div>
					<div class="flex-1 space-y-2">
						<Label for="zipcode">Zip Code</Label>
						<Input type="text" id="zipcode" />
					</div>
				</div>
				<div class="flex items-center space-x-2">
					<Switch id="default_shipping" />
					<Label for="default_shipping">Make this default shipping address?</Label>
				</div>
				<Dialog.Footer>
					<Button type="submit">Submit</Button>
					<Button type="submit">Cancel</Button>
				</Dialog.Footer>
			</Dialog.Content>
		</Dialog.Root>
	</Card.Content>
</Card.Root>
