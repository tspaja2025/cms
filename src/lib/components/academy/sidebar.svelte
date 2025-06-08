<script lang="ts">
	import { currentPage, navigateTo } from '$lib/components/academy/store/navigation';

	const menuItems = [
		{ id: 'dashboard', label: 'Dashboard', icon: '📊' },
		{ id: 'courses', label: 'My Courses', icon: '📚' }
	];
</script>

<aside class="fixed top-0 left-0 z-10 h-screen w-64 border-r border-gray-200 bg-white">
	<div class="border-b border-gray-200 p-6">
		<h1 class="text-xl font-bold text-gray-900">Academy</h1>
		<p class="mt-1 text-sm text-gray-500">Learning Dashboard</p>
	</div>

	<nav class="p-4">
		<ul class="space-y-2">
			{#each menuItems as item, itemIndex (itemIndex)}
				<li>
					<button
						class="flex w-full items-center rounded-lg px-4 py-3 text-left transition-colors duration-200 {$currentPage ===
						item.id
							? 'bg-primary-50 text-primary-700 border-primary-200 border'
							: 'text-gray-700 hover:bg-gray-50'}"
						on:click={() => navigateTo(item.id)}
					>
						<span class="mr-3 text-lg">{item.icon}</span>
						<span class="font-medium">{item.label}</span>
					</button>
				</li>
			{/each}
		</ul>
	</nav>
</aside>
