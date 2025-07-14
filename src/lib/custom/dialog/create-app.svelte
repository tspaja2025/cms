<script lang="ts">
    import * as Card from '$lib/components/ui/card';
    import * as Dialog from '$lib/components/ui/dialog';
    import { Input } from '$lib/components/ui/input';
    import { Label } from '$lib/components/ui/label';
    import { Button, buttonVariants } from '$lib/components/ui/button';
    import { Switch } from '$lib/components/ui/switch';
    import CreditCardIcon from '@lucide/svelte/icons/credit-card';
</script>

<Card.Root class="shadow-none">
    <Card.Header class="flex flex-col items-center">
        <CreditCardIcon/>
        <Card.Title>Create App</Card.Title>
        <Card.Description class="text-center">Provide application data with this form to create the app dialog popup example, easy to use in any page.</Card.Description>
    </Card.Header>
    <Card.Content class="flex justify-center">
        <Dialog.Root>
            <Dialog.Trigger class={buttonVariants({})}>Show</Dialog.Trigger>
            <Dialog.Content>
                <Dialog.Title>Create App</Dialog.Title>
                <Dialog.Description>Provide data with this form to create your app.</Dialog.Description>
            </Dialog.Content>
        </Dialog.Root>
    </Card.Content>
</Card.Root>