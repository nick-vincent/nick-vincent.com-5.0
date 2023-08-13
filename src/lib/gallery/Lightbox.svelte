<script>
	import { goto } from '$app/navigation';

	import Image from '$lib/Image.svelte';
	import Details from '$lib/gallery/Details.svelte';

	export let dir;
	export let image;
	export let prevImage;
	export let nextImage;

	const backUrl = `/${dir}/`;

	$: aspect = image.aspect;
	$: src = image.src;
	$: title = image.title;

	function onKeyUp(e) {
		switch (e.key) {
			case 'Escape':
				if (backUrl) goto(backUrl);
				break;
			case 'ArrowLeft':
				if (prevImage) goto(prevImage.url, { noScroll: true });
				break;
			case 'ArrowRight':
				if (nextImage) goto(nextImage.url, { noScroll: true });
				break;
		}
	}
</script>

<svelte:window on:keyup={(e) => onKeyUp(e)} />

<div class="lightbox {aspect <= 1 ? 'portrait' : 'landscape'}">
	<div class="details">
		<Details {dir} {image} {prevImage} {nextImage} />
	</div>
	<div class="image">
		<Image {src} alt={title} {aspect} radius="1rem" delay="500ms" />
	</div>
</div>

<style>
	.lightbox {
		position: relative;
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem;
	}

	.image {
		order: 1;
		width: 100%;
		border-radius: 1rem;
		max-width: 24.5rem;
		box-shadow: var(--image-shadow);
	}
	.landscape .image {
		max-width: 32em;
	}

	.details {
		order: 2;
		width: 16rem;	
	}
</style>
