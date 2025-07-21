<script lang="ts">
    import * as Card from '$lib/components/ui/card/index';
    import { Button } from '$lib/components/ui/button/index';
</script>

<div class="flex justify-center w-full">
    <Card.Root class="w-96">
        <Card.Header>
            <Card.Title>Verify your email </Card.Title>
        </Card.Header>
        <Card.Content class="space-y-4">
            <p>
                Account activation link sent to your email address: john.doe@email.com Please follow the link inside to continue.
            </p>
            <Button class="w-full">Skip For Now</Button>
            <Button variant="outline" class="w-full">Resend</Button>
        </Card.Content>
    </Card.Root>
</div>