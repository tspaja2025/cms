<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import * as Select from '$lib/components/ui/select/index';
	import { Button } from '$lib/components/ui/button/index';
	import { Label } from '$lib/components/ui/label/index';
	import { Checkbox } from '$lib/components/ui/checkbox/index';
	import FormField from '$lib/custom/pages/user-settings/form-field.svelte';
	import { countryTimeZone, languageCurrency } from '$lib/custom/pages/user-settings/store/data';

	let confirmDelete = $state(false);
</script>

<Card.Root>
	<Card.Content class="flex space-x-4">
		<div class="flex-1 space-y-4">
			<FormField label="First Name" id="firstname" />
			<FormField label="Email" id="email" />
			<FormField label="Phone Number" id="phone_number" />
			<FormField label="State" id="state" />
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
			<FormField label="Last Name" id="lastname" />
			<FormField label="Organization" id="organization" />
			<FormField label="Address" id="address" />
			<FormField label="Zip Code" id="zip_code" />
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
