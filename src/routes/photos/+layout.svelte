<script>
	import { afterNavigate } from '$app/navigation';
	import PageTransition from '$lib/PageTransition.svelte';

	export let data;

	let anchor;

	$: pathParts = data.pathname.split('/');
	$: slug = pathParts[2];

	afterNavigate(() => {
		if (slug) anchor.scrollIntoView();
	});
</script>

<div class="intro">
	<h1>Photos</h1>
	<p>Photography from around the world.</p>
	<div bind:this={anchor}></div>
</div>

<PageTransition key={slug}>
	<slot />
</PageTransition>
