<script>
	import { Button, buttonVariants } from '$lib/components/ui/button/index';
	import * as Card from '$lib/components/ui/card/index';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import EllipsisVerticalIcon from '@lucide/svelte/icons/ellipsis-vertical';
	import ChartPieIcon from '@lucide/svelte/icons/chart-pie';
	import UsersIcon from '@lucide/svelte/icons/users';
	import LaptopIcon from '@lucide/svelte/icons/laptop';
	import CalendarIcon from '@lucide/svelte/icons/calendar';
	import BriefcaseBusinessIcon from '@lucide/svelte/icons/briefcase-business';
	import { Badge } from '$lib/components/ui/badge/index';
	import { chart } from '$lib/custom/apexchart/apexchart';
	import * as Avatar from '$lib/components/ui/avatar/index';
	import { Input } from '$lib/components/ui/input/index';
	import { Separator } from '$lib/components/ui/separator/index';

	const salesOverviewOptions = {
		chart: {
			type: 'donut',
			height: 280,
			width: 280
		},
		series: [12, 25, 13, 50],
		legend: {
			show: true
		},
		dataLabels: {
			enabled: false
		},
		labels: ['Apparel', 'Electronics', 'FMCG', 'Other Sales'],
		colors: ['#ad46ff', '#c27aff', '#dab2ff', '#62748e'],
		plotOptions: {
			pie: {
				donut: {
					labels: {
						show: true,
						total: {
							showAlways: true,
							show: true
						}
					}
				}
			}
		}
	};

	const totalSalesOptions = {
		chart: {
			type: 'line',
			toolbar: {
				show: false
			}
		},
		series: [
			{
				name: 'Sales',
				data: [0, 25, 1, 50]
			}
		],
		grid: {
			show: false
		},
		stroke: {
			width: 5,
			curve: 'smooth'
		},
		yaxis: {
			labels: {
				show: false
			}
		},
		xaxis: {
			type: 'datetime',
			categories: ['1/11/2025', '2/11/2025', '3/11/2025', '4/11/2025'],
			tickAmount: 5,
			labels: {
				formatter: function (value, timestamp, opts) {
					return opts.dateFormatter(new Date(timestamp), 'dd MMM');
				}
			}
		},
		fill: {
			type: 'gradient',
			gradient: {
				shade: 'dark',
				gradientToColors: ['#FDD835'],
				shadeIntensity: 1,
				type: 'horizontal',
				opacityFrom: 1,
				opacityTo: 1,
				stops: [0, 100, 100, 100]
			}
		}
	};

	const revenueReportOptions = {
		chart: {
			type: 'bar',
			toolbar: {
				show: false
			}
		},
		series: [
			{
				name: 'Sales',
				data: [1.45, 5.42, 5.9, -0.42, -12.6]
			}
		],
		grid: {
			show: false
		},
		stroke: {
			width: 5,
			curve: 'smooth'
		},
		yaxis: {
			labels: {
				show: false
			}
		},
		xaxis: {
			type: 'datetime',
			categories: ['2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01'],
			labels: {
				rotate: -90
			}
		},
		plotOptions: {
			bar: {
				colors: {
					ranges: [
						{
							from: -100,
							to: -46,
							color: '#F15B46'
						},
						{
							from: -45,
							to: 0,
							color: '#FEB019'
						}
					]
				},
				columnWidth: '80%'
			}
		},
		dataLabels: {
			enabled: false
		}
	};

	const weeklySalesOptions = {
		chart: {
			type: 'bar',
			toolbar: {
				show: false
			}
		},
		series: [
			{
				name: 'Sales',
				data: [2, 3, 4, 10, 4, 3, 3]
			}
		],
		yaxis: {
			labels: {
				show: false
			}
		},
		xaxis: {
			categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
		},
		plotOptions: {
			bar: {
				borderRadius: 8
			}
		},
		dataLabels: {
			enabled: false
		}
	};
</script>

<div class="mb-4 grid grid-cols-4 gap-4">
	<Card.Root class="shadow-none">
		<Card.Header>
			<Card.Title>Ratings</Card.Title>
		</Card.Header>
		<Card.Content class="flex flex-col">
			<span class="text-2xl font-medium">13k</span>
			<span class="mb-4 text-green-500">+15%</span>
			<Badge>Year of 2025</Badge>
		</Card.Content>
	</Card.Root>
	<Card.Root class="shadow-none">
		<Card.Header>
			<Card.Title>Sessions</Card.Title>
		</Card.Header>
		<Card.Content class="flex flex-col">
			<span class="text-2xl font-medium">24k</span>
			<span class="mb-4 text-red-500">-20%</span>
			<Badge>Last Week</Badge>
		</Card.Content>
	</Card.Root>
	<Card.Root class="col-span-2 shadow-none">
		<Card.Header class="flex items-center justify-between">
			<div>
				<Card.Title>Transactions</Card.Title>
				<Card.Description>38.5% Growth this month</Card.Description>
			</div>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger class={buttonVariants({ variant: 'ghost', size: 'icon' })}>
					<EllipsisVerticalIcon />
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<DropdownMenu.Item>Refresh</DropdownMenu.Item>
					<DropdownMenu.Item>Share</DropdownMenu.Item>
					<DropdownMenu.Item>Update</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</Card.Header>
		<Card.Content class="flex gap-4">
			<div class="flex items-center gap-2">
				<div class="rounded-md bg-purple-500 p-2 shadow">
					<ChartPieIcon class="text-white" />
				</div>
				<div class="flex flex-col">
					Sales
					<span class="font-medium">245K</span>
				</div>
			</div>
			<div class="flex items-center gap-2">
				<div class="rounded-md bg-purple-500 p-2 shadow">
					<UsersIcon class="text-white" />
				</div>
				<div class="flex flex-col">
					Sales
					<span class="font-medium">245K</span>
				</div>
			</div>
			<div class="flex items-center gap-2">
				<div class="rounded-md bg-purple-500 p-2 shadow">
					<LaptopIcon class="text-white" />
				</div>
				<div class="flex flex-col">
					Sales
					<span class="font-medium">245K</span>
				</div>
			</div>
		</Card.Content>
	</Card.Root>
</div>

<div class="mb-4 grid grid-cols-3 gap-4">
	<Card.Root class="shadow-none">
		<Card.Header class="flex items-center justify-between">
			<div>
				<Card.Title>Total Sales</Card.Title>
				<Card.Description>$20,000</Card.Description>
			</div>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger class={buttonVariants({ variant: 'ghost', size: 'icon' })}>
					<EllipsisVerticalIcon />
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<DropdownMenu.Item>Last 28 Days</DropdownMenu.Item>
					<DropdownMenu.Item>Last Month</DropdownMenu.Item>
					<DropdownMenu.Item>Last year</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</Card.Header>
		<Card.Content>
			<div use:chart={totalSalesOptions}></div>
		</Card.Content>
	</Card.Root>
	<Card.Root class="shadow-none">
		<Card.Header class="flex items-center justify-between">
			<Card.Title>Revenue Report</Card.Title>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger class={buttonVariants({ variant: 'ghost', size: 'icon' })}>
					<EllipsisVerticalIcon />
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<DropdownMenu.Item>Last 28 Days</DropdownMenu.Item>
					<DropdownMenu.Item>Last Month</DropdownMenu.Item>
					<DropdownMenu.Item>Last year</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</Card.Header>
		<Card.Content>
			<div use:chart={revenueReportOptions}></div>
		</Card.Content>
	</Card.Root>
	<Card.Root class="shadow-none">
		<Card.Header class="flex items-center justify-between">
			<Card.Title>Sales Overview</Card.Title>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger class={buttonVariants({ variant: 'ghost', size: 'icon' })}>
					<EllipsisVerticalIcon />
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<DropdownMenu.Item>Refresh</DropdownMenu.Item>
					<DropdownMenu.Item>Share</DropdownMenu.Item>
					<DropdownMenu.Item>Update</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</Card.Header>
		<Card.Content>
			<div use:chart={salesOverviewOptions}></div>
		</Card.Content>
	</Card.Root>
</div>

<div class="mb-4 grid grid-cols-2 gap-4">
	<Card.Root class="shadow-none">
		<Card.Header>
			<Card.Title>Activity Timeline</Card.Title>
		</Card.Header>
		<Card.Content>
			<div class="relative flex h-16 flex-col">
				<Separator orientation="vertical" />
				<div class="absolute -left-1.5 h-3 w-3 rounded-full bg-purple-500"></div>
				<div class="absolute">
					<div class="-mt-1.5 flex flex-col px-4">
						<h3 class="font-medium">12 Invoices have been paid</h3>
						<p class="text-sm">Invoices have been paid to the company</p>
					</div>
				</div>
			</div>
			<div class="relative flex h-16 flex-col">
				<Separator orientation="vertical" />
				<div class="absolute -left-1.5 h-3 w-3 rounded-full bg-green-500"></div>
				<div class="absolute">
					<div class="-mt-1.5 flex flex-col px-4">
						<h3 class="font-medium">Client Meeting</h3>
						<p class="text-sm">Project meeting with john @10:15am</p>
					</div>
				</div>
			</div>
			<div class="relative flex h-16 flex-col">
				<div class="absolute -left-1.5 h-3 w-3 rounded-full bg-blue-500"></div>
				<div class="absolute">
					<div class="-mt-1.5 flex flex-col px-4">
						<h3 class="font-medium">Create a new project for client</h3>
						<p class="text-sm">6 team members in a project</p>
					</div>
				</div>
			</div>
		</Card.Content>
	</Card.Root>
	<Card.Root class="shadow-none">
		<Card.Header class="flex items-center justify-between">
			<div>
				<Card.Title>Weekly Sales</Card.Title>
				<Card.Description>Total 100k Sales</Card.Description>
			</div>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger class={buttonVariants({ variant: 'ghost', size: 'icon' })}>
					<EllipsisVerticalIcon />
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<DropdownMenu.Item>Last 28 Days</DropdownMenu.Item>
					<DropdownMenu.Item>Last Month</DropdownMenu.Item>
					<DropdownMenu.Item>Last year</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</Card.Header>
		<Card.Content>
			<div use:chart={weeklySalesOptions}></div>
		</Card.Content>
	</Card.Root>
</div>

<div class="mb-4 grid grid-cols-2 gap-4">
	<Card.Root class="shadow-none">
		<Card.Header class="flex items-center justify-between">
			<Card.Title>Upgrade Plan</Card.Title>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger class={buttonVariants({ variant: 'ghost', size: 'icon' })}>
					<EllipsisVerticalIcon />
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<DropdownMenu.Item>Last 28 Days</DropdownMenu.Item>
					<DropdownMenu.Item>Last Month</DropdownMenu.Item>
					<DropdownMenu.Item>Last year</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</Card.Header>
		<Card.Content class="space-y-4">
			<p>
				Please make the payment to start enjoying all the features of our premium plan as soon as
				possible.
			</p>
			<div class="flex items-center justify-between rounded-md bg-purple-300 p-2">
				<div class="flex items-center gap-2">
					<div class="rounded-md border border-purple-500 p-2">
						<BriefcaseBusinessIcon />
					</div>
					<div class="flex flex-col">
						<h4 class="font-medium">Platinum</h4>
						<p class="text-sm text-purple-500">Upgrade Plan</p>
					</div>
				</div>
				<div>$<span class="text-2xl font-medium">5000</span> / year</div>
			</div>
			<Input type="text" placeholder="Email Address" />
			<Button class="w-full">Contact Now</Button>
		</Card.Content>
	</Card.Root>
	<Card.Root class="shadow-none">
		<Card.Header class="flex items-center justify-between">
			<Card.Title>Meeting Schedule</Card.Title>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger class={buttonVariants({ variant: 'ghost', size: 'icon' })}>
					<EllipsisVerticalIcon />
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<DropdownMenu.Item>Last 28 Days</DropdownMenu.Item>
					<DropdownMenu.Item>Last Month</DropdownMenu.Item>
					<DropdownMenu.Item>Last year</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</Card.Header>
		<Card.Content class="flex flex-col">
			<div class="flex items-center justify-between">
				<div class="flex items-center gap-2">
					<Avatar.Root>
						<Avatar.Image alt="" src="" />
						<Avatar.Fallback>avatar</Avatar.Fallback>
					</Avatar.Root>
					<div class="flex flex-col">
						<h4 class="font-medium">First Schelude</h4>
						<div class="flex items-center gap-2">
							<CalendarIcon class="h-4 w-4 text-slate-500" /> 7/21/2025
						</div>
					</div>
				</div>
				<Badge class="bg-purple-300 text-purple-700">Business</Badge>
			</div>
			<div class="flex items-center justify-between">
				<div class="flex items-center gap-2">
					<Avatar.Root>
						<Avatar.Image alt="" src="" />
						<Avatar.Fallback>avatar</Avatar.Fallback>
					</Avatar.Root>
					<div class="flex flex-col">
						<h4 class="font-medium">First Schelude</h4>
						<div class="flex items-center gap-2">
							<CalendarIcon class="h-4 w-4 text-slate-500" /> 7/21/2025
						</div>
					</div>
				</div>
				<Badge class="bg-yellow-300 text-yellow-700">Meditation</Badge>
			</div>
			<div class="flex items-center justify-between">
				<div class="flex items-center gap-2">
					<Avatar.Root>
						<Avatar.Image alt="" src="" />
						<Avatar.Fallback>avatar</Avatar.Fallback>
					</Avatar.Root>
					<div class="flex flex-col">
						<h4 class="font-medium">First Schelude</h4>
						<div class="flex items-center gap-2">
							<CalendarIcon class="h-4 w-4 text-slate-500" /> 7/21/2025
						</div>
					</div>
				</div>
				<Badge class="bg-slate-300 text-slate-700">Meetup</Badge>
			</div>
			<div class="flex items-center justify-between">
				<div class="flex items-center gap-2">
					<Avatar.Root>
						<Avatar.Image alt="" src="" />
						<Avatar.Fallback>avatar</Avatar.Fallback>
					</Avatar.Root>
					<div class="flex flex-col">
						<h4 class="font-medium">First Schelude</h4>
						<div class="flex items-center gap-2">
							<CalendarIcon class="h-4 w-4 text-slate-500" /> 7/21/2025
						</div>
					</div>
				</div>
				<Badge class="bg-red-300 text-red-700">Dinner</Badge>
			</div>
		</Card.Content>
	</Card.Root>
</div>

<div class="p-1"></div>
