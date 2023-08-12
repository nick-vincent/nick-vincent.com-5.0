<script>
	import Gallery from '$lib/gallery.svelte';
	import { getImageData } from '$lib/data';

	const images = getImageData('photos');
</script>

<div class="intro">
	<h1>Photos</h1>
	<p>Photography from around the world.</p>
</div>

<Gallery {images} />
