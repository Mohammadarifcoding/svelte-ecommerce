<script>
	const { rating } = $props();
	console.log(rating);
</script>

<div class="flex text-yellow-400">
	{#each Array(rating) as _, i}
		<span>★</span>
	{/each}
	{#each Array(5 - rating) as _, i}
		<span class="text-gray-300">★</span>
	{/each}
</div>
