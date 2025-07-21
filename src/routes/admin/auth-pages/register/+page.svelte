<script lang="ts">
    import { base } from '$app/paths';
    import * as Card from '$lib/components/ui/card/index';
    import { Input } from '$lib/components/ui/input/index';
    import { Label } from '$lib/components/ui/label/index';
    import { Button } from '$lib/components/ui/button/index';

    const id = $props.id();
</script>

<div class="flex justify-center w-full">
    <Card.Root class="w-96 gap-0 pb-0">
        <Card.Header>
            <Card.Title>Create new account</Card.Title>
            <Card.Description>Enter your details to sign up</Card.Description>
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
            <div class="space-y-2">
                <Label for="repeat_password-{id}">Repeat Password</Label>
                <Input type="password" id="repeat_assword-{id}"/>
            </div>
            <Button class="w-full">Sign up</Button>
        </Card.Content>
        <Card.Footer class="text-sm justify-center h-8 gap-2">
            Already have an account? <a href="{base}/admin/auth-pages/login" class="text-blue-500 hover:underline">Sign in</a>
        </Card.Footer>
    </Card.Root>
</div>