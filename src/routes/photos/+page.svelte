<script>
	// import Gallery from '$lib/Gallery.svelte';
	import { getImageData } from '$lib/data';

	const images = getImageData('photos');

	console.log(images);
</script>

<h1>Photos</h1>
<p>Photography from various locales around the world.</p>

<!-- <Gallery {images} /> -->

<ul>
	{#each images as image}
		<li>{image.title}</li>
	{/each}
</ul>
