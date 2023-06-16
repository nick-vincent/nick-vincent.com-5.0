<script>
	import Gallery from '$lib/gallery.svelte';
	import { getImageData } from '$lib/data';

	const images = getImageData('faces');
</script>

<h1>Faces</h1>
<p>Portraits of various famous folks.</p>

<Gallery {images} />
