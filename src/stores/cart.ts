// src/lib/stores/cart.ts
import { derived, writable } from 'svelte/store';
import type { Product } from '$lib/data/Product';

export interface TCart extends Product {
	quantity: number;
}

const isBrowser = typeof window !== 'undefined';

const getInitialCart = (): TCart[] => {
	if (!isBrowser) return [];
	try {
		const stored = localStorage.getItem('cart');
		return stored ? JSON.parse(stored) : [];
	} catch {
		return [];
	}
};

const cart = writable<TCart[]>(getInitialCart());

// ✅ Safe subscription for localStorage (browser-only)
if (isBrowser) {
	cart.subscribe((v) => localStorage.setItem('cart', JSON.stringify(v)));
}

const addToCart = (product: Product) => {
	cart.update((cartItems) => {
		const existingItem = cartItems.find((item) => item.id === product.id);
		if (existingItem) {
			return cartItems.map((item) =>
				item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
			);
		}
		return [...cartItems, { ...product, quantity: 1 }];
	});
};

const removeFromCart = (id: number) => {
	cart.update((items) => items.filter((item) => item.id !== id));
};

const clearCart = () => {
	cart.set([]);
};

const updateQuantity = (id: number) => {
	cart.update((items) =>
		items.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
	);
};

// ✅ Use derived stores for reactive calculations

export const getItemQuantity = (id: number) => {
	return derived(cart, ($cart) => {
		const item = $cart.find((item) => item.id === id);
		return item ? item.quantity : 0;
	});
};

export const isInCart = (id: number) => {
	return derived(cart, ($cart) => {
		return $cart.some((item) => item.id === id);
	});
};
export const cartTotal = derived(cart, ($c) => $c.reduce((s, i) => s + i.price * i.quantity, 0));
console.log('Cart Total:', cartTotal);
export const cartItemCount = derived(cart, ($c) => $c.reduce((s, i) => s + i.quantity, 0));
export const itemQuantities = derived(cart, ($c) => new Map($c.map((i) => [i.id, i.quantity])));




export const qty = (id: number, $itemQuantities: Map<number, number>) =>
	$itemQuantities.get(id) ?? 0;

// ✅ Remove problematic getTotal function - use cartTotal derived store instead

export { cart, addToCart, removeFromCart, clearCart, updateQuantity };
