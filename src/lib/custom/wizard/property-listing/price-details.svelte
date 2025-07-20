<script lang="ts">
	import * as RadioGroup from '$lib/components/ui/radio-group/index';
	import * as Select from '$lib/components/ui/select/index';
	import { Label } from '$lib/components/ui/label/index';
	import { Input } from '$lib/components/ui/input/index';
	import { Checkbox } from '$lib/components/ui/checkbox/index';
</script>

<div class="mt-4 flex flex-1 flex-col space-y-4">
	<div class="flex flex-1 space-x-4">
		<div class="flex-1 space-y-2">
			<Label for="expectedPrice">Expected Price</Label>
			<Input type="text" id="expectedPrice" />
		</div>
		<div class="flex-1 space-y-2">
			<Label for="pricePerSQFT">Price Per SQFT</Label>
			<Input type="text" id="pricePerSQFT" />
		</div>
	</div>
	<div class="flex flex-1 space-x-4">
		<div class="flex-1 space-y-2">
			<Label for="maintenanceCharge">Maintenance Charge</Label>
			<Input type="text" id="maintenanceCharge" />
		</div>
		<div class="flex-1 space-y-2">
			<Label for="maintenancePeriod">Maintenance Period</Label>
			<Select.Root type="single">
				<Select.Trigger class="w-full">Maintenance Period</Select.Trigger>
				<Select.Content>
					<Select.Item value="monthly">Monthly</Select.Item>
					<Select.Item value="quarterly">Quarterly</Select.Item>
					<Select.Item value="halfYearly">Half Yearly</Select.Item>
					<Select.Item value="yearly">Yearly</Select.Item>
					<Select.Item value="onetime">One-time</Select.Item>
				</Select.Content>
			</Select.Root>
		</div>
	</div>
	<div class="flex flex-1 space-x-4">
		<div class="flex-1 space-y-2">
			<Label for="bookingTokenAmount">Booking/Token Amount</Label>
			<Input type="text" id="bookingTokenAmount" />
		</div>
		<div class="flex-1 space-y-2">
			<Label for="otherAmount">Other Amount</Label>
			<Input type="text" id="otherAmount" />
		</div>
	</div>
</div>

<div class="mt-4 flex">
	<div class="flex flex-1 flex-col space-y-2">
		<p>Show Price As</p>
		<RadioGroup.Root value="default">
			<div class="flex items-center space-x-2">
				<RadioGroup.Item value="default" id="r1" />
				<Label for="r1">Negotiable</Label>
			</div>
			<div class="flex items-center space-x-2">
				<RadioGroup.Item value="comfortable" id="r2" />
				<Label for="r2">Call For Price</Label>
			</div>
		</RadioGroup.Root>
	</div>
	<div class="flex flex-1 flex-col space-y-2">
		<p>Price Includes</p>
		<div class="flex items-center space-x-2">
			<Checkbox value="default" id="r1" />
			<Label for="r1">Car Parking</Label>
		</div>
		<div class="flex items-center space-x-2">
			<Checkbox value="comfortable" id="r2" />
			<Label for="r2">Club Membership</Label>
		</div>
	</div>
</div>
