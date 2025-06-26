<script lang="ts">
	import type { Product } from '$lib/data/Product';
	import { addToCart, cart, removeFromCart } from '../../../stores/cart';
	import { updateProduct } from '../../../stores/product';
	import Rating from '../Rating.svelte';

	let { product } = $props();
	console.log(product.image);
	console.log($cart);

	function handleAddToCart(product: Product) {
		// Add the product to the cart
		addToCart(product);
		// Optionally, update the isInCart flag on the product
		// This allows your UI to reflect that the item is now in the cart
		updateProduct(product.id);
	}

	function handleRemoveCart(id: number) {
		removeFromCart(id);
		updateProduct(id);
	}
	let isInCart = $derived(!!$cart.find((item) => item.id == product.id));

	console.log($cart);
</script>

<div
	class="overflow-hidden rounded-lg bg-gray-100 transition-transform duration-300 hover:scale-[1.02]"
>
	<div class="flex h-48 items-center justify-center bg-gray-200">
		<img src={product.image} alt="Gradient Graphic T-shirt" class="h-full w-auto object-cover" />
	</div>
	<div class="p-4">
		<h3 class="font-medium">{product.name}</h3>
		<div class="flex items-center justify-between">
			<div class="my-1 flex items-center">
				<div class="flex text-yellow-400">
					<Rating rating={product.rating} />
				</div>
				<span class="ml-1 text-xs text-gray-500">{product.rating}/5</span>
			</div>
			<span class="text-xs text-gray-700">(212 pcs left)</span>
		</div>
		<p class="font-bold">${product.price}</p>
		{#if isInCart}
			<button
				onclick={() => handleRemoveCart(product.id)}
				class="mt-2 flex w-full items-center justify-center rounded bg-indigo-800 py-1 text-gray-100"
				>Remove from Cart</button
			>
		{:else}
			<button
				onclick={() => handleAddToCart(product)}
				class="mt-2 flex w-full items-center justify-center rounded bg-red-800 py-1 text-gray-100"
				>Add To Cart</button
			>
		{/if}
	</div>
</div>
