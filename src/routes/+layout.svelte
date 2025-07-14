<script lang="ts">
	import { QueryClientProvider } from '@tanstack/svelte-query';

	import { QueryClient } from '@tanstack/query-core';
	let { children } = $props();
	import '../app.css';
	import Navbar from '../components/shared/Navbar.svelte';
	import Topbar from '../components/shared/Topbar.svelte';

	const queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>
	<Topbar />
	<Navbar />
	{@render children?.()}
</QueryClientProvider>
