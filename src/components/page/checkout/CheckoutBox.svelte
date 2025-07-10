<script lang="ts">
	import { get } from 'svelte/store';
	import { cart, cartTotal } from '../../../stores/cart';
	import CartItem from '../../shared/Card/CartItem.svelte';
	import { useCreateOrder } from '../../../hooks/useCreateOrder';
	const discount = Math.round(($cartTotal / 100) * 20);
	const total = Math.round($cartTotal - discount + 15);
	const purchase = useCreateOrder();
	const handleSubmit = async () => {
		const data = await $purchase.mutateAsync();
		console.log(data);
	};
</script>

<div class="lg:col-span-1">
	<div class="rounded-lg border border-gray-200 bg-white p-6">
		<h2 class="mb-6 text-2xl font-bold">YOUR CART</h2>

		<!-- Cart Item 3 -->
		{#each $cart as cartI (cartI.id)}
			<CartItem cartItem={cartI} />
		{/each}

		<!-- Order Summary -->
		<div class="mt-6">
			<h3 class="mb-4 text-lg font-bold">Order Summary</h3>

			<div class="mb-4 space-y-2">
				<div class="flex justify-between">
					<span class="text-gray-600">Subtotal</span>
					<span class="font-medium">${$cartTotal}</span>
				</div>
				<div class="flex justify-between text-red-500">
					<span>Discount (-20%)</span>
					<span>-${discount}</span>
				</div>
				<div class="flex justify-between">
					<span class="text-gray-600">Delivery Fee</span>
					<span class="font-medium">$15</span>
				</div>
				<div class="flex justify-between border-t border-gray-200 pt-2 text-lg font-bold">
					<span>Total</span>
					<span>${total}</span>
				</div>
			</div>

			<!-- Promo Code -->
			<div class="mb-6 flex items-center space-x-2">
				<div class="relative flex-grow">
					<input
						type="text"
						placeholder="Add promo code"
						class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
					/>
					<span class="absolute top-2.5 left-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-4 w-4 text-gray-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
							/>
						</svg>
					</span>
				</div>
				<button class="rounded-md bg-black px-4 py-2 text-sm text-white">Apply</button>
			</div>

			<!-- Checkout Button -->
			<button
				onclick={handleSubmit}
				class="block w-full rounded-md bg-black py-3 text-center text-white transition-colors hover:bg-gray-800"
			>
				Go to Checkout
				<span class="ml-2 inline-block">→</span>
			</button>
		</div>
	</div>
</div>
