<script lang="ts">
	import z from 'zod';

	// 🍃 Form model using Zod for lightweight validation
	const LoginSchema = z.object({
		email: z.string().email({ message: 'Valid email required' }),
		password: z.string().min(6, { message: 'At least 6 chars' }),
		remember: z.boolean().optional()
	});

	// 🗂️ Form state
	let form = { email: '', password: '', remember: false };
	let errors: Record<string, string> = {};
	let loading = false;

	const handleSubmit = async () => {};
</script>

<!-- ⚡ Styled with Tailwind – tweak to taste -->
<div
	class="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 to-white p-6"
>
	<form
		on:submit|preventDefault={handleSubmit}
		class="w-full max-w-sm rounded-2xl bg-white p-8 shadow-xl ring-1 ring-indigo-100"
	>
		<h1 class="mb-6 text-center text-2xl font-bold text-black">Sign In</h1>

		<!-- Email -->
		<div class="mb-4">
			<label for="email" class="mb-1 block text-sm font-medium text-gray-600">Email</label>
			<input
				id="email"
				type="email"
				class="block w-full rounded-lg border border-gray-300 p-2 focus:border-black focus:ring-black"
				bind:value={form.email}
				placeholder="you@example.com"
			/>
			{#if errors.email}
				<p class="mt-1 text-xs text-red-500">{errors.email}</p>
			{/if}
		</div>

		<!-- Password -->
		<div class="mb-4">
			<label for="password" class="mb-1 block text-sm font-medium text-gray-600">Password</label>
			<input
				id="password"
				type="password"
				class="block w-full rounded-lg border border-gray-300 p-2 focus:border-black focus:ring-black"
				bind:value={form.password}
				placeholder="••••••••"
			/>
			{#if errors.password}
				<p class="mt-1 text-xs text-red-500">{errors.password}</p>
			{/if}
		</div>

		<!-- Remember me & Forgot -->
		<div class="mb-6 flex items-center justify-between">
			<label class="flex items-center gap-2 text-sm">
				<input
					type="checkbox"
					bind:checked={form.remember}
					class="rounded border-gray-300 text-black focus:ring-black"
				/>
				Remember me
			</label>
			<a href="/register" class="text-sm text-black hover:underline">Forgot password?</a>
		</div>

		<!-- Submit -->
		<button
			type="submit"
			class="flex w-full items-center justify-center gap-2 rounded-lg bg-black py-2 font-semibold text-white hover:bg-gray-800 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
			disabled={loading}
		>
			{#if loading}
				<svg
					class="h-5 w-5 animate-spin"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"
					></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"
					></path></svg
				>
			{/if}
			Sign In
		</button>

		<!-- Divider -->
		<div class="my-6 flex items-center">
			<hr class="flex-grow border-gray-200" />
			<span class="mx-3 text-xs text-gray-400">or</span>
			<hr class="flex-grow border-gray-200" />
		</div>

		<!-- Social login placeholder -->
		<button
			type="button"
			class="w-full rounded-lg border border-gray-300 py-2 font-medium text-gray-700 hover:bg-gray-50"
		>
			Continue with Google
		</button>
	</form>
</div>
