<script>
	import { afterNavigate } from '$app/navigation';
	import PageTransition from '$lib/PageTransition.svelte';

	export let data;

	let anchor;

	$: pathParts = data.pathname.split('/');
	$: slug = pathParts[2];

	afterNavigate(() => {
		if (slug) {
			anchor.scrollIntoView();
		} else {
			window.scrollTo(0,0);
		}
	});
</script>

<div class="intro">
	<h1>Faces</h1>
	<p>Portraits of various famous folks.</p>
	<div bind:this={anchor}></div>
</div>

<PageTransition key={slug}>
	<slot />
</PageTransition>
