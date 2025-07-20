<script lang="ts">
	import * as Select from '$lib/components/ui/select/index';
	import { Label } from '$lib/components/ui/label/index';
	import { Input } from '$lib/components/ui/input/index';
	import { Switch } from '$lib/components/ui/switch/index';
</script>

<div class="mt-4 flex flex-1 flex-col space-y-4">
	<div class="flex flex-1 space-x-4">
		<div class="flex-1 space-y-2">
			<Label for="discount">User Type</Label>
			<Select.Root type="multiple">
				<Select.Trigger class="w-full">User Type</Select.Trigger>
				<Select.Content>
					<Select.Item value="all">All</Select.Item>
					<Select.Item value="registered">Registered</Select.Item>
					<Select.Item value="unregistered">Unregistered</Select.Item>
					<Select.Item value="primeMembers">Prime Members</Select.Item>
				</Select.Content>
			</Select.Root>
		</div>
		<div class="flex-1 space-y-2">
			<Label for="maxUsers">Max Users</Label>
			<Input type="text" id="maxUsers" />
		</div>
	</div>
	<div class="flex flex-1 space-x-4">
		<div class="flex-1 space-y-2">
			<Label for="minimumCartAmount">Minimum Cart Amount</Label>
			<Input type="text" id="minimumCartAmount" />
		</div>
		<div class="flex-1 space-y-2">
			<Label for="PromotionalFee">Promotional Fee</Label>
			<Input type="text" id="PromotionalFee" />
		</div>
	</div>
	<div class="flex flex-1 space-x-4">
		<div class="flex-1 space-y-2">
			<Label for="paymentMethod">Payment Method</Label>
			<Select.Root type="multiple">
				<Select.Trigger class="w-full">Payment Method</Select.Trigger>
				<Select.Content>
					<Select.Item value="any">Any</Select.Item>
					<Select.Item value="creditCard">Credit Card</Select.Item>
					<Select.Item value="netBanking">Net Banking</Select.Item>
					<Select.Item value="wallet">Wallet</Select.Item>
				</Select.Content>
			</Select.Root>
		</div>
		<div class="flex-1 space-y-2">
			<Label for="dealStatus">Deal Status</Label>
			<Select.Root type="multiple">
				<Select.Trigger class="w-full">Deal Status</Select.Trigger>
				<Select.Content>
					<Select.Item value="active">Active</Select.Item>
					<Select.Item value="inactive">Inactive</Select.Item>
					<Select.Item value="suspended">Suspended</Select.Item>
					<Select.Item value="abandoned">Abandoned</Select.Item>
				</Select.Content>
			</Select.Root>
		</div>
	</div>
	<div class="flex flex-1 space-x-4">
		<div class="flex flex-1 items-center space-x-2">
			<Switch id="limit" />
			<Label for="limit">Limit this discount to a single-use per customer?</Label>
		</div>
	</div>
</div>
