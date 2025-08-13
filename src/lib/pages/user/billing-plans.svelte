<script>
	import * as Card from '$lib/components/ui/card/index';
</script>

<Card.Root
	class="bg-gradient-to-t from-primary/5 to-card
shadow-xs dark:bg-card"
>
	<Card.Header>
		<Card.Title>Current Plan</Card.Title>
	</Card.Header>
</Card.Root>
<Card.Root
	class="bg-gradient-to-t from-primary/5 to-card
shadow-xs dark:bg-card"
>
	<Card.Header>
		<Card.Title>Payment Methods</Card.Title>
	</Card.Header>
</Card.Root>
<Card.Root
	class="bg-gradient-to-t from-primary/5 to-card
shadow-xs dark:bg-card"
>
	<Card.Header>
		<Card.Title>Billing Address</Card.Title>
	</Card.Header>
	<Card.Content>
		Name, Billing Email, Tax ID, VAT Number, Billing Address, Contact, Landmark, Country, State, Zip
		Code
	</Card.Content>
</Card.Root>
