<script lang="ts">
	import '../app.css';
	import Navbar from '../components/shared/Navbar.svelte';
	import Topbar from '../components/shared/Topbar.svelte';

	let { children } = $props();
</script>
<Topbar />
<Navbar />
{@render children()}
