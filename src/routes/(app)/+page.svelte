<script lang="ts">
	import { resolve } from '$app/paths';
	import * as Alert from '$lib/components/ui/alert/index';
	import { Button } from '$lib/components/ui/button/index';
	import * as Card from '$lib/components/ui/card/index';
	import { Checkbox } from '$lib/components/ui/checkbox/index';
	import { Label } from '$lib/components/ui/label/index';
	import { Input } from '$lib/components/ui/input/index';
	import { toast } from 'svelte-sonner';
	import CircleAlertIcon from '@lucide/svelte/icons/circle-alert';

	type AuthMode = 'login' | 'register';

	let authMode: AuthMode = $state('login');

	let formData = $state({
		email: '',
		password: '',
		repeatPassword: '',
		rememberMe: false
	});

	let isLoading = $state(false);
	let errors = $state<Record<string, string>>({
		email: '',
		password: '',
		repeatPassword: ''
	});

	function validateForm(): boolean {
		const newErrors: Record<string, string> = {};

		if (!formData.email) {
			newErrors.email = 'Email is required';
		} else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
			newErrors.email = 'Please enter a valid email';
		}

		if (!formData.password) {
			newErrors.password = 'Password is required';
		} else if (formData.password.length < 8) {
			newErrors.password = 'Password must be at least 8 characters';
		}

		if (authMode === 'register' && formData.password !== formData.repeatPassword) {
			newErrors.repeatPassword = 'Passwords do not match';
		}

		errors = newErrors;
		return Object.keys(errors).length === 0;
	}

	async function handleSubmit(event: Event) {
		event.preventDefault();

		if (!validateForm()) return;

		isLoading = true;

		window.location.href = resolve('/admin/');
	}

	function toggleAuthMode() {
		authMode = authMode === 'login' ? 'register' : 'login';
		errors = {};
	}
</script>

<svelte:head>
	<title>{authMode === 'login' ? 'Sign In' : 'Register'} | CMS</title>
	<meta
		name="description"
		content={`CMS ${authMode === 'login' ? 'Sign In' : 'Registration'} page`}
	/>
</svelte:head>

<Card.Root class="mx-auto w-full max-w-sm">
	<Card.Header>
		<Card.Title class="text-2xl">
			{#if authMode === 'login'}
				Sign in to your account
			{:else}
				Create new account
			{/if}
		</Card.Title>
		<Card.Description>
			{#if authMode === 'login'}
				Enter your details below to sign in
			{:else}
				Enter your details to sign up
			{/if}
		</Card.Description>
	</Card.Header>
	<Card.Content>
		<form class="grid gap-4" onsubmit={handleSubmit}>
			<Alert.Root class="bg-yellow-100 text-yellow-700">
				<CircleAlertIcon />
				<Alert.Title>Email: admin@admin.com / Pass: 12345678</Alert.Title>
			</Alert.Root>
			<div class="grid gap-2">
				<Label for="email">Email</Label>
				<Input
					type="email"
					id="email"
					bind:value={formData.email}
					autocomplete="email"
					placeholder="Enter your email address"
					class={errors.email ? 'border-red-500' : ''}
				/>
				{#if errors.email}
					<p class="text-sm text-red-500">{errors.email}</p>
				{/if}
			</div>

			<div class="grid gap-2">
				<Label for="password">Password</Label>
				<Input
					type="password"
					id="password"
					bind:value={formData.password}
					autocomplete={authMode === 'login' ? 'current-password' : 'new-password'}
					placeholder="Enter your password"
					class={errors.password ? 'border-red-500' : ''}
				/>
				{#if errors.password}
					<p class="text-sm text-red-500">{errors.password}</p>
				{/if}
			</div>

			{#if authMode === 'register'}
				<div class="grid gap-2">
					<Label for="repeat_password">Repeat Password</Label>
					<Input
						type="password"
						id="repeat_password"
						bind:value={formData.repeatPassword}
						autocomplete="new-password"
						placeholder="Repeat your password"
						class={errors.repeatPassword ? 'border-red-500' : ''}
					/>
					{#if errors.repeatPassword}
						<p class="text-sm text-red-500">{errors.repeatPassword}</p>
					{/if}
				</div>
			{:else}
				<div class="flex items-center justify-between gap-2">
					<div class="flex items-center gap-2">
						<Checkbox id="remember_me" bind:checked={formData.rememberMe} />
						<Label for="remember_me">Remember me</Label>
					</div>
					<Button
						variant="link"
						type="button"
						aria-label="forgot_password"
						onclick={() => toast.info('Password reset link sent to your email')}
						class="h-auto px-1 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
					>
						Forgot password?
					</Button>
				</div>
			{/if}

			<Button
				type="submit"
				aria-label="authenticate"
				class="w-full bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
				disabled={isLoading}
			>
				{#if isLoading}
					<span class="inline-flex items-center">
						<svg
							class="mr-2 -ml-1 h-4 w-4 animate-spin text-white"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
						>
							<circle
								class="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								stroke-width="4"
							></circle>
							<path
								class="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
							></path>
						</svg>
						Processing...
					</span>
				{:else}
					{authMode === 'login' ? 'Sign in' : 'Sign up'}
				{/if}
			</Button>

			<div class="grid gap-4 sm:grid-cols-2">
				<Button variant="outline" type="button" aria-label="github" class="w-full">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path
							d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
							fill="currentColor"
						/>
					</svg>
				</Button>
				<Button variant="outline" type="button" aria-label="google" class="w-full">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path
							d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
							fill="currentColor"
						/>
					</svg>
				</Button>
			</div>

			<div class="mt-4 text-center text-sm">
				{#if authMode === 'login'}
					Don't have an account?
					<Button variant="link" class="h-auto px-1 py-0" onclick={toggleAuthMode}>Sign up</Button>
				{:else}
					Already have an account?
					<Button variant="link" class="h-auto px-1 py-0" onclick={toggleAuthMode}>Sign in</Button>
				{/if}
			</div>
		</form>
	</Card.Content>
</Card.Root>
