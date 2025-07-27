<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import { Separator } from '$lib/components/ui/separator/index';
</script>

<Card.Root class="shadow-none">
	<Card.Header>
		<Card.Title>Activity Timeline</Card.Title>
	</Card.Header>
	<Card.Content>
		<div class="relative flex h-16 flex-col">
			<Separator orientation="vertical" />
			<div class="absolute -left-1.5 h-3 w-3 rounded-full bg-purple-500"></div>
			<div class="absolute">
				<div class="-mt-1.5 flex flex-col px-4">
					<h3 class="font-medium">12 Invoices have been paid</h3>
					<p class="text-sm">Invoices have been paid to the company</p>
				</div>
			</div>
		</div>
		<div class="relative flex h-16 flex-col">
			<Separator orientation="vertical" />
			<div class="absolute -left-1.5 h-3 w-3 rounded-full bg-green-500"></div>
			<div class="absolute">
				<div class="-mt-1.5 flex flex-col px-4">
					<h3 class="font-medium">Client Meeting</h3>
					<p class="text-sm">Project meeting with john @10:15am</p>
				</div>
			</div>
		</div>
		<div class="relative flex h-16 flex-col">
			<div class="absolute -left-1.5 h-3 w-3 rounded-full bg-blue-500"></div>
			<div class="absolute">
				<div class="-mt-1.5 flex flex-col px-4">
					<h3 class="font-medium">Create a new project for client</h3>
					<p class="text-sm">6 team members in a project</p>
				</div>
			</div>
		</div>
	</Card.Content>
</Card.Root>
