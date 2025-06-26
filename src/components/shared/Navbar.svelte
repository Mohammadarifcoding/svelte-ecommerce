<script>
	import { NavData } from '$lib/data/Navbar.js';
	//  import { Skull } from '@lucide/svelte';
</script>

<header class="border-b border-gray-200 px-4 py-4 md:px-8">
	<div class="container mx-auto flex items-center justify-between">
		<a href="/" class="text-2xl font-bold"> LWS.SHOP </a>
		<nav class="hidden space-x-6 md:flex">
			{#each NavData as nav (nav.label)}
				<a href={nav.href} class="transition-colors hover:text-gray-500">
					{nav.label}
				</a>
			{/each}
		</nav>
		<div class="flex items-center space-x-4">
			<div class="relative hidden w-64 md:block">
				<input
					type="text"
					placeholder="Search for products..."
					class="w-full rounded-full bg-gray-100 px-4 py-2 text-sm"
				/>
				<span class="absolute top-2 right-3">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 text-gray-400"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</span>
			</div>
			<a href="/" class="transition-colors hover:text-gray-500">
				<!-- <Skull /> -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-shopping-bag-icon lucide-shopping-bag"
					><path d="M16 10a4 4 0 0 1-8 0" /><path d="M3.103 6.034h17.794" /><path
						d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"
					/></svg
				>
			</a>
			<a href="/profile" aria-label="User Profile" class="transition-colors hover:text-gray-500">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
					/>
				</svg>
			</a>
		</div>
	</div>
</header>
