<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<main class="container mx-auto px-4 py-8 md:px-8">
	<div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
		{@render children?.()}
	</div>
</main>
