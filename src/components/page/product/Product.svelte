<script>
	import { ProductData } from '$lib/data/Product';
	import ProductCard from '../../shared/Card/ProductCard.svelte';
</script>

<div class="lg:col-span-2">
	<div class="product-grid">
		{#each ProductData as product (product.id)}
			<ProductCard {product} />
		{/each}
	</div>
</div>
