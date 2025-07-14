// src/routes/(private)/+layout.ts (or +layout.server.ts)

import { get } from 'svelte/store';
import { Auth } from '../../stores/auth';
import { goto } from '$app/navigation';

export const load = async () => {
	const currentAuthStatus = get(Auth); // Get current value from store

	if (!currentAuthStatus.token) {
		// If not authenticated, redirect to login page
		goto('/login');
	}
	return {};
};
