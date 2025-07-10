<script>
	import Footer from '../../shared/Footer.svelte';
	import Main from '../../shared/Main.svelte';
	import CheckoutBox from '../checkout/CheckoutBox.svelte';
	import Product from '../product/Product.svelte';
	import NewsLetter from './NewsLetter.svelte';
</script>

<Main>
	<Product />
	<CheckoutBox />
</Main>
<NewsLetter />
<Footer />
