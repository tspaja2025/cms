<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import * as RadioGroup from '$lib/components/ui/radio-group/index';
	import { Label } from '$lib/components/ui/label/index';
	import { Button } from '$lib/components/ui/button/index';
	import ArrowLeftIcon from '@lucide/svelte/icons/arrow-left';
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import DealType from '$lib/custom/wizard/create-deal/deal-type.svelte';
	import DealDetails from '$lib/custom/wizard/create-deal/deal-details.svelte';
	import DealUsage from '$lib/custom/wizard/create-deal/deal-usage.svelte';
	import ReviewComplete from '$lib/custom/wizard/create-deal/review-complete.svelte';

	let checked = $state('dealType');

	const steps = ['dealType', 'dealDetails', 'dealUsage', 'reviewComplete'] as const;

	function next() {
		const currentIndex = steps.indexOf(checked);
		if (currentIndex < steps.length - 1) {
			checked = steps[currentIndex + 1];
		}
	}

	function previous() {
		const currentIndex = steps.indexOf(checked);
		if (currentIndex > 0) {
			checked = steps[currentIndex - 1];
		}
	}
</script>

<svelte:head>
	<title>Admin Dashboard</title>
</svelte:head>

<Card.Root class="p-0">
	<Card.Content class="flex p-0">
		<div class="flex flex-col border-r p-4">
			<RadioGroup.Root bind:value={checked}>
				<div class="flex items-center space-x-2">
					<RadioGroup.Item value="dealType" id="r1" />
					<Label for="r1">
						<div class="text-2xl">01</div>
						<div>
							<h5>Deal Type</h5>
							<p class="text-xs font-normal">Choose type of deal</p>
						</div>
					</Label>
				</div>
				<div class="flex items-center space-x-2">
					<RadioGroup.Item value="dealDetails" id="r2" />
					<Label for="r2">
						<div class="text-2xl">02</div>
						<div>
							<h5>Deal Details</h5>
							<p class="text-xs font-normal">Provide deal details</p>
						</div>
					</Label>
				</div>
				<div class="flex items-center space-x-2">
					<RadioGroup.Item value="dealUsage" id="r3" />
					<Label for="r3">
						<div class="text-2xl">03</div>
						<div>
							<h5>Deal Usage</h5>
							<p class="text-xs font-normal">Limitations & Offers</p>
						</div>
					</Label>
				</div>
				<div class="flex items-center space-x-2">
					<RadioGroup.Item value="reviewComplete" id="r4" />
					<Label for="r4">
						<div class="text-2xl">04</div>
						<div>
							<h5>Review & Complete</h5>
							<p class="text-xs font-normal">Launch a deal</p>
						</div>
					</Label>
				</div>
			</RadioGroup.Root>
		</div>
		<div class="flex flex-1 flex-col p-4">
			{#if checked === 'dealType'}
				<DealType />
			{:else if checked === 'dealDetails'}
				<DealDetails />
			{:else if checked === 'dealUsage'}
				<DealUsage />
			{:else if checked === 'reviewComplete'}
				<ReviewComplete />
			{/if}
			<div class="mt-4 flex flex-1 items-center justify-between">
				<Button disabled={checked === 'dealType'} onclick={previous}>
					<ArrowLeftIcon />
					Previous
				</Button>
				<Button disabled={checked === 'reviewComplete'} onclick={next}>
					Next
					<ArrowRightIcon />
				</Button>
			</div>
		</div>
	</Card.Content>
</Card.Root>
