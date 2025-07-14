<script lang="ts">
    import * as Card from '$lib/components/ui/card';
    import * as Dialog from '$lib/components/ui/dialog';
    import * as Select from '$lib/components/ui/select';
    import { Input } from '$lib/components/ui/input';
    import { Label } from '$lib/components/ui/label';
    import { Button, buttonVariants } from '$lib/components/ui/button';
    import { Switch } from '$lib/components/ui/switch';
    import CreditCardIcon from '@lucide/svelte/icons/credit-card';
</script>

<Card.Root class="shadow-none">
    <Card.Header class="flex flex-col items-center">
        <CreditCardIcon/>
        <Card.Title>Edit User Info</Card.Title>
        <Card.Description class="text-center">Use this modal to modify the existing user's current information.</Card.Description>
    </Card.Header>
    <Card.Content class="flex justify-center">
        <Dialog.Root>
            <Dialog.Trigger class={buttonVariants({})}>Show</Dialog.Trigger>
            <Dialog.Content>
                <Dialog.Title>Edit User Information</Dialog.Title>
                <Dialog.Description>Updating user details will receive a privacy audit.</Dialog.Description>

                <div class="flex space-x-4">
                    <div class="flex-1 space-y-2">
                        <Label for="firstname">First Name</Label>
                        <Input type="text" id="firstname"/>
                    </div>
                    <div class="flex-1 space-y-2">
                        <Label for="lastname">Last Name</Label>
                        <Input type="text" id="lastname"/>
                    </div>
                </div>
                <div class="space-y-2">
                    <Label for="username">Username</Label>
                    <Input type="text" id="username"/>
                </div>
                <div class="flex space-x-4">
                    <div class="flex-1 space-y-2">
                        <Label for="billing_email">Billing Email</Label>
                        <Input type="text" id="billing_email"/>
                    </div>
                    <div class="flex-1 space-y-2">
                        <Label for="status">Status</Label>
                        <Select.Root type="single">
                            <Select.Trigger class="w-full">Status</Select.Trigger>
                            <Select.Content>
                                <Select.Item value="active">Active</Select.Item>
                                <Select.Item value="inactive">Inactive</Select.Item>
                                <Select.Item value="suspended">Suspended</Select.Item>
                            </Select.Content>
                        </Select.Root>
                    </div>
                </div>
                <div class="flex space-x-4">
                    <div class="flex-1 space-y-2">
                        <Label for="taxid">Tax ID</Label>
                        <Input type="text" id="taxid"/>
                    </div>
                    <div class="flex-1 space-y-2">
                        <Label for="contact">Contact</Label>
                        <Input type="text" id="contact"/>
                    </div>
                </div>
                <div class="flex space-x-4">
                    <div class="flex-1 space-y-2">
                        <Label for="language">Language</Label>
                        <Select.Root type="multiple">
                            <Select.Trigger class="w-full">Language</Select.Trigger>
                            <Select.Content>
                                <Select.Item value="english">English</Select.Item>
                                <Select.Item value="spanish">Spanish</Select.Item>
                                <Select.Item value="french">French</Select.Item>
                                <Select.Item value="german">German</Select.Item>
                                <Select.Item value="hindi">Hindi</Select.Item>
                            </Select.Content>
                        </Select.Root>
                    </div>
                    <div class="flex-1 space-y-2">
                        <Label for="country">Country</Label>
                        <Select.Root type="single">
                            <Select.Trigger class="w-full">Country</Select.Trigger>
                            <Select.Content>
                                <Select.Item value="france">France</Select.Item>
                                <Select.Item value="russia">Russia</Select.Item>
                                <Select.Item value="china">China</Select.Item>
                                <Select.Item value="uk">UK</Select.Item>
                                <Select.Item value="us">US</Select.Item>
                            </Select.Content>
                        </Select.Root>
                    </div>
                </div>
                <div class="flex items-center space-x-2">
                    <Switch id="use_billing_address"/>
                    <Label for="use_billing_address">User as a billing address?</Label>
                </div>
                <Dialog.Footer>
                    <Button type="submit">Submit</Button>
                    <Button type="submit">Cancel</Button>
                </Dialog.Footer>
            </Dialog.Content>
        </Dialog.Root>
    </Card.Content>
</Card.Root>