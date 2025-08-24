<script>
	import { Button } from '$lib/components/ui/button/index';
	import * as Card from '$lib/components/ui/card/index';
	import { connections } from '$lib/store';
</script>

<Card.Root
	class="bg-gradient-to-t from-primary/5 to-card
shadow-xs dark:bg-card"
>
	<Card.Header>
		<Card.Title>Professional Connections</Card.Title>
	</Card.Header>
	<Card.Content>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
			{#each connections as connection, connectionIndex (connectionIndex)}
				<a
					href="https://{connection.url}"
					target="_blank"
					rel="noopener noreferrer"
					class="block p-4 {connection.color} rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-md"
				>
					<div class="flex items-center gap-3">
						<span class="text-2xl"><connection.icon /></span>
						<div>
							<p class="font-medium">{connection.name}</p>
							<p class="text-sm opacity-80">{connection.url}</p>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</Card.Content>
	<!-- Quick Contact -->
	<Card.Footer class="gap-2">
		<Button>Send Message</Button>
		<Button>Schedule Meeting</Button>
		<Button>Export Contact</Button>
	</Card.Footer>
</Card.Root>
