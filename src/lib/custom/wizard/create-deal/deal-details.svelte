<script lang="ts">
	import * as Select from '$lib/components/ui/select/index';
	import { Label } from '$lib/components/ui/label/index';
	import { Input } from '$lib/components/ui/input/index';
	import { Checkbox } from '$lib/components/ui/checkbox/index';
</script>

<div class="mt-4 flex flex-1 flex-col space-y-4">
	<div class="flex flex-1 space-x-4">
		<div class="flex-1 space-y-2">
			<Label for="discount">Deal Title</Label>
			<Input type="text" id="discount" />
		</div>
		<div class="flex-1 space-y-2">
			<Label for="discount">Deal Code</Label>
			<Input type="text" id="discount" />
		</div>
	</div>
	<div class="flex flex-1 space-x-4">
		<div class="flex-1 space-y-2">
			<Label for="discount">Deal Description</Label>
			<Input type="text" id="discount" />
		</div>
		<div class="flex-1 space-y-2">
			<Label for="discount">Offered Items</Label>
			<Select.Root type="multiple">
				<Select.Trigger class="w-full">Offered Items</Select.Trigger>
				<Select.Content>
					<Select.Item value="appleIphoneTwelvePro">Apple iPhone 12 Pro</Select.Item>
					<Select.Item value="appleIphoneTwelveMini">Apple iPhone 12 Mini</Select.Item>
					<Select.Item value="appleIphoneTwelve">Apple iPhone 12</Select.Item>
					<Select.Item value="appleIphoneElevenProMax">Apple iPhone 11 Pro Max</Select.Item>
				</Select.Content>
			</Select.Root>
		</div>
	</div>
	<div class="flex flex-1 space-x-4">
		<div class="flex-1 space-y-2">
			<Label for="discount">Deal Duration</Label>
			<Input type="text" id="discount" />
		</div>
		<div class="flex-1 space-y-2">
			<Label for="discount">Cart Condition</Label>
			<Select.Root type="multiple">
				<Select.Trigger class="w-full">Cart Condition</Select.Trigger>
				<Select.Content>
					<Select.Item value="cartMust">Cart must contain all selected Downloads</Select.Item>
					<Select.Item value="cartNeeds">
						Cart Needs one or more of the selected Downloads
					</Select.Item>
				</Select.Content>
			</Select.Root>
		</div>
	</div>
	<div class="flex flex-1 flex-col space-y-4">
		<Label>Notify Users</Label>
		<div class="flex flex-1 items-center space-x-2">
			<Checkbox id="email" />
			<Label for="email">Email</Label>
			<Checkbox id="sms" />
			<Label for="sms">SMS</Label>
			<Checkbox id="pushNotification" />
			<Label for="pushNotification">Push Notification</Label>
		</div>
	</div>
</div>
