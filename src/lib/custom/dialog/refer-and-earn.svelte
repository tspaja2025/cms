<script lang="ts">
    import * as Card from '$lib/components/ui/card';
    import * as Dialog from '$lib/components/ui/dialog';
    import { Input } from '$lib/components/ui/input';
    import { Label } from '$lib/components/ui/label';
    import { Button, buttonVariants } from '$lib/components/ui/button';
    import CreditCardIcon from '@lucide/svelte/icons/credit-card';
    import FacebookIcon from '@lucide/svelte/icons/facebook'
    import TwitterIcon from '@lucide/svelte/icons/twitter'
    import LinkedinIcon from '@lucide/svelte/icons/linkedin'
</script>

<Card.Root class="shadow-none">
    <Card.Header class="flex flex-col items-center">
        <CreditCardIcon/>
        <Card.Title>Refer & Earn</Card.Title>
        <Card.Description class="text-center">Use Refer & Earn modal to encourage your exiting customers refer their friends & colleague.</Card.Description>
    </Card.Header>
    <Card.Content class="flex justify-center">
        <Dialog.Root>
            <Dialog.Trigger class={buttonVariants({})}>Show</Dialog.Trigger>
            <Dialog.Content>
                <Dialog.Title>Add New Card</Dialog.Title>
                <Dialog.Description>Invite your friend, if they sign up, you and your friend will get 30 days free trial</Dialog.Description>

                <div class="flex items-center space-x-4">
                    <div class="flex-1 space-y-2">
                        <Label for="invite">Invite your friends</Label>
                        <Input type="email" id="invite"/>
                        <p class="text-xs">Enter your friend's email address and invite them to join.</p>
                    </div>
                    <Button>Send</Button>
                </div>

                <div class="flex items-center space-x-4">
                    <div class="flex-1 space-y-2">
                        <Label for="referral">Share the referral link</Label>
                        <Input type="text" id="referral"/>
                        <p class="text-xs">You can also copy and send it or share it on your social media.</p>
                    </div>
                    <Button>
                        <FacebookIcon/>
                    </Button>
                    <Button>
                        <TwitterIcon/>
                    </Button>
                    <Button>
                        <LinkedinIcon/>
                    </Button>
                </div>
                <Dialog.Footer>
                    <Button type="submit">Submit</Button>
                    <Button type="submit">Cancel</Button>
                </Dialog.Footer>
            </Dialog.Content>
        </Dialog.Root>
    </Card.Content>
</Card.Root>