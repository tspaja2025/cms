<script>
	import { resolve } from '$app/paths';
	import { Button } from '$lib/components/ui/button/index';
	import * as Card from '$lib/components/ui/card/index';
	import { Input } from '$lib/components/ui/input/index';
	import { Label } from '$lib/components/ui/label/index';

	const id = $props.id();
</script>

<svelte:head>
	<title>CMS | Admin | Register</title>
	<meta name="description" content="CMS" />
</svelte:head>

<div class="mx-auto grid gap-4 md:max-w-full lg:max-w-7xl">
	<div class="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
		<div class="flex justify-center">
			<Card.Root
				class="w-96 gap-0 bg-gradient-to-t from-primary/5 to-card pb-0
shadow-xs dark:bg-card"
			>
				<Card.Header>
					<Card.Title>Create new account</Card.Title>
					<Card.Description>Enter your details to sign up</Card.Description>
				</Card.Header>
				<Card.Content class="mt-4 space-y-4">
					<div class="space-y-2">
						<Label for="email-{id}">Email</Label>
						<Input type="email" id="email-{id}" />
					</div>
					<div class="space-y-2">
						<Label for="password-{id}">Password</Label>
						<Input type="password" id="password-{id}" />
					</div>
					<div class="space-y-2">
						<Label for="repeat_password-{id}">Repeat Password</Label>
						<Input type="password" id="repeat_password-{id}" />
					</div>
					<Button class="w-full">Sign up</Button>
				</Card.Content>
				<Card.Footer class="h-8 justify-center gap-2 text-sm">
					Already have an account? <a href={resolve('/admin')} class="text-blue-500 hover:underline"
						>Sign in</a
					>
				</Card.Footer>
			</Card.Root>
		</div>
	</div>
</div>
