<script lang="ts">
	import { cart, updateQuantity, type TCart } from '../../../stores/cart';

	let { cartItem } = $props();
</script>

<div class="mb-4 flex items-start space-x-4 border-b border-gray-200 pb-4">
	<div class="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded bg-gray-100">
		<img src={cartItem.image} alt="Skinny Fit Jeans" class="h-full w-auto object-cover" />
	</div>
	<div class="flex-grow">
		<div class="flex justify-between">
			<h3 class="font-medium">{cartItem.name}</h3>
			<span class="text-sm text-red-500">×</span>
		</div>
		<p class="text-sm text-gray-500">Size:{cartItem.size}</p>
		<p class="text-sm text-gray-500">Color: {cartItem.color}</p>
		<div class="mt-2 flex items-center justify-between">
			<p class="font-bold">${Math.round(cartItem.price * cartItem.quantity)}</p>
			<div class="flex items-center space-x-2">
				<button class="flex h-6 w-6 items-center justify-center rounded bg-gray-100">−</button>
				<span class="text-sm">{cartItem.quantity}</span>
				<button
					onclick={() => {
						updateQuantity(cartItem.id);
					}}
					class="flex h-6 w-6 items-center justify-center rounded bg-gray-100">+</button
				>
			</div>
		</div>
	</div>
</div>
