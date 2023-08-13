<script>
	import Grid from '$lib/gallery/Grid.svelte';

	export let data;

	$: images = data.images;
</script>

<svelte:head>
	<title>Nick Vincent → Faces</title>
	<meta
		name="description"
		content="Portraits of various famous folks."
	/>
</svelte:head>

<Grid {images} />
