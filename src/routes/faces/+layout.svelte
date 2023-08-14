<script>
	import { navigating } from '$app/stores';
	import { afterNavigate } from '$app/navigation';
	import SubPageTransition from '$lib/SubPageTransition.svelte';

	export let data;

	let anchor;

	$: pathParts = data.pathname.split('/');
	$: slug = pathParts[2];

	afterNavigate(() => {
		if ($navigating) {
			if ($navigating.to.params.slug && anchor) {
				anchor.scrollIntoView();
			} else {
				window.scrollTo(0, 0);
			}
		}
	});
</script>

<div class="intro">
	<h1>Faces</h1>
	<p>Portraits of various famous folks.</p>
	<div bind:this={anchor}></div>
</div>

<SubPageTransition key={slug}>
	<slot />
</SubPageTransition>
