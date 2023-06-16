<script>
	import Gallery from '$lib/gallery.svelte';
	import { getImageData } from '$lib/data';

	const images = getImageData('photos');
</script>

<h1>Photos</h1>
<p>Photography from various locales around the world.</p>

<Gallery {images} />
