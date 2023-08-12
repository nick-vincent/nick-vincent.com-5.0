<script>
	import PageTransition from '$lib/PageTransition.svelte';

	export let data;

	$: pathParts = data.pathname.split('/');
	$: slug = pathParts[2];
</script>

<div class="intro">
	<h1>Faces</h1>
	<p>Portraits of various famous folks.</p>
</div>

<PageTransition key={slug}>
	<slot />
</PageTransition>
