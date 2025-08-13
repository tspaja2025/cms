<script lang="ts">
	import { Button, buttonVariants } from '$lib/components/ui/button/index';
	import { Checkbox } from '$lib/components/ui/checkbox/index';
	import * as Dialog from '$lib/components/ui/dialog/index';
	import { Input } from '$lib/components/ui/input/index';
	import { Label } from '$lib/components/ui/label/index';
	import * as Select from '$lib/components/ui/select/index';
	import { Textarea } from '$lib/components/ui/textarea/index';
	import { categories } from '$lib/store';
	import PlusIcon from '@lucide/svelte/icons/plus';

	let eventValue = $state('');
	const eventTrigger = $derived(
		categories.find((v) => v.value === eventValue)?.label ?? 'Select Category'
	);
</script>

<Dialog.Root>
	<Dialog.Trigger class="w-full {buttonVariants({ variant: 'default' })}">
		<PlusIcon class="h-5 w-5" />
		Add Event
	</Dialog.Trigger>

	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>New Event</Dialog.Title>
		</Dialog.Header>

		<form class="space-y-4">
			<div class="space-y-2">
				<Label for="title">Title</Label>
				<Input id="title" placeholder="Event title" required />
			</div>

			<div class="space-y-2">
				<Label for="description">Description (optional)</Label>
				<Textarea id="description" placeholder="Add a description" rows={2} />
			</div>

			<div class="flex items-center">
				<Checkbox id="all-day" />
				<Label for="all-day" class="ml-2">All day</Label>
			</div>

			<div class="grid grid-cols-2 gap-4">
				<div class="space-y-2">
					<Label for="start-date">Start</Label>
					<Input type="datetime-local" id="start-date" />
				</div>

				<div class="space-y-2">
					<Label for="end-date">End</Label>
					<Input type="datetime-local" id="end-date" />
				</div>
			</div>

			<div class="space-y-2">
				<Label for="date">Date</Label>
				<Input type="date" id="date" />
			</div>

			<div class="space-y-2">
				<Label for="category">Category</Label>
				<Select.Root type="single" bind:value={eventValue}>
					<Select.Trigger>{eventTrigger}</Select.Trigger>
					<Select.Content>
						{#each categories as category, index (index)}
							<Select.Item value={category.value}>
								{category.label}
							</Select.Item>
						{/each}
					</Select.Content>
				</Select.Root>
			</div>

			<div class="flex justify-end gap-2 pt-2">
				<Button type="submit" variant="secondary">Cancel</Button>
				<Button type="submit">Create Event</Button>
			</div>
		</form>
	</Dialog.Content>
</Dialog.Root>
