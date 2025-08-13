<script>
	import { Input } from '$lib/components/ui/input/index';
	import { Label } from '$lib/components/ui/label/index';
	import * as RadioGroup from '$lib/components/ui/radio-group/index';
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
				<h5>I am the Builder</h5>
				<p class="text-xs font-normal">
					List property as Builder, list your project and get highest reach.
				</p>
			</div>
		</Label>
	</div>
	<div class="flex items-center space-x-2 rounded-md border p-4">
		<RadioGroup.Item value="comfortable" id="r2" />
		<Label for="r2">
			<div class="text-2xl"><UserIcon /></div>
			<div>
				<h5>I am the Owner</h5>
				<p class="text-xs font-normal">
					Submit property as an Individual. Lease, Rent or Sell at the best price.
				</p>
			</div>
		</Label>
	</div>
	<div class="flex items-center space-x-2 rounded-md border p-4">
		<RadioGroup.Item value="compact" id="r3" />
		<Label for="r3">
			<div class="text-2xl"><CircleDollarSignIcon /></div>
			<div>
				<h5>I am the broker</h5>
				<p class="text-xs font-normal">
					Earn highest commission by listing your clients properties at the best price.
				</p>
			</div>
		</Label>
	</div>
</RadioGroup.Root>

<div class="mt-4 flex flex-1 flex-col space-y-4">
	<div class="flex flex-1 space-x-4">
		<div class="flex-1 space-y-2">
			<Label for="firstname">First Name</Label>
			<Input type="text" id="firstname" />
		</div>
		<div class="flex-1 space-y-2">
			<Label for="lastname">Last Name</Label>
			<Input type="text" id="lastname" />
		</div>
	</div>
	<div class="flex flex-1 space-x-4">
		<div class="flex-1 space-y-2">
			<Label for="username">Username</Label>
			<Input type="text" id="username" autocomplete="username" />
		</div>
		<div class="flex-1 space-y-2">
			<Label for="password">Password</Label>
			<Input type="password" id="password" />
		</div>
	</div>
	<div class="flex flex-1 space-x-4">
		<div class="flex-1 space-y-2">
			<Label for="email">Email</Label>
			<Input type="email" id="email" autocomplete="email" />
		</div>
		<div class="flex-1 space-y-2">
			<Label for="contact">Contact</Label>
			<Input type="tel" id="contact" />
		</div>
	</div>
</div>
