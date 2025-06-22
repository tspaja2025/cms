<script>
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card";
  import { Checkbox } from "$lib/components/ui/checkbox";
  import { Label } from "$lib/components/ui/label";
  import { Input } from "$lib/components/ui/input";

  let authMode = $state("login");
</script>

<svelte:head>
  <title>CMS Sign in</title>
  <meta name="description" content="CMS Sign in" />
</svelte:head>

<Card.Root class="w-92">
  {#if authMode === "login"}
    <Card.Header class="justify-center w-full">
      <Card.Title>Sign in to your account</Card.Title>
      <Card.Description class="flex items-center justify-center">
        Or
        <Button
          variant="link"
          onclick={() => (authMode = "register")}
          class="px-1 text-blue-500 hover:text-blue-600"
          >Create an account</Button
        >
      </Card.Description>
    </Card.Header>
    <Card.Content>
      <form class="space-y-4" action="/admin">
        <div class="space-y-2">
          <Label for="email">Email:</Label>
          <Input
            type="email"
            id="email"
            autocomplete="email"
            placeholder="Enter your email address"
          />
        </div>
        <div class="space-y-2">
          <Label for="password">Password:</Label>
          <Input
            type="password"
            id="password"
            autocomplete="current-password"
            placeholder="Enter your password"
          />
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <Checkbox id="remember_me" />
            <Label for="remember_me">Remember me</Label>
          </div>

          <Button
            variant="link"
            href="/"
            class="px-1 text-blue-500 hover:text-blue-600"
          >
            Forgot your password?
          </Button>
        </div>

        <Button
          type="submit"
          class="w-full bg-blue-500 text-white hover:!bg-blue-600"
        >
          Sign in
        </Button>
      </form>
    </Card.Content>
  {:else}
    <Card.Header class="flex items-center flex-col justify-center w-full">
      <Card.Title>Create new account</Card.Title>
      <Card.Description class="flex items-center justify-center">
        Or
        <Button
          variant="link"
          onclick={() => (authMode = "login")}
          class="px-1 text-blue-500 hover:text-blue-600"
          >Sign in to your Account</Button
        >
      </Card.Description>
    </Card.Header>
    <Card.Content>
      <form class="space-y-4" action="/admin">
        <div class="space-y-2">
          <Label for="email">Email:</Label>
          <Input
            type="email"
            id="email"
            autocomplete="email"
            placeholder="Enter your email address"
          />
        </div>
        <div class="space-y-2">
          <Label for="password">Password:</Label>
          <Input
            type="password"
            id="password"
            autocomplete="current-password"
            placeholder="Enter your password"
          />
        </div>
        <div class="space-y-2">
          <Label for="repeat_password">Repeat Password:</Label>
          <Input
            type="password"
            id="repeat_password"
            autocomplete="current-password"
            placeholder="Repeat your password"
          />
        </div>

        <Button
          type="submit"
          class="w-full bg-blue-500 text-white hover:!bg-blue-600"
        >
          Sign up
        </Button>
      </form>
    </Card.Content>
  {/if}
</Card.Root>
