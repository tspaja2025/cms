<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card";
  import { Checkbox } from "$lib/components/ui/checkbox";
  import { Label } from "$lib/components/ui/label";
  import { Input } from "$lib/components/ui/input";
  import { toast } from 'svelte-sonner';

  type AuthMode = "login" | "register";
  let authMode: AuthMode = $state("login");

  let formData = $state({
    email: "",
    password: "",
    repeatPassword: "",
    rememberMe: false,
  });

  let isLoading = $state(false);
  let errors = $state<Record<string, string>>({
    email: "",
    password: "",
    repeatPassword: ""
  });

  function validateForm(): boolean {
    const newErrors: Record<string, string> = {};
    
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    
    if (authMode === "register" && formData.password !== formData.repeatPassword) {
      newErrors.repeatPassword = "Passwords do not match";
    }
    
    errors = newErrors;
    return Object.keys(errors).length === 0;
  }

  async function handleSubmit(event: Event) {
    event.preventDefault();
    
    if (!validateForm()) return;
    
    isLoading = true;
    
    try {
      const response = await fetch(`/auth/${authMode}.json`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          rememberMe: formData.rememberMe
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Authentication failed");
      }
      
      // Redirect or handle successful auth
      window.location.href = "/admin";
    } catch (error) {
      toast.error(error.message || "An error occurred during authentication");
    } finally {
      isLoading = false;
    }
  }

  function toggleAuthMode() {
    authMode = authMode === "login" ? "register" : "login";
    errors = {};
  }
</script>

<svelte:head>
  <title>{authMode === "login" ? "Sign In" : "Register"} | CMS</title>
  <meta name="description" content={`CMS ${authMode === "login" ? "Sign In" : "Registration"} page`} />
</svelte:head>

<Card.Root class="w-full max-w-md mx-auto my-8">
  {#if authMode === "login"}
    <Card.Header class="text-center">
      <Card.Title class="text-2xl font-bold">Sign in to your account</Card.Title>
      <Card.Description class="mt-2">
        Or
        <Button
          variant="link"
          onclick={toggleAuthMode}
          class="px-1 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          Create an account
        </Button>
      </Card.Description>
    </Card.Header>
  {:else}
    <Card.Header class="text-center">
      <Card.Title class="text-2xl font-bold">Create new account</Card.Title>
      <Card.Description class="mt-2">
        Or
        <Button
          variant="link"
          onclick={toggleAuthMode}
          class="px-1 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          Sign in to your account
        </Button>
      </Card.Description>
    </Card.Header>
  {/if}

  <Card.Content>
    <form class="space-y-4" onsubmit={handleSubmit}>
      <div class="space-y-2">
        <Label for="email">Email</Label>
        <Input
          type="email"
          id="email"
          bind:value={formData.email}
          autocomplete="email"
          placeholder="Enter your email address"
          class={errors.email ? "border-red-500" : ""}
        />
        {#if errors.email}
          <p class="text-sm text-red-500">{errors.email}</p>
        {/if}
      </div>

      <div class="space-y-2">
        <Label for="password">Password</Label>
        <Input
          type="password"
          id="password"
          bind:value={formData.password}
          autocomplete={authMode === "login" ? "current-password" : "new-password"}
          placeholder="Enter your password"
          class={errors.password ? "border-red-500" : ""}
        />
        {#if errors.password}
          <p class="text-sm text-red-500">{errors.password}</p>
        {/if}
      </div>

      {#if authMode === "register"}
        <div class="space-y-2">
          <Label for="repeat_password">Repeat Password</Label>
          <Input
            type="password"
            id="repeat_password"
            bind:value={formData.repeatPassword}
            autocomplete="new-password"
            placeholder="Repeat your password"
            class={errors.repeatPassword ? "border-red-500" : ""}
          />
          {#if errors.repeatPassword}
            <p class="text-sm text-red-500">{errors.repeatPassword}</p>
          {/if}
        </div>
      {:else}
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <Checkbox id="remember_me" bind:checked={formData.rememberMe} />
            <Label for="remember_me">Remember me</Label>
          </div>
          <Button
            variant="link"
            type="button"
            onclick={() => toast.info("Password reset link sent to your email")}
            class="px-1 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Forgot password?
          </Button>
        </div>
      {/if}

      <Button
        type="submit"
        class="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white"
        disabled={isLoading}
      >
        {#if isLoading}
          <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        {/if}
        {authMode === "login" ? "Sign in" : "Sign up"}
      </Button>
    </form>
  </Card.Content>
</Card.Root>
