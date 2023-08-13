<script>
	import Lightbox from '$lib/gallery/Lightbox.svelte';

	export let data;

	$: image = data.image;
	$: prevImage = data.prevImage;
	$: nextImage = data.nextImage;
	$: title = image.title;
	$: caption = image.caption;
</script>

<svelte:head>
	<title>Nick Vincent → Photos → {title}</title>
	<meta
		name="description"
		content={caption}
	/>
</svelte:head>

<Lightbox {image} {prevImage} {nextImage} dir="photos" />
