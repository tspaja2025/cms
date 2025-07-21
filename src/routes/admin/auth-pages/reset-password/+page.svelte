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
            <Card.Title>Sign in to your account</Card.Title>
            <Card.Description>Enter your details below to sign in</Card.Description>
        </Card.Header>
        <Card.Content class="space-y-4 mt-4">
            <div class="space-y-2">
                <Label for="old_password-{id}">Old Password</Label>
                <Input type="password" id="old_password-{id}"/>
            </div>
            <div class="space-y-2">
                <Label for="new_password-{id}">New Password</Label>
                <Input type="password" id="new_password-{id}"/>
            </div>
            <div class="space-y-2">
                <Label for="repeat_new_password-{id}">Repeat New Password</Label>
                <Input type="password" id="repeat_new_password-{id}"/>
            </div>
            <Button class="w-full">Sign in</Button>
        </Card.Content>
        <Card.Footer class="text-sm justify-center h-8 gap-2">
            Don't have an account? <a href="{base}/admin/auth-pages/register" class="text-blue-500 hover:underline">Sign up</a>
        </Card.Footer>
    </Card.Root>
</div>