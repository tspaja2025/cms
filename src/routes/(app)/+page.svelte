<script lang="ts">
	import { resolve } from '$app/paths';
	import * as Alert from '$lib/components/ui/alert/index';
	import { Button } from '$lib/components/ui/button/index';
	import * as Card from '$lib/components/ui/card/index';
	import { Checkbox } from '$lib/components/ui/checkbox/index';
	import { Input } from '$lib/components/ui/input/index';
	import { Label } from '$lib/components/ui/label/index';
	import CircleAlertIcon from '@lucide/svelte/icons/circle-alert';
	import { toast } from 'svelte-sonner';

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

		window.location.href = resolve('/admin');
	}

	const id = $props.id();
</script>

<div class="flex h-dvh w-dvw items-center justify-center">
	<Card.Root class="mx-auto w-full max-w-sm">
		<Card.Header>
			<Card.Title>Sign in to your account</Card.Title>
			<Card.Description>Enter your details below to sign in</Card.Description>
		</Card.Header>
		<Card.Content class="space-y-4">
			<Alert.Root variant="destructive">
				<CircleAlertIcon />
				<Alert.Title>Email: admin@admin.com / Pass: 12345678</Alert.Title>
			</Alert.Root>
			<form class="grid gap-4" onsubmit={handleSubmit}>
				<div class="grid gap-2">
					<Label for="email-{id}">Email</Label>
					<Input
						type="email"
						id="email-{id}"
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
					<div class="flex items-center">
						<Label for="password-{id}">Password</Label>
						<a
							href={resolve('/')}
							class="ml-auto inline-block text-sm underline"
							onclick={() => toast.info('Password reset link sent to your email')}
						>
							Forgor password?
						</a>
					</div>
					<Input
						type="password"
						id="password-{id}"
						bind:value={formData.password}
						autocomplete={authMode === 'login' ? 'current-password' : 'new-password'}
						placeholder="Enter your password"
						class={errors.password ? 'border-red-500' : ''}
					/>
					{#if errors.password}
						<p class="text-sm text-red-500">{errors.password}</p>
					{/if}
				</div>
				<div class="flex items-center gap-2">
					<Checkbox id="remember-me-{id}" bind:checked={formData.rememberMe} />
					<Label for="remember-me-{id}">Remember me</Label>
				</div>
				<Button aria-label="authenticate" class="w-full" type="submit" disabled={isLoading}>
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
						Sign in
					{/if}
				</Button>
				<div class="text-center text-sm">
					Don&apos;t have an account?
					<a href={resolve('/')} class="underline underline-offset-4"> Sign up </a>
				</div>
			</form>
		</Card.Content>
	</Card.Root>
</div>
