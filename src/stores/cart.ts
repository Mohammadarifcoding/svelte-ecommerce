// src/lib/stores/cart.ts
import { writable } from 'svelte/store';
import type { Product } from '$lib/data/Product';

interface TCart extends Product {
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
	cart.subscribe((value) => {
		localStorage.setItem('cart', JSON.stringify(value));
	});
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

const updateQuantity = (id: number, quantity: number) => {
	cart.update((items) => items.map((item) => (item.id === id ? { ...item, quantity } : item)));
};

const getTotal = () => {
	let total = 0;
	if (isBrowser) {
		const items = get(cart);
		total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
	}
	return total;
};

import { get } from 'svelte/store'; // required for get(cart)

export { cart, addToCart, removeFromCart, clearCart, updateQuantity, getTotal };
