<script>
	let {  filterValue = $bindable() } = $props();
	console.log(filterValue);

	const filterOptions = [
		{ value: 'popular', label: 'Most Popular' },
		{ value: 'low-to-high', label: 'Price: Low to High' },
		{ value: 'high-to-low', label: 'Price: High to Low' }
	];
</script>

<div class="mb-6 flex items-center justify-between">
	<h2 class="text-2xl font-bold">Your Products</h2>
	<div class="flex items-center space-x-2">
		<span class="text-sm">Sort by:</span>
		<select bind:value={filterValue} class="rounded-md border px-2 py-1 text-sm">
			{#each filterOptions as filter (filter.value)}
				<option value={filter.value}>{filter.label}</option>
			{/each}
		</select>
	</div>
</div>
