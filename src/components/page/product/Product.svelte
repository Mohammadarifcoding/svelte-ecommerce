<script>
	import { ProductData } from '$lib/data/Product';
	import ProductCard from '../../shared/Card/ProductCard.svelte';
	import Filter from '../../shared/Filter.svelte';
</script>

<div class="lg:col-span-2">
	<Filter />
	<div class="product-grid">
		{#each ProductData as product (product.id)}
			<ProductCard {product} />
		{/each}
	</div>
</div>
