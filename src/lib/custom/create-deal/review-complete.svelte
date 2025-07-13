<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { Switch } from '$lib/components/ui/switch';
	import { Badge } from '$lib/components/ui/badge';
</script>

<h3 class="text-2xl font-medium">Almost done!</h3>
<p>Confirm your deal details information and submit to create it.</p>

<div class="mt-4 flex flex-1 flex-col space-y-4">
	<ul>
		<li class="flex">
			<div class="w-32 font-medium">Deal Type</div>
			<div>Percentage</div>
		</li>
		<li class="flex">
			<div class="w-32 font-medium">Amount</div>
			<div>Percentage</div>
		</li>
		<li class="flex">
			<div class="w-32 font-medium">Deal Code</div>
			<div><Badge>25PEROFF</Badge></div>
		</li>
		<li class="flex">
			<div class="w-32 font-medium">Deal Title</div>
			<div>Black friday sale, 25% OFF</div>
		</li>
		<li class="flex">
			<div class="w-32 font-medium">Deal Duration</div>
			<div>2021-07-14 to 2021-07-30</div>
		</li>
	</ul>
	<div class="flex flex-1 space-x-4">
		<div class="flex flex-1 items-center space-x-2">
			<Switch id="limit" />
			<Label for="limit">I have confirmed the deal details.</Label>
		</div>
	</div>
</div>
