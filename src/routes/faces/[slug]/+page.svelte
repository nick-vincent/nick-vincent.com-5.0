<script>
	import { fly } from 'svelte/transition';

	import Lightbox from '$lib/lightbox.svelte';

	export let data;

	$: image = data.image;
	$: prevImage = data.prevImage;
	$: nextImage = data.nextImage;
</script>

{#key image}
	<!-- <div in:fly|global={{ duration: 300, delay: 400, x: 200 }} out:fly|global={{ duration: 300, x: -200 }}> -->
	<Lightbox {image} {prevImage} {nextImage} backUrl="/faces/" feedUrl="/faces/feed" />
	<!-- </div> -->
{/key}
