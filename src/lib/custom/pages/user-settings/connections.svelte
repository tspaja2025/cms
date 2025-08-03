<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import { Switch } from '$lib/components/ui/switch/index';
	import { cardInfo } from '$lib/custom/pages/user-settings/store/data';
</script>

{#each cardInfo as item, index (index)}
	<Card.Root>
		<Card.Header>
			<Card.Title>{item.title}</Card.Title>
			<Card.Description>{item.description}</Card.Description>
		</Card.Header>
		<Card.Content>
			{#each item.content as child, index (index)}
				<div class="flex items-center justify-between">
					<div class="flex flex-col">
						<h3 class="font-medium">{child.title}</h3>
						<p class="text-xs">{child.description}</p>
					</div>
					<Switch checked={child.checked} />
				</div>
			{/each}
		</Card.Content>
	</Card.Root>
{/each}
