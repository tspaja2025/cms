<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import * as Dialog from '$lib/components/ui/dialog/index';
	import { buttonVariants } from '$lib/components/ui/button/index';
	import CreditCardIcon from '@lucide/svelte/icons/credit-card';
</script>

<Card.Root class="shadow-none">
	<Card.Header class="flex flex-col items-center">
		<CreditCardIcon />
		<Card.Title>Pricing</Card.Title>
		<Card.Description class="text-center"
			>Elegant pricing options dialog popup example, easy to use in any page.</Card.Description
		>
	</Card.Header>
	<Card.Content class="flex justify-center">
		<Dialog.Root>
			<Dialog.Trigger class={buttonVariants({})}>Show</Dialog.Trigger>
			<Dialog.Content>
				<Dialog.Title>Pricing Plans</Dialog.Title>
				<Dialog.Description
					>All plans include 40+ advanced tools and features to boost your product. Choose the best
					plan to fit your needs.</Dialog.Description
				>
			</Dialog.Content>
		</Dialog.Root>
	</Card.Content>
</Card.Root>
