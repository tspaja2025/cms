<script>
	import { Input } from '$lib/components/ui/input/index';
	import { Label } from '$lib/components/ui/label/index';
	import * as RadioGroup from '$lib/components/ui/radio-group/index';
	import * as Select from '$lib/components/ui/select/index';
	import { Textarea } from '$lib/components/ui/textarea/index';
	import HouseIcon from '@lucide/svelte/icons/house';
	import CircleDollarSignIcon from '@lucide/svelte/icons/circle-dollar-sign';
</script>

<RadioGroup.Root class="flex items-start" value="default">
	<div class="flex flex-1 items-center space-x-2 rounded-md border p-4">
		<RadioGroup.Item value="default" id="r1" />
		<Label for="r1">
			<div class="text-2xl"><HouseIcon /></div>
			<div>
				<h5>Sell the property</h5>
				<p class="text-xs font-normal">Post your property for sale. Unlimited free listing.</p>
			</div>
		</Label>
	</div>
	<div class="flex flex-1 items-center space-x-2 rounded-md border p-4">
		<RadioGroup.Item value="comfortable" id="r2" />
		<Label for="r2">
			<div class="text-2xl"><CircleDollarSignIcon /></div>
			<div>
				<h5>Rent the property</h5>
				<p class="text-xs font-normal">Post your property for sale. Unlimited free listing.</p>
			</div>
		</Label>
	</div>
</RadioGroup.Root>

<div class="mt-4 flex flex-1 flex-col space-y-4">
	<div class="flex flex-1 space-x-4">
		<div class="flex-1 space-y-2">
			<Label for="propertyType">Property Type</Label>
			<Select.Root type="single">
				<Select.Trigger class="w-full">Property Type</Select.Trigger>
				<Select.Content>
					<Select.Item value="residential">Residential</Select.Item>
					<Select.Item value="commercial">Commercial</Select.Item>
				</Select.Content>
			</Select.Root>
		</div>
		<div class="flex-1 space-y-2">
			<Label for="zipcode">Zip Code</Label>
			<Input type="text" id="zipcode" />
		</div>
	</div>
	<div class="flex flex-1 space-x-4">
		<div class="flex-1 space-y-2">
			<Label for="country">Country</Label>
			<Select.Root type="single">
				<Select.Trigger class="w-full">Country</Select.Trigger>
				<Select.Content>
					<Select.Item value="uk">UK</Select.Item>
					<Select.Item value="usa">USA</Select.Item>
					<Select.Item value="india">India</Select.Item>
					<Select.Item value="australia">Australia</Select.Item>
					<Select.Item value="germany">Germany</Select.Item>
				</Select.Content>
			</Select.Root>
		</div>
		<div class="flex-1 space-y-2">
			<Label for="landmark">Landmark</Label>
			<Input type="text" id="landmark" />
		</div>
	</div>
	<div class="flex flex-1 space-x-4">
		<div class="flex-1 space-y-2">
			<Label for="city">City</Label>
			<Input type="text" id="city" />
		</div>
		<div class="flex-1 space-y-2">
			<Label for="state">State</Label>
			<Input type="text" id="state" />
		</div>
	</div>
	<div class="flex flex-1 flex-col space-y-2">
		<Label for="address">Address</Label>
		<Textarea id="address"></Textarea>
	</div>
</div>
