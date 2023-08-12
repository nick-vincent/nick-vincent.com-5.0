<script>
	import Gallery from '$lib/gallery.svelte';
	import { getImageData } from '$lib/data';

	const images = getImageData(
		'faces',
		'png',
		(t) => `${t}.`,
		(c) => `“${c}”`
	);
</script>

<div class="intro">
	<h1>Faces</h1>
	<p>Portraits of various famous folks.</p>
</div>

<Gallery {images} />
