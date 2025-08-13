<script>
	import { buttonVariants } from '$lib/components/ui/button/index';
	import * as Card from '$lib/components/ui/card/index';
	import * as Dialog from '$lib/components/ui/dialog/index';
	import CreditCardIcon from '@lucide/svelte/icons/credit-card';
</script>

<Card.Root class="bg-gradient-to-t from-primary/5 to-card shadow-xs dark:bg-card">
	<Card.Header class="flex flex-col items-center">
		<CreditCardIcon />
		<Card.Title>Payment Methods</Card.Title>
		<Card.Description class="text-center"
			>Elegant payment options modal popup example, easy to use in any page.</Card.Description
		>
	</Card.Header>
	<Card.Content class="flex justify-center">
		<Dialog.Root>
			<Dialog.Trigger class={buttonVariants({})}>Show</Dialog.Trigger>
			<Dialog.Content>
				<Dialog.Title>Select Payment Providers</Dialog.Title>
				<Dialog.Description>Third-party payment providers</Dialog.Description>
			</Dialog.Content>
		</Dialog.Root>
	</Card.Content>
</Card.Root>
