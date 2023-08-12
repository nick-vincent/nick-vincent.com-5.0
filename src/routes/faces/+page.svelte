<script>
	import Grid from '$lib/gallery/Grid.svelte';

	export let data;

	$: images = data.images;
</script>

<Grid {images} />
