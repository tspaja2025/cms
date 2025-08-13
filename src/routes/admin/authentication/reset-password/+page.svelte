<script>
	import { resolve } from '$app/paths';
	import { Button } from '$lib/components/ui/button/index';
	import * as Card from '$lib/components/ui/card/index';
	import { Input } from '$lib/components/ui/input/index';
	import { Label } from '$lib/components/ui/label/index';

	const id = $props.id();
</script>

<svelte:head>
	<title>CMS | Admin | Reset Password</title>
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
					<Card.Title>Sign in to your account</Card.Title>
					<Card.Description>Enter your details below to sign in</Card.Description>
				</Card.Header>
				<Card.Content class="mt-4 space-y-4">
					<div class="space-y-2">
						<Label for="old_password-{id}">Old Password</Label>
						<Input type="password" id="old_password-{id}" />
					</div>
					<div class="space-y-2">
						<Label for="new_password-{id}">New Password</Label>
						<Input type="password" id="new_password-{id}" />
					</div>
					<div class="space-y-2">
						<Label for="repeat_new_password-{id}">Repeat New Password</Label>
						<Input type="password" id="repeat_new_password-{id}" />
					</div>
					<Button class="w-full">Sign in</Button>
				</Card.Content>
				<Card.Footer class="h-8 justify-center gap-2 text-sm">
					Don't have an account? <a href={resolve('/admin')} class="text-blue-500 hover:underline"
						>Sign up</a
					>
				</Card.Footer>
			</Card.Root>
		</div>
	</div>
</div>
