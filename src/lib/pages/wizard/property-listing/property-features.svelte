<script>
	import { Input } from '$lib/components/ui/input/index';
	import { Label } from '$lib/components/ui/label/index';
	import * as RadioGroup from '$lib/components/ui/radio-group/index';
	import * as Select from '$lib/components/ui/select/index';
</script>

<div class="mt-4 flex flex-1 flex-col space-y-4">
	<div class="flex flex-1 space-x-4">
		<div class="flex-1 space-y-2">
			<Label for="bedrooms">Bedrooms</Label>
			<Input type="text" id="bedrooms" />
		</div>
		<div class="flex-1 space-y-2">
			<Label for="floorno">Floor No</Label>
			<Input type="text" id="floorno" />
		</div>
	</div>
	<div class="flex flex-1 space-x-4">
		<div class="flex-1 space-y-2">
			<Label for="Bathroom">Bathroom</Label>
			<Input type="text" id="Bathroom" />
		</div>
		<div class="flex-1 space-y-2">
			<Label for="furnishedStatus">Furnished Status</Label>
			<Select.Root type="single">
				<Select.Trigger class="w-full">Furnished Status</Select.Trigger>
				<Select.Content>
					<Select.Item value="fullyFurnished">Fully Furnished</Select.Item>
					<Select.Item value="furnished">Furnished</Select.Item>
					<Select.Item value="semiFurnished">Semi Furnished</Select.Item>
					<Select.Item value="unFurnished">UnFurnished</Select.Item>
				</Select.Content>
			</Select.Root>
		</div>
	</div>
	<div class="flex flex-1 flex-col space-y-2">
		<Label for="furnishingDetails">Furnishing Details</Label>
		<Select.Root type="multiple">
			<Select.Trigger class="w-full">Furnishing Details</Select.Trigger>
			<Select.Content>
				<Select.Item value="ac">AC</Select.Item>
				<Select.Item value="tv">TV</Select.Item>
				<Select.Item value="ro">RO</Select.Item>
				<Select.Item value="bed">Bed</Select.Item>
				<Select.Item value="wifi">WIFI</Select.Item>
				<Select.Item value="sofa">Sofa</Select.Item>
				<Select.Item value="fridge">Fridge</Select.Item>
				<Select.Item value="cupboard">Cupboard</Select.Item>
				<Select.Item value="microwave">Microwave</Select.Item>
				<Select.Item value="diningTable">Dining Table</Select.Item>
				<Select.Item value="washingMachine">Washing Machine</Select.Item>
			</Select.Content>
		</Select.Root>
	</div>
</div>

<div class="mt-4 flex">
	<div class="flex flex-1 flex-col space-y-2">
		<p>Is There Any Common Area</p>
		<RadioGroup.Root value="default">
			<div class="flex items-center space-x-2">
				<RadioGroup.Item value="default" id="r1" />
				<Label for="r1">Yes</Label>
			</div>
			<div class="flex items-center space-x-2">
				<RadioGroup.Item value="comfortable" id="r2" />
				<Label for="r2">No</Label>
			</div>
		</RadioGroup.Root>
	</div>
	<div class="flex flex-1 flex-col space-y-2">
		<p>Is There Any Attached Balcony</p>
		<RadioGroup.Root value="default">
			<div class="flex items-center space-x-2">
				<RadioGroup.Item value="default" id="r1" />
				<Label for="r1">Yes</Label>
			</div>
			<div class="flex items-center space-x-2">
				<RadioGroup.Item value="comfortable" id="r2" />
				<Label for="r2">No</Label>
			</div>
		</RadioGroup.Root>
	</div>
</div>
