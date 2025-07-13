<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as RadioGroup from '$lib/components/ui/radio-group';
	import { Label } from '$lib/components/ui/label';
	import { Button } from '$lib/components/ui/button';
	import ArrowLeftIcon from '@lucide/svelte/icons/arrow-left';
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import PersonalDetails from '$lib/custom/property-listing/personal-details.svelte';
	import PropertyDetails from '$lib/custom/property-listing/property-details.svelte';
	import PropertyFeatures from '$lib/custom/property-listing/property-features.svelte';
	import PropertyArea from '$lib/custom/property-listing/property-area.svelte';
	import PriceDetails from '$lib/custom/property-listing/price-details.svelte';

	let checked = $state('personalDetails');

	const steps = [
		'personalDetails',
		'propertyDetails',
		'propertyFeatures',
		'propertyArea',
		'priceDetails'
	] as const;

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
					<RadioGroup.Item value="personalDetails" id="r1" />
					<Label for="r1">
						<div class="text-2xl">01</div>
						<div>
							<h5>Personal Details</h5>
							<p class="text-xs font-normal">Your Name/Email</p>
						</div>
					</Label>
				</div>
				<div class="flex items-center space-x-2">
					<RadioGroup.Item value="propertyDetails" id="r2" />
					<Label for="r2">
						<div class="text-2xl">02</div>
						<div>
							<h5>Property Details</h5>
							<p class="text-xs font-normal">Property Type</p>
						</div>
					</Label>
				</div>
				<div class="flex items-center space-x-2">
					<RadioGroup.Item value="propertyFeatures" id="r3" />
					<Label for="r3">
						<div class="text-2xl">03</div>
						<div>
							<h5>Property Features</h5>
							<p class="text-xs font-normal">Bedrooms/Floor No</p>
						</div>
					</Label>
				</div>
				<div class="flex items-center space-x-2">
					<RadioGroup.Item value="propertyArea" id="r4" />
					<Label for="r4">
						<div class="text-2xl">04</div>
						<div>
							<h5>Property Area</h5>
							<p class="text-xs font-normal">Covered Area</p>
						</div>
					</Label>
				</div>
				<div class="flex items-center space-x-2">
					<RadioGroup.Item value="priceDetails" id="r5" />
					<Label for="r5">
						<div class="text-2xl">05</div>
						<div>
							<h5>Price Details</h5>
							<p class="text-xs font-normal">Expected Price</p>
						</div>
					</Label>
				</div>
			</RadioGroup.Root>
		</div>
		<div class="flex flex-1 flex-col p-4">
			{#if checked === 'personalDetails'}
				<PersonalDetails />
			{:else if checked === 'propertyDetails'}
				<PropertyDetails />
			{:else if checked === 'propertyFeatures'}
				<PropertyFeatures />
			{:else if checked === 'propertyArea'}
				<PropertyArea />
			{:else if checked === 'priceDetails'}
				<PriceDetails />
			{/if}
			<div class="mt-4 flex flex-1 items-center justify-between">
				<Button disabled={checked === 'personalDetails'} onclick={previous}>
					<ArrowLeftIcon />
					Previous
				</Button>
				<Button disabled={checked === 'priceDetails'} onclick={next}>
					Next
					<ArrowRightIcon />
				</Button>
			</div>
		</div>
	</Card.Content>
</Card.Root>
