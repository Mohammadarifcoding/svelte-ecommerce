<script lang="ts">
	import type { Product } from '$lib/data/Product';
	import { products } from '../../../stores/product';
	import ProductCard from '../../shared/Card/ProductCard.svelte';
	import Filter from '../../shared/Filter.svelte';
	import { get } from 'svelte/store';

	let filterValue = $state('popular');

	const onChange = (e: Event) => {
		const target = e.target as HTMLSelectElement;
		filterValue = target.value;
	};

let productsData: Product[] = $derived.by(() => {
    const allProducts = $products;
    
    if (filterValue === 'popular') {
        return [...allProducts].sort((a, b) => b.rating - a.rating);
    } else if (filterValue === 'low-to-high') {
        return [...allProducts].sort((a, b) => a.price - b.price);
    } else if (filterValue === 'high-to-low') {
        return [...allProducts].sort((a, b) => b.price - a.price);
    } else {
        return [...allProducts];
    }
});
</script>

<div class="lg:col-span-2">
	<Filter bind:filterValue />
	<div class="product-grid">
		{#each  productsData as product (product.id)}
			<ProductCard {product} />
		{/each}
	</div>
</div>
