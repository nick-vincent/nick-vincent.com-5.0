<script>
	import PageTransition from '$lib/PageTransition.svelte';

	export let data;

	$: pathParts = data.pathname.split('/');
	$: slug = pathParts[2];
</script>

<div class="intro">
	<h1>Photos</h1>
	<p>Photography from around the world.</p>
</div>

<PageTransition key={slug}>
	<slot />
</PageTransition>
