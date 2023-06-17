<script>
	import { page } from '$app/stores';
	import Lightbox from '$lib/lightbox.svelte';
	import { getImageData } from '$lib/data';

	const images = getImageData('photos');
	const image = images.find((i) => i.slug === $page.params.slug);
	const index = images.indexOf(image);
	const prevImage = images[index - 1] || images[images.length - 1];
	const nextImage = images[index + 1] || images[0];
</script>

<Lightbox {image} {prevImage} {nextImage} backUrl="/faces/" feedUrl="/faces/feed" />
