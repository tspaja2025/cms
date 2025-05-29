<svelte:head>
	<title>CMS Login</title>
</svelte:head>

<div class="flex min-h-screen flex-col items-center justify-center bg-gray-100">
	<form class="flex flex-col items-center rounded bg-white p-8" action="/admin">
		<h1 class="text-2xl font-medium">Welcome to the CMS Login</h1>
		<p class="mb-4">Please enter your credentials to access the CMS.</p>
		<div class="mb-4 flex w-full flex-col">
			<label for="email">Email:</label>
			<input class="rounded border border-neutral-200" type="email" id="email" name="email" />
		</div>
		<div class="mb-4 flex w-full flex-col">
			<label for="password">Password:</label>
			<input
				class="rounded border border-neutral-200"
				type="password"
				id="password"
				name="password"
			/>
		</div>
		<div class="mb-4 flex w-full justify-between">
			<div class="flex items-center">
				<input type="checkbox" id="remember" name="remember" />
				<label for="remember">Remember me:</label>
			</div>
			<a class="text-blue-500 hover:underline" href="/forgot-password">Forgot password?</a>
		</div>
		<button
			type="submit"
			class="relative flex w-full items-center justify-center rounded bg-neutral-200 px-4 py-2 transition-colors duration-200 hover:bg-neutral-300"
			>Login</button
		>
	</form>
	<p>New to the CMS? <a class="text-blue-500 hover:underline" href="/register">Register now</a></p>
</div>
