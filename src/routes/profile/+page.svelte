<script lang="ts">
	import Container from '../../components/shared/Container.svelte';

	// mock data
	let profile = {
		name: 'Arif',
		email: 'arif@example.com',
		bio: 'Full‑stack dev, club prez, meme connoisseur.',
		avatar: 'https://avatars.githubusercontent.com/u/113016314?v=4'
	};

	let editing = $state(false);
	const toggle = () => (editing = !editing);
	const save = () => {
		// TODO: call API
		editing = false;
	};
</script>

<!-- 🔮 Glassy card -->
<Container>
	<section
		class="flex min-h-[70vh] items-center justify-center bg-gradient-to-br from-indigo-50 to-white"
	>
		<div class="w-full max-w-xl rounded-3xl shadow-2xl backdrop-blur-xl">
			<!-- header bar -->
			<div
				class="h-3 rounded-t-3xl bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500"
			></div>

			<!-- content -->
			<div class="p-8 sm:p-10">
				<!-- avatar + name -->
				<div class="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
					<img
						class="mb-5 h-28 w-28 rounded-full object-cover shadow-lg ring-4 ring-white"
						src={profile.avatar}
						alt="avatar"
					/>
					<div class="mt-4 text-center sm:text-left">
						{#if editing}
							<input
								type="text"
								class="mt-3 w-full rounded-xl border px-3 py-2 text-xl font-semibold focus:ring-2 focus:ring-indigo-500"
								bind:value={profile.name}
							/>
						{:else}
							<h1 class="text-2xl font-bold text-gray-900">{profile.name}</h1>
						{/if}
						<p class="mt-1 text-sm text-gray-500">Member since 2023</p>
					</div>
					<button
						onclick={toggle}
						class="ml-auto hidden rounded-lg border px-4 py-1.5 text-sm font-medium transition hover:bg-gray-100 active:scale-95 sm:block"
					>
						{editing ? 'Cancel' : 'Edit'}
					</button>
				</div>

				<!-- divider -->
				<hr class="my-6 border-gray-200" />

				<!-- email -->
				<div class="mb-5">
					<label
						for="profile-email"
						class="block text-xs font-medium tracking-wide text-gray-600 uppercase"
					>
						Email
					</label>
					{#if editing}
						<input
							id="profile-email"
							type="email"
							class="mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-indigo-500"
							bind:value={profile.email}
						/>
					{:else}
						<p class="mt-1 text-gray-800">{profile.email}</p>
					{/if}
				</div>

				<!-- bio -->
				<div>
					<label
						for="profile-bio"
						class="block text-xs font-medium tracking-wide text-gray-600 uppercase"
					>
						Bio
					</label>
					{#if editing}
						<textarea
							id="profile-bio"
							class="mt-1 h-28 w-full resize-none rounded-lg border px-3 py-2 focus:ring-2 focus:ring-indigo-500"
							bind:value={profile.bio}
						></textarea>
					{:else}
						<p class="mt-1 whitespace-pre-line text-gray-800">{profile.bio}</p>
					{/if}
				</div>

				<!-- mobile edit button -->
				{#if !editing}
					<button
						onclick={toggle}
						class="mt-6 w-full rounded-xl border py-2 text-sm font-medium transition hover:bg-gray-50 sm:hidden"
					>
						Edit Profile
					</button>
				{:else}
					<button
						onclick={save}
						class="mt-6 w-full rounded-xl border py-2 text-sm font-medium transition hover:bg-gray-50 sm:hidden"
					>
						Save Changes
					</button>
				{/if}
			</div>
		</div>
	</section>
</Container>
