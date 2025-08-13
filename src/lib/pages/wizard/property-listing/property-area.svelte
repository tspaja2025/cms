<script>
	import { Input } from '$lib/components/ui/input/index';
	import { Label } from '$lib/components/ui/label/index';
	import * as RadioGroup from '$lib/components/ui/radio-group/index';
</script>

<div class="mt-4 flex flex-1 flex-col space-y-4">
	<div class="flex flex-1 space-x-4">
		<div class="flex-1 space-y-2">
			<Label for="totalArea">Total Area</Label>
			<Input type="text" id="totalArea" />
		</div>
		<div class="flex-1 space-y-2">
			<Label for="carpetArea">Carpet Area</Label>
			<Input type="text" id="carpetArea" />
		</div>
	</div>
	<div class="flex flex-1 space-x-4">
		<div class="flex-1 space-y-2">
			<Label for="pPlotArea">Plot Area</Label>
			<Input type="text" id="plotArea" />
		</div>
		<div class="flex-1 space-y-2">
			<Label for="availableFrom">Available From</Label>
			<Input type="text" id="availableFrom" />
		</div>
	</div>
</div>

<div class="mt-4 flex">
	<div class="flex flex-1 flex-col space-y-2">
		<p>Possession Status</p>
		<RadioGroup.Root value="default">
			<div class="flex items-center space-x-2">
				<RadioGroup.Item value="default" id="r1" />
				<Label for="r1">Under Construction</Label>
			</div>
			<div class="flex items-center space-x-2">
				<RadioGroup.Item value="comfortable" id="r2" />
				<Label for="r2">Raedy to Move</Label>
			</div>
		</RadioGroup.Root>
	</div>
	<div class="flex flex-1 flex-col space-y-2">
		<p>Transaction Type</p>
		<RadioGroup.Root value="default">
			<div class="flex items-center space-x-2">
				<RadioGroup.Item value="default" id="r1" />
				<Label for="r1">New Property</Label>
			</div>
			<div class="flex items-center space-x-2">
				<RadioGroup.Item value="comfortable" id="r2" />
				<Label for="r2">Resale</Label>
			</div>
		</RadioGroup.Root>
	</div>
</div>
<div class="mt-4 flex">
	<div class="flex flex-1 flex-col space-y-2">
		<p>Is Property Facing Main Road</p>
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
		<p>Gated Colony</p>
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
