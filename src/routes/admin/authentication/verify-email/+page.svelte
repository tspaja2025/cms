<script>
	import { Button } from '$lib/components/ui/button/index';
	import * as Card from '$lib/components/ui/card/index';
</script>

<svelte:head>
	<title>CMS | Admin | Verify Email</title>
	<meta name="description" content="CMS" />
</svelte:head>

<div class="mx-auto grid gap-4 md:max-w-full lg:max-w-7xl">
	<div class="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
		<div class="flex justify-center">
			<Card.Root
				class="w-96 bg-gradient-to-t from-primary/5 to-card
shadow-xs dark:bg-card"
			>
				<Card.Header>
					<Card.Title>Verify your email</Card.Title>
				</Card.Header>
				<Card.Content class="space-y-4">
					<p>
						Account activation link sent to your email address: john.doe@email.com Please follow the
						link inside to continue.
					</p>
					<Button class="w-full">Skip For Now</Button>
					<Button variant="outline" class="w-full">Resend</Button>
				</Card.Content>
			</Card.Root>
		</div>
	</div>
</div>
