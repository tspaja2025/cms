<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import * as Select from '$lib/components/ui/select/index';
	import { Button } from '$lib/components/ui/button/index';
	import { Input } from '$lib/components/ui/input/index';
	import { Label } from '$lib/components/ui/label/index';
	import { Checkbox } from '$lib/components/ui/checkbox/index';
	import FormField from './form-field.svelte';

	let confirmDelete = $state(false);

    const selectData = {
        country: [
            {trigger: "Country", children: [
{ name: "Australia", value: "australia" },
{ name: "Finland", value: "finland" },
{ name: "Germany", value: "germany" },
{ name: "UK", value: "uk" },
{ name: "USA", value: "usa" },
            ]}
        ],
        timeZone: [
            {trigger: "TimeZone", children: [
{ name: "(GMT-12:00) International Date Line West", value: "international" },
{ name: "(GMT-11:00) Midway Island, Samoa", value: "midway" },
{ name: "(GMT-10:00) Hawaii", value: "hawaii" },
{ name: "(GMT-09:00) Alaska", value: "alaska" },
{ name: "(GMT-0:800) Pacific Time (US & Canada)", value: "pacific" },
            ]}
        ],
    }
</script>

<Card.Root>
	<Card.Content class="flex space-x-4">
		<div class="flex-1 space-y-4">
            <FormField label="First Name" id="firstname"/>
            <FormField label="Email" id="email"/>
            <FormField label="Phone Number" id="phone_number"/>
            <FormField label="State" id="state"/>
            {#each selectData  as {name, value, children}, index (index)}
			<Select.Root type="single">
				<Select.Trigger class="w-full">{name}</Select.Trigger>
                    <Select.Content>
                        {#each children as {childName, childValue}, index (index)}
                            <Select.Item value={childValue}>{childName}</Select.Item>
                        {/each}
                    </Select.Content>
			    </Select.Root>
                {/each}
			<Select.Root type="single">
				<Select.Trigger class="w-full">TimeZone</Select.Trigger>
				<Select.Content>
					<Select.Item value="international">(GMT-12:00) International Date Line West</Select.Item>
					<Select.Item value="midway">(GMT-11:00) Midway Island, Samoa</Select.Item>
					<Select.Item value="hawaii">(GMT-10:00) Hawaii</Select.Item>
					<Select.Item value="alaska">(GMT-09:00) Alaska</Select.Item>
					<Select.Item value="pacific">(GMT-0:800) Pacific Time (US & Canada)</Select.Item>
				</Select.Content>
			</Select.Root>
		</div>
		<div class="flex-1 space-y-4">
			<div class="space-y-2">
				<Label for="lastname">Last Name</Label>
				<Input type="text" id="lastname" />
			</div>
			<div class="space-y-2">
				<Label for="organisation">Organization</Label>
				<Input type="text" id="organisation" />
			</div>
			<div class="space-y-2">
				<Label for="address">Address</Label>
				<Input type="text" id="address" />
			</div>
			<div class="space-y-2">
				<Label for="zipcode">Zip Code</Label>
				<Input type="text" id="zipcode" />
			</div>
			<Select.Root type="multiple">
				<Select.Trigger class="w-full">Language</Select.Trigger>
				<Select.Content>
					<Select.Item value="Arabic">Arabic</Select.Item>
					<Select.Item value="English">English</Select.Item>
					<Select.Item value="French">French</Select.Item>
					<Select.Item value="German">German</Select.Item>
					<Select.Item value="Portuguese">Portuguese</Select.Item>
				</Select.Content>
			</Select.Root>
			<Select.Root type="single">
				<Select.Trigger class="w-full">Currency</Select.Trigger>
				<Select.Content>
					<Select.Item value="EUR">EUR</Select.Item>
					<Select.Item value="USD">USD</Select.Item>
					<Select.Item value="Pound">Pound</Select.Item>
					<Select.Item value="Bitcoin">Bitcoin</Select.Item>
				</Select.Content>
			</Select.Root>
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
			>Delete Account</Button
		>
	</Card.Footer>
</Card.Root>
