<script>
	import { Button } from '$lib/components/ui/button/index';
	import * as Card from '$lib/components/ui/card/index';
	import { Checkbox } from '$lib/components/ui/checkbox/index';
	import { Label } from '$lib/components/ui/label/index';
	import * as Select from '$lib/components/ui/select/index';
	import Field from '$lib/custom/input-field/field.svelte';
	import { countryTimeZone, languageCurrency } from '$lib/store';

	let confirmDelete = $state(false);
</script>

<Card.Root
	class="bg-gradient-to-t from-primary/5 to-card
shadow-xs dark:bg-card"
>
	<Card.Content class="flex space-x-4">
		<div class="flex-1 space-y-4">
			<Field label="First Name" id="firstname" />
			<Field label="Email" id="email" autocomplete="email" />
			<Field label="Phone Number" id="phone_number" />
			<Field label="State" id="state" />
			{#each countryTimeZone as item, index (index)}
				<Select.Root type="single">
					<Select.Trigger class="w-full">{item.trigger}</Select.Trigger>
					<Select.Content>
						{#each item.children as child, index (index)}
							<Select.Item value={child.value}>{child.name}</Select.Item>
						{/each}
					</Select.Content>
				</Select.Root>
			{/each}
		</div>
		<div class="flex-1 space-y-4">
			<Field label="Last Name" id="lastname" />
			<Field label="Organization" id="organization" autocomplete="organization" />
			<Field label="Address" id="address" autocomplete="address-line1" />
			<Field label="Zip Code" id="zip_code" />
			{#each languageCurrency as item, index (index)}
				<Select.Root type={item.type}>
					<Select.Trigger class="w-full">{item.trigger}</Select.Trigger>
					<Select.Content>
						{#each item.children as child, index (index)}
							<Select.Item value={child.value}>{child.name}</Select.Item>
						{/each}
					</Select.Content>
				</Select.Root>
			{/each}
		</div>
	</Card.Content>
	<Card.Footer class="space-x-4">
		<Button>Save Changes</Button>
		<Button variant="secondary">Reset</Button>
	</Card.Footer>
</Card.Root>
<Card.Root>
	<Card.Header>
		<Card.Title>Delete Account</Card.Title>
	</Card.Header>
	<Card.Content class="flex space-x-2">
		<Checkbox id="confirm" bind:checked={confirmDelete} />
		<Label for="confirm">I confirm my account deletion</Label>
	</Card.Content>
	<Card.Footer>
		<Button
			variant="destructive"
			class={confirmDelete ? '' : 'cursor-not-allowed bg-red-100 hover:bg-red-100'}
		>
			Delete Account
		</Button>
	</Card.Footer>
</Card.Root>
