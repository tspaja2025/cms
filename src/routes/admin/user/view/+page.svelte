<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Tabs from '$lib/components/ui/tabs';
	import * as Table from '$lib/components/ui/table';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import * as Select from '$lib/components/ui/select';
	import * as Alert from '$lib/components/ui/alert';
	import * as Avatar from '$lib/components/ui/avatar';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { Progress } from '$lib/components/ui/progress';
	import { Badge } from '$lib/components/ui/badge';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import { Switch } from '$lib/components/ui/switch';
	import { projectList } from '$lib/custom/user/store/user';
	import CheckIcon from '@lucide/svelte/icons/check';
	import TrashIcon from '@lucide/svelte/icons/trash';
	import EyeIcon from '@lucide/svelte/icons/eye';
	import EllipsisVerticalIcon from '@lucide/svelte/icons/ellipsis-vertical';
	import DownloadIcon from '@lucide/svelte/icons/download';
	import SquarePenIcon from '@lucide/svelte/icons/square-pen';
	import FilesIcon from '@lucide/svelte/icons/files';
	import ArrowDownIcon from '@lucide/svelte/icons/arrow-down';
	import SendHorizontalIcon from '@lucide/svelte/icons/send-horizontal';
	import MailIcon from '@lucide/svelte/icons/mail';
	import ChartPieIcon from '@lucide/svelte/icons/chart-pie';
	import CircleAlertIcon from '@lucide/svelte/icons/circle-alert';
	import LinkIcon from '@lucide/svelte/icons/link';
</script>

<svelte:head>
	<title>Admin Dashboard</title>
</svelte:head>

<div class="flex gap-4">
	<div class="w-2/5 space-y-4">
		<Card.Root>User Info</Card.Root>
		<Card.Root class="border-2 border-purple-500 shadow-none">
			<Card.Header class="flex items-center justify-between">
				<Badge class="bg-purple-500">Standard</Badge>
				<div class="flex">
					<div class="font-medium text-purple-500">$</div>
					<div class="text-5xl font-medium text-purple-500">99</div>
					<div class="flex items-end">/month</div>
				</div>
			</Card.Header>
			<Card.Content class="space-y-4">
				<ul class="list-inside list-disc">
					<li>10 Users</li>
					<li>Up to 10 GB storage</li>
					<li>Basic Support</li>
				</ul>
				<div class="space-y-2">
					<Label for="days">Days 26 of 30</Label>
					<Progress id="days" class="[&>div]:bg-purple-500" value={70} />
					<p class="-mt-2 text-xs text-neutral-500">4 days remaining</p>
				</div>
			</Card.Content>
			<Card.Footer>
				<Button class="w-full bg-purple-500">Upgrade Plan</Button>
			</Card.Footer>
		</Card.Root>
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
					<Card.Header class="flex items-center justify-between">
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
										<Table.Cell>{project.progress}%<Progress value={project.progress} /></Table.Cell
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
					<Card.Content>
						<Table.Root>
							<Table.Header>
								<Table.Row>
									<Table.Head>#</Table.Head>
									<Table.Head>Status</Table.Head>
									<Table.Head>Total</Table.Head>
									<Table.Head>Issued Date</Table.Head>
									<Table.Head>Action</Table.Head>
								</Table.Row>
							</Table.Header>
							<Table.Body>
								<Table.Row>
									<Table.Cell># 50</Table.Cell>
									<Table.Cell>
										<Tooltip.Provider>
											<Tooltip.Root>
												<Tooltip.Trigger class={buttonVariants({ variant: 'ghost', size: 'icon' })}>
													<CheckIcon class="h-5 w-5" />
												</Tooltip.Trigger>
												<Tooltip.Content>
													<p>Paid</p>
													<p>Balance: $750</p>
													<p>Due Date: 1 July 2025</p>
												</Tooltip.Content>
											</Tooltip.Root>
										</Tooltip.Provider>
									</Table.Cell>
									<Table.Cell>$3428</Table.Cell>
									<Table.Cell>13 June 2025</Table.Cell>
									<Table.Cell>
										<Button variant="ghost"><TrashIcon class="h-5 w-5" /></Button>
										<Button variant="ghost"><EyeIcon class="h-5 w-5" /></Button>
										<DropdownMenu.Root>
											<DropdownMenu.Trigger class={buttonVariants({ variant: 'ghost' })}>
												<EllipsisVerticalIcon class="h-5 w-5" />
											</DropdownMenu.Trigger>
											<DropdownMenu.Content>
												<DropdownMenu.Item
													><DownloadIcon class="h-5 w-5" />Download</DropdownMenu.Item
												>
												<DropdownMenu.Item><SquarePenIcon class="h-5 w-5" />Edit</DropdownMenu.Item>
												<DropdownMenu.Item><FilesIcon class="h-5 w-5" />Duplicate</DropdownMenu.Item
												>
											</DropdownMenu.Content>
										</DropdownMenu.Root>
									</Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.Cell># 49</Table.Cell>
									<Table.Cell>
										<Tooltip.Provider>
											<Tooltip.Root>
												<Tooltip.Trigger class={buttonVariants({ variant: 'ghost', size: 'icon' })}>
													<ArrowDownIcon class="h-5 w-5" />
												</Tooltip.Trigger>
												<Tooltip.Content>
													<p>Downloaded</p>
													<p>Balance: 0</p>
													<p>Due Date: 15 July 2025</p>
												</Tooltip.Content>
											</Tooltip.Root>
										</Tooltip.Provider>
									</Table.Cell>
									<Table.Cell>$5219</Table.Cell>
									<Table.Cell>17 June 2025</Table.Cell>
									<Table.Cell>
										<Button variant="ghost"><TrashIcon class="h-5 w-5" /></Button>
										<Button variant="ghost"><EyeIcon class="h-5 w-5" /></Button>
										<DropdownMenu.Root>
											<DropdownMenu.Trigger class={buttonVariants({ variant: 'ghost' })}>
												<EllipsisVerticalIcon class="h-5 w-5" />
											</DropdownMenu.Trigger>
											<DropdownMenu.Content>
												<DropdownMenu.Item
													><DownloadIcon class="h-5 w-5" />Download</DropdownMenu.Item
												>
												<DropdownMenu.Item><SquarePenIcon class="h-5 w-5" />Edit</DropdownMenu.Item>
												<DropdownMenu.Item><FilesIcon class="h-5 w-5" />Duplicate</DropdownMenu.Item
												>
											</DropdownMenu.Content>
										</DropdownMenu.Root>
									</Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.Cell># 48</Table.Cell>
									<Table.Cell>
										<Tooltip.Provider>
											<Tooltip.Root>
												<Tooltip.Trigger class={buttonVariants({ variant: 'ghost', size: 'icon' })}>
													<SendHorizontalIcon class="h-5 w-5" />
												</Tooltip.Trigger>
												<Tooltip.Content>
													<p>Sent</p>
													<p>Balance: 0</p>
													<p>Due Date: 11 July 2025</p>
												</Tooltip.Content>
											</Tooltip.Root>
										</Tooltip.Provider>
									</Table.Cell>
									<Table.Cell>$3719</Table.Cell>
									<Table.Cell>19 June 2025</Table.Cell>
									<Table.Cell>
										<Button variant="ghost"><TrashIcon class="h-5 w-5" /></Button>
										<Button variant="ghost"><EyeIcon class="h-5 w-5" /></Button>
										<DropdownMenu.Root>
											<DropdownMenu.Trigger class={buttonVariants({ variant: 'ghost' })}>
												<EllipsisVerticalIcon class="h-5 w-5" />
											</DropdownMenu.Trigger>
											<DropdownMenu.Content>
												<DropdownMenu.Item
													><DownloadIcon class="h-5 w-5" />Download</DropdownMenu.Item
												>
												<DropdownMenu.Item><SquarePenIcon class="h-5 w-5" />Edit</DropdownMenu.Item>
												<DropdownMenu.Item><FilesIcon class="h-5 w-5" />Duplicate</DropdownMenu.Item
												>
											</DropdownMenu.Content>
										</DropdownMenu.Root>
									</Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.Cell># 47</Table.Cell>
									<Table.Cell>
										<Tooltip.Provider>
											<Tooltip.Root>
												<Tooltip.Trigger class={buttonVariants({ variant: 'ghost', size: 'icon' })}>
													<MailIcon class="h-5 w-5" />
												</Tooltip.Trigger>
												<Tooltip.Content>
													<p>Draft</p>
													<p>Balance: $815</p>
													<p>Due Date: 30 July 2025</p>
												</Tooltip.Content>
											</Tooltip.Root>
										</Tooltip.Provider>
									</Table.Cell>
									<Table.Cell>$4056</Table.Cell>
									<Table.Cell>08 June 2025</Table.Cell>
									<Table.Cell>
										<Button variant="ghost"><TrashIcon class="h-5 w-5" /></Button>
										<Button variant="ghost"><EyeIcon class="h-5 w-5" /></Button>
										<DropdownMenu.Root>
											<DropdownMenu.Trigger class={buttonVariants({ variant: 'ghost' })}>
												<EllipsisVerticalIcon class="h-5 w-5" />
											</DropdownMenu.Trigger>
											<DropdownMenu.Content>
												<DropdownMenu.Item
													><DownloadIcon class="h-5 w-5" />Download</DropdownMenu.Item
												>
												<DropdownMenu.Item><SquarePenIcon class="h-5 w-5" />Edit</DropdownMenu.Item>
												<DropdownMenu.Item><FilesIcon class="h-5 w-5" />Duplicate</DropdownMenu.Item
												>
											</DropdownMenu.Content>
										</DropdownMenu.Root>
									</Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.Cell># 46</Table.Cell>
									<Table.Cell>
										<Tooltip.Provider>
											<Tooltip.Root>
												<Tooltip.Trigger class={buttonVariants({ variant: 'ghost', size: 'icon' })}>
													<ChartPieIcon class="h-5 w-5" />
												</Tooltip.Trigger>
												<Tooltip.Content>
													<p>Partial Payment</p>
													<p>Balance: $666</p>
													<p>Due Date: 18 July 2025</p>
												</Tooltip.Content>
											</Tooltip.Root>
										</Tooltip.Provider>
									</Table.Cell>
									<Table.Cell>$3789</Table.Cell>
									<Table.Cell>27 June 2025</Table.Cell>
									<Table.Cell>
										<Button variant="ghost"><TrashIcon class="h-5 w-5" /></Button>
										<Button variant="ghost"><EyeIcon class="h-5 w-5" /></Button>
										<DropdownMenu.Root>
											<DropdownMenu.Trigger class={buttonVariants({ variant: 'ghost' })}>
												<EllipsisVerticalIcon class="h-5 w-5" />
											</DropdownMenu.Trigger>
											<DropdownMenu.Content>
												<DropdownMenu.Item
													><DownloadIcon class="h-5 w-5" />Download</DropdownMenu.Item
												>
												<DropdownMenu.Item><SquarePenIcon class="h-5 w-5" />Edit</DropdownMenu.Item>
												<DropdownMenu.Item><FilesIcon class="h-5 w-5" />Duplicate</DropdownMenu.Item
												>
											</DropdownMenu.Content>
										</DropdownMenu.Root>
									</Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.Cell># 45</Table.Cell>
									<Table.Cell>
										<Tooltip.Provider>
											<Tooltip.Root>
												<Tooltip.Trigger class={buttonVariants({ variant: 'ghost', size: 'icon' })}>
													<CircleAlertIcon class="h-5 w-5" />
												</Tooltip.Trigger>
												<Tooltip.Content>
													<p>Past Due</p>
													<p>Balance: 0</p>
													<p>Due Date: 01 July 2025</p>
												</Tooltip.Content>
											</Tooltip.Root>
										</Tooltip.Provider>
									</Table.Cell>
									<Table.Cell>$5293</Table.Cell>
									<Table.Cell>30 June 2025</Table.Cell>
									<Table.Cell>
										<Button variant="ghost"><TrashIcon class="h-5 w-5" /></Button>
										<Button variant="ghost"><EyeIcon class="h-5 w-5" /></Button>
										<DropdownMenu.Root>
											<DropdownMenu.Trigger class={buttonVariants({ variant: 'ghost' })}>
												<EllipsisVerticalIcon class="h-5 w-5" />
											</DropdownMenu.Trigger>
											<DropdownMenu.Content>
												<DropdownMenu.Item
													><DownloadIcon class="h-5 w-5" />Download</DropdownMenu.Item
												>
												<DropdownMenu.Item><SquarePenIcon class="h-5 w-5" />Edit</DropdownMenu.Item>
												<DropdownMenu.Item><FilesIcon class="h-5 w-5" />Duplicate</DropdownMenu.Item
												>
											</DropdownMenu.Content>
										</DropdownMenu.Root>
									</Table.Cell>
								</Table.Row>
							</Table.Body>
						</Table.Root>
					</Card.Content>
				</Card.Root>
			</Tabs.Content>
			<Tabs.Content class="space-y-4" value="security">
				<Card.Root>
					<Card.Header>
						<Card.Title>Change Password</Card.Title>
					</Card.Header>
					<Card.Content class="space-y-4">
						<Alert.Root variant="destructive">
							<CircleAlertIcon class="h-5 w-5" />
							<Alert.Title>Ensure that these requirements are met</Alert.Title>
							<Alert.Description>
								<ul class="list-inside list-disc text-sm">
									<li>Minimum 8 characters long</li>
									<li>uppercase</li>
									<li>symbol</li>
								</ul>
							</Alert.Description>
						</Alert.Root>
						<div class="flex gap-4">
							<Input type="password" placeholder="Password" />
							<Input type="password" placeholder="Confirm Password" />
						</div>
						<Button>Change Password</Button>
					</Card.Content>
				</Card.Root>
				<Card.Root>
					<Card.Header>
						<Card.Title>Two-step verification</Card.Title>
						<Card.Description>Keep your account secure with authentication step.</Card.Description>
					</Card.Header>
					<Card.Content class="space-y-4">
						<div class="space-y-2">
							<Label for="sms">SMS</Label>
							<Input name="sms" type="text" placeholder="123 456 7890" />
						</div>
						<p>
							two-factor authentication adds an additional layer of security to your account by
							requiring more than just a password to log in. <a
								class="text-blue-500 hover:text-blue-600"
								href="/admin/user/view">Learn more.</a
							>
						</p>
					</Card.Content>
				</Card.Root>
				<Card.Root>
					<Card.Header>
						<Card.Title>Recent Devices</Card.Title>
					</Card.Header>
					<Card.Content>
						<Table.Root>
							<Table.Header>
								<Table.Row>
									<Table.Head>Browser</Table.Head>
									<Table.Head>Device</Table.Head>
									<Table.Head>Location</Table.Head>
									<Table.Head>Recent Activities</Table.Head>
								</Table.Row>
							</Table.Header>
							<Table.Body>
								<Table.Row>
									<Table.Cell>Chrome on Windows</Table.Cell>
									<Table.Cell>Dell XPS</Table.Cell>
									<Table.Cell>United States</Table.Cell>
									<Table.Cell>10, Jan 2020 20:07</Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.Cell>Chrome on Android</Table.Cell>
									<Table.Cell>Google Pixel</Table.Cell>
									<Table.Cell>United States</Table.Cell>
									<Table.Cell>10, Jan 2020 20:07</Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.Cell>Chrome on MacOS</Table.Cell>
									<Table.Cell>Apple iMac</Table.Cell>
									<Table.Cell>United States</Table.Cell>
									<Table.Cell>10, Jan 2020 20:07</Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.Cell>Chrome on iPhone</Table.Cell>
									<Table.Cell>Apple iPhone</Table.Cell>
									<Table.Cell>United States</Table.Cell>
									<Table.Cell>10, Jan 2020 20:07</Table.Cell>
								</Table.Row>
							</Table.Body>
						</Table.Root>
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
						Name, Billing Email, Tax ID, VAT Number, Billing Address, Contact, Landmark, Country,
						State, Zip Code
					</Card.Content>
				</Card.Root>
			</Tabs.Content>
			<Tabs.Content class="space-y-4" value="notifications">
				<Card.Root>
					<Card.Header>
						<Card.Title>Notifications</Card.Title>
					</Card.Header>
					<Card.Content>
						<Table.Root>
							<Table.Header>
								<Table.Row>
									<Table.Head>Type</Table.Head>
									<Table.Head>App</Table.Head>
									<Table.Head>Email</Table.Head>
									<Table.Head>Browser</Table.Head>
								</Table.Row>
							</Table.Header>
							<Table.Body>
								<Table.Row>
									<Table.Cell>New for you</Table.Cell>
									<Table.Cell><Checkbox /></Table.Cell>
									<Table.Cell><Checkbox checked /></Table.Cell>
									<Table.Cell><Checkbox /></Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.Cell>Account Activity</Table.Cell>
									<Table.Cell><Checkbox checked /></Table.Cell>
									<Table.Cell><Checkbox /></Table.Cell>
									<Table.Cell><Checkbox checked /></Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.Cell>A new browser sign in</Table.Cell>
									<Table.Cell><Checkbox checked /></Table.Cell>
									<Table.Cell><Checkbox checked /></Table.Cell>
									<Table.Cell><Checkbox checked /></Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.Cell>A new device linked</Table.Cell>
									<Table.Cell><Checkbox /></Table.Cell>
									<Table.Cell><Checkbox /></Table.Cell>
									<Table.Cell><Checkbox checked /></Table.Cell>
								</Table.Row>
							</Table.Body>
						</Table.Root>
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
					<Card.Content class="space-y-4">
						<div class="flex items-center justify-between">
							<div class="flex items-center gap-4">
								<Avatar.Root>
									<Avatar.Image src="" alt="" />
									<Avatar.Fallback>Google</Avatar.Fallback>
								</Avatar.Root>
								<div>
									<h5 class="font-medium">Google</h5>
									<p class="text-xs">Calendar and Contacts</p>
								</div>
							</div>
							<Switch checked />
						</div>
						<div class="flex items-center justify-between">
							<div class="flex items-center gap-4">
								<Avatar.Root>
									<Avatar.Image src="" alt="" />
									<Avatar.Fallback>Slack</Avatar.Fallback>
								</Avatar.Root>
								<div>
									<h5 class="font-medium">Slack</h5>
									<p class="text-xs">Communications</p>
								</div>
							</div>
							<Switch />
						</div>
						<div class="flex items-center justify-between">
							<div class="flex items-center gap-4">
								<Avatar.Root>
									<Avatar.Image src="" alt="" />
									<Avatar.Fallback>Github</Avatar.Fallback>
								</Avatar.Root>
								<div>
									<h5 class="font-medium">Github</h5>
									<p class="text-xs">Manage your git repositories</p>
								</div>
							</div>
							<Switch checked />
						</div>
						<div class="flex items-center justify-between">
							<div class="flex items-center gap-4">
								<Avatar.Root>
									<Avatar.Image src="" alt="" />
									<Avatar.Fallback>Asana</Avatar.Fallback>
								</Avatar.Root>
								<div>
									<h5 class="font-medium">Asana</h5>
									<p class="text-xs">Task Communication</p>
								</div>
							</div>
							<Switch />
						</div>
					</Card.Content>
				</Card.Root>
				<Card.Root>
					<Card.Header>
						<Card.Title>Social Accounts</Card.Title>
						<Card.Description>Display content from social accounts on your site</Card.Description>
					</Card.Header>
					<Card.Content>
						Facebook, Twitter/X, Linkedin, Dribbble, Behence
						<div class="flex items-center justify-between">
							<div class="flex items-center gap-4">
								<Avatar.Root>
									<Avatar.Image src="" alt="" />
									<Avatar.Fallback>Facebook</Avatar.Fallback>
								</Avatar.Root>
								<div>
									<h5 class="font-medium">Facebook</h5>
									<p class="text-xs">Not Connected</p>
								</div>
							</div>
							<Button variant="ghost">
								<LinkIcon class="h-5 w-5" />
							</Button>
						</div>
						<div class="flex items-center justify-between">
							<div class="flex items-center gap-4">
								<Avatar.Root>
									<Avatar.Image src="" alt="" />
									<Avatar.Fallback>Twitter/X</Avatar.Fallback>
								</Avatar.Root>
								<div>
									<h5 class="font-medium">Twitter/X</h5>
									<p class="text-xs">Not Connected</p>
								</div>
							</div>
							<Button variant="ghost">
								<LinkIcon class="h-5 w-5" />
							</Button>
						</div>
						<div class="flex items-center justify-between">
							<div class="flex items-center gap-4">
								<Avatar.Root>
									<Avatar.Image src="" alt="" />
									<Avatar.Fallback>Linkedin</Avatar.Fallback>
								</Avatar.Root>
								<div>
									<h5 class="font-medium">Linkedin</h5>
									<p class="text-xs">Not Connected</p>
								</div>
							</div>
							<Button variant="ghost">
								<LinkIcon class="h-5 w-5" />
							</Button>
						</div>
						<div class="flex items-center justify-between">
							<div class="flex items-center gap-4">
								<Avatar.Root>
									<Avatar.Image src="" alt="" />
									<Avatar.Fallback>Dribbble</Avatar.Fallback>
								</Avatar.Root>
								<div>
									<h5 class="font-medium">Dribbble</h5>
									<p class="text-xs">Not Connected</p>
								</div>
							</div>
							<Button variant="ghost">
								<LinkIcon class="h-5 w-5" />
							</Button>
						</div>
						<div class="flex items-center justify-between">
							<div class="flex items-center gap-4">
								<Avatar.Root>
									<Avatar.Image src="" alt="" />
									<Avatar.Fallback>Behence</Avatar.Fallback>
								</Avatar.Root>
								<div>
									<h5 class="font-medium">Behence</h5>
									<p class="text-xs">Not Connected</p>
								</div>
							</div>
							<Button variant="ghost">
								<LinkIcon class="h-5 w-5" />
							</Button>
						</div>
					</Card.Content>
				</Card.Root>
			</Tabs.Content>
		</Tabs.Root>
	</div>
</div>
