// src/lib/stores/Auth.ts

import { get, writable } from 'svelte/store';

export interface TAuth {
	user: {
		email: string;
		password: string;
	};
	token: string;
	refreshToken: string;
	loading: boolean;
}

const isBrowser = typeof window !== 'undefined';

const Auth = writable<TAuth>({
	user: localStorage.getItem('auth')
		? JSON.parse(localStorage.getItem('Auth') as string)
		: { email: '', password: '' },
	token: localStorage.getItem('token') ? (localStorage.getItem('token') as string) : '',
	refreshToken: localStorage.getItem('refreshToken')
		? (localStorage.getItem('refreshToken') as string)
		: '',
	loading: false
});

// ✅ Safe subscription for localStorage (browser-only)
if (isBrowser) {
	Auth.subscribe((v) => {
		localStorage.setItem('auth', JSON.stringify(v.user));
		localStorage.setItem('token', v.token);
		localStorage.setItem('refreshToken', v.refreshToken);
	});
}

const setAuth = (auth: TAuth) => {
	Auth.set({
		user: auth.user,
		token: auth.token,
		refreshToken: auth.refreshToken,
		loading: false
	});
};

const setToken = (token: string) => {
	Auth.set({
		user: get(Auth).user,
		token: token,
		refreshToken: get(Auth).refreshToken,
		loading: false
	});
};

const setRefreshToken = (refreshToken: string) => {
	Auth.set({
		user: get(Auth).user,
		token: get(Auth).token,
		refreshToken: refreshToken,
		loading: false
	});
};

const logout = () => {
	Auth.set({
		user: { email: '', password: '' },
		token: '',
		refreshToken: '',
		loading: false
	});
};
const setLoading = (loading: boolean) => {
	Auth.set({
		user: get(Auth).user,
		token: get(Auth).token,
		refreshToken: get(Auth).refreshToken,
		loading: loading
	});
};

export { Auth, setAuth, setToken, setRefreshToken, logout, setLoading };
