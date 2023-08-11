<script>
	import { scale } from 'svelte/transition';
	import { expoInOut } from 'svelte/easing';

	import Thumbnail from '$lib/thumbnail.svelte';

	export let images = [];
</script>

<ul>
	{#each images as image, i}
		<li in:scale|global={{ duration: 500, delay: i * 50 + 250, start: 0.5, easing: expoInOut }}>
			<Thumbnail {image} />
		</li>
	{/each}
</ul>

<style>
	ul {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(5rem, 1fr));
		gap: 1rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	li {
		margin: 0;
		width: 100%;
		height: auto;
		aspect-ratio: 1;
	}
</style>
