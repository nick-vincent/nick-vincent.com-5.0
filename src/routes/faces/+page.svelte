<script>
	// import Gallery from '$lib/Gallery.svelte';
	import { getImageData } from '$lib/data';

	const images = getImageData('faces');

	console.log(images);
</script>

<h1>Faces</h1>
<p>Portraits of various famous folks.</p>

<!-- <Gallery {images} /> -->

<ul>
	{#each images as image}
		<li>{image.title}</li>
	{/each}
</ul>
