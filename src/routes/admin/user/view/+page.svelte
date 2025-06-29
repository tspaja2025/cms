<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import * as Tabs from "$lib/components/ui/tabs";
  import * as Table from "$lib/components/ui/table";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import * as Select from "$lib/components/ui/select";
  import * as Alert from "$lib/components/ui/alert";
  import * as Avatar from "$lib/components/ui/avatar";
  import { Label } from "$lib/components/ui/label";
  import { Input } from "$lib/components/ui/input";
  import { Progress } from "$lib/components/ui/progress";
  import { Badge } from "$lib/components/ui/badge";
  import { Checkbox } from "$lib/components/ui/checkbox";
  import { projectList } from "$lib/custom/user/store/user";
</script>

<svelte:head>
  <title>Admin Dashboard</title>
</svelte:head>

<div class="flex gap-4">
  <div class="w-2/5">
    <Card.Root>User Info</Card.Root>
    <Card.Root>Upgrade Plan</Card.Root>
  </div>
  <div class="w-3/5">
    <Tabs.Root value="overview">
      <Tabs.List class="w-full">
        <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
        <Tabs.Trigger value="security">Security</Tabs.Trigger>
        <Tabs.Trigger value="billing-plans">Billing & Plans</Tabs.Trigger>
        <Tabs.Trigger value="notifications">Notifications</Tabs.Trigger>
        <Tabs.Trigger value="connections">Connections</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content class="space-y-4" value="overview">
        <Card.Root>
          <Card.Header class="flex justify-between items-center">
            <Card.Title>Project List</Card.Title>
            <Input class="w-64" name="search" placeholder="Search Project" />
          </Card.Header>
          <Card.Content>
            <Table.Root>
              <Table.Header>
                <Table.Row>
                  <Table.Head>Project</Table.Head>
                  <Table.Head>Total Task</Table.Head>
                  <Table.Head>Progress</Table.Head>
                  <Table.Head>Hours</Table.Head>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {#each projectList as project (project.name)}
                  <Table.Row>
                    <Table.Cell class="flex items-center gap-2">
                      <Avatar.Root>
                        <Avatar.Image src={project.src} alt={project.name} />
                        <Avatar.Fallback>{project.name}</Avatar.Fallback>
                      </Avatar.Root>
                      <span class="font-medium">{project.name}</span>
                    </Table.Cell>
                    <Table.Cell>{project.total}/240</Table.Cell>
                    <Table.Cell
                      >{project.progress}%<Progress
                        value={project.progress}
                      /></Table.Cell
                    >
                    <Table.Cell>{project.hours}</Table.Cell>
                  </Table.Row>
                {/each}
              </Table.Body>
            </Table.Root>
          </Card.Content>
        </Card.Root>
        <Card.Root>
          <Card.Header>
            <Card.Title>User Activity Timeline</Card.Title>
          </Card.Header>
        </Card.Root>
        <Card.Root>
          <Card.Header>
            <Card.Title>Invoice List</Card.Title>
          </Card.Header>
          <Card.Content
            >Table with 50 rows [#, status, total, issued date, action: delete,
            view, menu: download, edit, duplicate]</Card.Content
          >
        </Card.Root>
      </Tabs.Content>
      <Tabs.Content class="space-y-4" value="security">
        <Card.Root>
          <Card.Header>
            <Card.Title>Change Password</Card.Title>
          </Card.Header>
        </Card.Root>
        <Card.Root>
          <Card.Header>
            <Card.Title>Two-step verification</Card.Title>
            <Card.Description
              >Keep your account secure with authentication step.</Card.Description
            >
          </Card.Header>
          <Card.Content>
            Input, Label, wo-factor authentication adds an additional layer of
            security to your account by requiring more than just a password to
            log in. Learn more.
          </Card.Content>
        </Card.Root>
        <Card.Root>
          <Card.Header>
            <Card.Title>Recent Devices</Card.Title>
          </Card.Header>
          <Card.Content>
            Table [browser, device, location, recent activities]
          </Card.Content>
        </Card.Root>
      </Tabs.Content>
      <Tabs.Content class="space-y-4" value="billing-plans">
        <Card.Root>
          <Card.Header>
            <Card.Title>Current Plan</Card.Title>
          </Card.Header>
        </Card.Root>
        <Card.Root>
          <Card.Header>
            <Card.Title>Payment Methods</Card.Title>
          </Card.Header>
        </Card.Root>
        <Card.Root>
          <Card.Header>
            <Card.Title>Billing Address</Card.Title>
          </Card.Header>
          <Card.Content>
            Name, Billing Email, Tax ID, VAT Number, Billing Address, Contact,
            Landmark, Country, State, Zip Code
          </Card.Content>
        </Card.Root>
      </Tabs.Content>
      <Tabs.Content class="space-y-4" value="notifications">
        <Card.Root>
          <Card.Header>
            <Card.Title>Notifications</Card.Title>
          </Card.Header>
          <Card.Content>
            Table [type, app, email, browser] New for you, Account Activity, A
            new browser used to sign in, A new device is linked
          </Card.Content>
        </Card.Root>
      </Tabs.Content>
      <Tabs.Content class="space-y-4" value="connections">
        <Card.Root>
          <Card.Header>
            <Card.Title>Connected Accounts</Card.Title>
            <Card.Description
              >Display content from your connected accounts on your site</Card.Description
            >
          </Card.Header>
          <Card.Content>
            Google, Slack, Github, Mailchimp, Asana | Switch
          </Card.Content>
        </Card.Root>
        <Card.Root>
          <Card.Header>
            <Card.Title>Social Accounts</Card.Title>
            <Card.Description
              >Display content from social accounts on your site</Card.Description
            >
          </Card.Header>
          <Card.Content>
            Facebook, Twitter/X, Linkedin, Dribbble, Behence
          </Card.Content>
        </Card.Root>
      </Tabs.Content>
    </Tabs.Root>
  </div>
</div>
