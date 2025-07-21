<script lang="ts">
    import { base } from '$app/paths';
    import * as Card from '$lib/components/ui/card/index';
    import { Input } from '$lib/components/ui/input/index';
    import { Label } from '$lib/components/ui/label/index';
    import { Checkbox } from '$lib/components/ui/checkbox/index';
    import { Button } from '$lib/components/ui/button/index';

    const id = $props.id();
    let checked = $state(false);
</script>

<div class="flex justify-center w-full">
    <Card.Root class="w-96 gap-0 pb-0">
        <Card.Header>
            <Card.Title>Sign in to your account</Card.Title>
            <Card.Description>Enter your details below to sign in</Card.Description>
        </Card.Header>
        <Card.Content class="space-y-4 mt-4">
            <div class="space-y-2">
                <Label for="email-{id}">Email</Label>
                <Input type="email" id="email-{id}"/>
            </div>
            <div class="space-y-2">
                <Label for="password-{id}">Password</Label>
                <Input type="password" id="password-{id}"/>
            </div>
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                    <Checkbox id="remember_me" bind:checked/>
                    <Label for="remember_me">Remember me</Label>
                </div>
                <a href="{base}/admin/auth-pages/forgot-password" class="text-blue-500 hover:underline">Forgot password?</a>
            </div>
            <Button class="w-full" disabled={checked ? false : true}>Sign in</Button>
        </Card.Content>
        <Card.Footer class="text-sm justify-center h-8 gap-2">
            Don't have an account? <a href="{base}/admin/auth-pages/register" class="text-blue-500 hover:underline">Sign up</a>
        </Card.Footer>
    </Card.Root>
</div>