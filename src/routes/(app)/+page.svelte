<script>
	import { Button } from '$lib/components/ui/button';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { FacebookIcon, TwitterIcon } from '@lucide/svelte';
	// Change
</script>

<svelte:head>
	<title>CMS Login</title>
</svelte:head>

<div class="flex min-h-screen flex-col items-center justify-center bg-gray-100">
	<div>
		<h2 class="text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
		<p class="mt-2 text-center text-sm text-gray-600">
			Or
			<a href="/" class="font-medium text-blue-500 hover:text-blue-600">Create an account</a>
		</p>
	</div>

	<div class="mt-8 w-92">
		<div class="rounded-md bg-white px-4 py-8 shadow">
			<form class="space-y-6" action="/admin">
				<div>
					<Label for="email">Email:</Label>
					<Input
						type="email"
						name="email"
						autocomplete="email"
						placeholder="Enter your email address"
					/>
				</div>
				<div>
					<Label for="password">Password:</Label>
					<Input
						type="password"
						name="password"
						autocomplete="current-password"
						placeholder="Enter your password"
					/>
				</div>
				<!-- <TextField
					label="Email:"
					autocomplete="email"
					name="email"
					placeholder="Enter your email address"
				/> -->

				<!-- <TextField
					label="Password:"
					autocomplete="current-password"
					name="passowrd"
					placeholder="Enter your password"
				/> -->

				<div class="flex items-center justify-between">
					<div class="flex items-center gap-3">
						<Checkbox id="remember_me" />
						<Label for="remember_me">Remember me</Label>
					</div>
					<!-- <Checkbox label="Remember me" name="remember_me" /> -->

					<div class="text-sm">
						<a href="/" class="font-medium text-blue-500 hover:text-blue-600">
							Forgot your password?
						</a>
					</div>
				</div>

				<div>
					<Button type="submit" class="w-full bg-blue-500 text-white hover:!bg-blue-600">
						Sign in
					</Button>
				</div>

				<div class="mt-6 grid grid-cols-3 gap-3">
					<div>
						<a
							href="/"
							class="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
						>
							<FacebookIcon class="h-5 w-5" />
						</a>
					</div>
					<div>
						<a
							href="/"
							class="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
						>
							<TwitterIcon class="h-5 w-5" />
						</a>
					</div>
					<div>
						<a
							href="/"
							class="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
						>
							<img class="h-5 w-5" src="https://www.svgrepo.com/show/506498/google.svg" alt="" />
						</a>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>
