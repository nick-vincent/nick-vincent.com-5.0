<script>
	import Grid from '$lib/gallery/Grid.svelte';

	export let data;

	$: images = data.images;
</script>

<svelte:head>
	<title>Nick Vincent → Photos</title>
	<meta
		name="description"
		content="Photography from around the world."
	/>
</svelte:head>

<Grid {images} />
