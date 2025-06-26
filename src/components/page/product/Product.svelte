<script>
	import { products } from '../../../stores/product';
	import ProductCard from '../../shared/Card/ProductCard.svelte';
	import Filter from '../../shared/Filter.svelte';
</script>

<div class="lg:col-span-2">
	<Filter />
	<div class="product-grid">
		{#each $products as product (product.id)}
			<ProductCard {product} />
		{/each}
	</div>
</div>
