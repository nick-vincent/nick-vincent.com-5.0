<script>
	import Lightbox from '$lib/gallery/Lightbox.svelte';

	export let data;

	$: image = data.image;
	$: prevImage = data.prevImage;
	$: nextImage = data.nextImage;
</script>

<Lightbox {image} {prevImage} {nextImage} dir="faces" />
