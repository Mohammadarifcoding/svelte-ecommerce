<script>
	import Product from '../components/page/product/Product.svelte';
	import Filter from '../components/shared/Filter.svelte';
	import Main from '../components/shared/Main.svelte';
	import Navbar from '../components/shared/Navbar.svelte';
	import Topbar from '../components/shared/Topbar.svelte';
</script>

<Topbar />
<Navbar />
<Main>
	<Product />
	<Filter />
</Main>
