import type { Product } from '$lib/data/Product';
import { writable } from 'svelte/store';

interface TCart extends Product {
	quantity: number;
}

const storedCart = localStorage.getItem('cart');
const initialCart = storedCart ? JSON.parse(storedCart) : [];

export const cart = writable<TCart[]>(initialCart);

cart.subscribe((value) => {
	localStorage.setItem('cart', JSON.stringify(value));
});

const addtoCart = (product: TCart) => {
	cart.update((cartItems) => {
		if (cartItems.find((item) => item.id === product.id)) {
			return cartItems.map((item) => {
				if (item.id === product.id) {
					item.quantity += 1;
				}
				return item;
			});
		} else {
			return [...cartItems, { ...product }];
		}
	});
};

const removeFromCart = (product: TCart) => {
	cart.update((cartItems) => cartItems.filter((item) => item.id !== product.id));
};

const clearCart = () => {
	cart.set([]);
};

const updateQuantity = (id: number, quantity: number) => {
	cart.update((cartItems) => {
		return cartItems.map((item) => {
			if (item.id === id) {
				item.quantity = quantity;
			}
			return item;
		});
	});
};

const getTotal = () => {
	let total = 0;
	cart.subscribe((cartItems) => {
		total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
	});
	return total;
};

export { addtoCart, removeFromCart, clearCart, updateQuantity, getTotal };
