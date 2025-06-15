<script lang="ts">
	let { darkMode, toggleDarkMode } = $props();

	let isNotificationsOpen = $state(false);
	let isProfileOpen = $state(false);
	let notificationCount = $state(3);

	function toggleNotifications() {
		isNotificationsOpen = !isNotificationsOpen;
		if (isNotificationsOpen) isProfileOpen = false;
	}

	function toggleProfile() {
		isProfileOpen = !isProfileOpen;
		if (isProfileOpen) isNotificationsOpen = false;
	}

	// Sample notifications
	const notifications = [
		{
			id: 1,
			title: 'New order received',
			message: 'Order #1234 has been placed',
			time: '5 min ago',
			read: false
		},
		{
			id: 2,
			title: 'Low inventory alert',
			message: "Product 'Wireless Headphones' is low in stock",
			time: '2 hours ago',
			read: false
		},
		{
			id: 3,
			title: 'Payment successful',
			message: 'Payment for order #1230 has been received',
			time: 'Yesterday',
			read: false
		},
		{
			id: 4,
			title: 'New review',
			message: 'A customer left a 5-star review',
			time: '2 days ago',
			read: true
		}
	];
</script>

<header class="z-10 bg-white shadow-sm transition-colors duration-200">
	<div class="flex items-center justify-between px-6 py-4">
		<div class="flex items-center lg:hidden">
			<!-- Spacer for mobile where sidebar toggle is positioned absolutely -->
			<div class="w-8"></div>
		</div>

		<div class="flex-1 lg:ml-8">
			<h1 class="text-xl font-medium text-gray-800">
				{#if window.location.pathname === '/'}
					Dashboard
				{:else if window.location.pathname === '/products'}
					Products
				{:else if window.location.pathname === '/orders'}
					Orders
				{:else if window.location.pathname === '/customers'}
					Customers
				{:else if window.location.pathname === '/settings'}
					Settings
				{/if}
			</h1>
		</div>

		<div class="flex items-center space-x-4">
			<!-- Search -->
			<div class="relative hidden md:block">
				<input
					type="text"
					class="input w-64 border-0 bg-gray-100 py-2 pr-4 pl-10"
					placeholder="Search..."
				/>
				<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
					<svg
						class="h-5 w-5 text-gray-500"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						></path>
					</svg>
				</div>
			</div>

			<!-- Dark mode toggle -->
			<button
				class="rounded-full p-2 text-gray-600 transition-colors duration-200 hover:bg-gray-100 focus:outline-none"
				onclick={toggleDarkMode}
				aria-label="Toggle dark mode"
			>
				{#if darkMode}
					<svg
						class="h-5 w-5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
						></path>
					</svg>
				{:else}
					<svg
						class="h-5 w-5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
						></path>
					</svg>
				{/if}
			</button>

			<!-- Notifications -->
			<div class="relative">
				<button
					class="rounded-full p-2 text-gray-600 transition-colors duration-200 hover:bg-gray-100 focus:outline-none"
					onclick={toggleNotifications}
					aria-label="View notifications"
				>
					<svg
						class="h-5 w-5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
						></path>
					</svg>
					{#if notificationCount > 0}
						<span
							class="bg-error-500 absolute top-0 right-0 inline-flex translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full px-2 py-1 text-xs leading-none font-bold text-white"
							>{notificationCount}</span
						>
					{/if}
				</button>

				{#if isNotificationsOpen}
					<div
						class="ring-opacity-5 animate-fade-in absolute right-0 z-50 mt-2 w-80 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black focus:outline-none"
					>
						<div class="border-b border-gray-200 px-4 py-2">
							<h2 class="text-sm font-medium text-gray-800">Notifications</h2>
						</div>
						<div class="max-h-96 overflow-y-auto">
							{#each notifications as notification, notificationIndex (notificationIndex)}
								<div
									class="cursor-pointer px-4 py-3 transition-colors duration-200 hover:bg-gray-50"
									class:bg-gray-50={!notification.read}
								>
									<div class="flex items-start justify-between">
										<div>
											<p class="text-sm font-medium text-gray-800">
												{notification.title}
											</p>
											<p class="mt-1 text-sm text-gray-500">
												{notification.message}
											</p>
											<p class="mt-1 text-xs text-gray-400">
												{notification.time}
											</p>
										</div>
										{#if !notification.read}
											<span class="bg-primary-500 inline-block h-2 w-2 rounded-full"></span>
										{/if}
									</div>
								</div>
							{/each}
						</div>
						<div class="border-t border-gray-200 px-4 py-2">
							<a
								href="/"
								class="text-primary-600 dark:text-primary-400 block text-center text-sm hover:underline"
								>View all notifications</a
							>
						</div>
					</div>
				{/if}
			</div>

			<!-- Profile dropdown -->
			<div class="relative">
				<button
					class="flex items-center space-x-2 focus:outline-none"
					onclick={toggleProfile}
					aria-label="User menu"
				>
					<img
						class="h-8 w-8 rounded-full"
						src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100"
						alt=""
					/>
					<span class="hidden text-sm font-medium text-gray-700 md:block">Alex Johnson</span>
					<svg
						class="h-4 w-4 text-gray-500"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"
						></path>
					</svg>
				</button>

				{#if isProfileOpen}
					<div
						class="ring-opacity-5 animate-fade-in absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black focus:outline-none"
					>
						<a
							href="/"
							class="block px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-100"
							>Your Profile</a
						>
						<a
							href="/"
							class="block px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-100"
							>Account Settings</a
						>
						<div class="border-t border-gray-200"></div>
						<a
							href="/"
							class="block px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-100"
							>Sign out</a
						>
					</div>
				{/if}
			</div>
		</div>
	</div>
</header>
