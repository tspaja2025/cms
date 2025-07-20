<script lang="ts">
	import * as Select from '$lib/components/ui/select/index';
	import * as RadioGroup from '$lib/components/ui/radio-group/index';
	import { Label } from '$lib/components/ui/label/index';
	import { Input } from '$lib/components/ui/input/index';
	import HouseIcon from '@lucide/svelte/icons/house';
	import UserIcon from '@lucide/svelte/icons/user';
	import CircleDollarSignIcon from '@lucide/svelte/icons/circle-dollar-sign';
</script>

<RadioGroup.Root class="flex items-start" value="default">
	<div class="flex items-center space-x-2 rounded-md border p-4">
		<RadioGroup.Item value="default" id="r1" />
		<Label for="r1">
			<div class="text-2xl"><HouseIcon /></div>
			<div>
				<h5>Percentage</h5>
				<p class="text-xs font-normal">
					Create a deal which offer uses some % off (i.e 5% OFF) on total.
				</p>
			</div>
		</Label>
	</div>
	<div class="flex items-center space-x-2 rounded-md border p-4">
		<RadioGroup.Item value="comfortable" id="r2" />
		<Label for="r2">
			<div class="text-2xl"><UserIcon /></div>
			<div>
				<h5>Flat Amount</h5>
				<p class="text-xs font-normal">
					Create a deal which offer uses flat $ off (i.e $5 OFF) on the total.
				</p>
			</div>
		</Label>
	</div>
	<div class="flex items-center space-x-2 rounded-md border p-4">
		<RadioGroup.Item value="compact" id="r3" />
		<Label for="r3">
			<div class="text-2xl"><CircleDollarSignIcon /></div>
			<div>
				<h5>Prime Member</h5>
				<p class="text-xs font-normal">
					Create prime member only deal to encourage the prime members.
				</p>
			</div>
		</Label>
	</div>
</RadioGroup.Root>

<div class="mt-4 flex flex-1 flex-col space-y-4">
	<div class="flex flex-1 space-x-4">
		<div class="flex-1 space-y-2">
			<Label for="discount">Discount</Label>
			<Input type="text" id="discount" />
			<p class="text-xs">Enter the discount percentage. 10 = 10%</p>
		</div>
		<div class="flex-1 space-y-2">
			<Label for="region">Region</Label>
			<Select.Root type="multiple">
				<Select.Trigger class="w-full">Region</Select.Trigger>
				<Select.Content>
					<Select.Item value="asia">Asia</Select.Item>
					<Select.Item value="europe">Europe</Select.Item>
					<Select.Item value="africa">Africa</Select.Item>
					<Select.Item value="australia">Australia</Select.Item>
					<Select.Item value="notrhAmerica">Notrh America</Select.Item>
					<Select.Item value="southAmerica">South America</Select.Item>
				</Select.Content>
			</Select.Root>
			<p class="text-xs">Select applicable regions for the deal</p>
		</div>
	</div>
</div>
