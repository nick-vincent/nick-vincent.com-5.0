<script>
	import Header from './header.svelte';
	import Footer from './footer.svelte';
	import PageTransition from '$lib/PageTransition.svelte';
	import '../app.css';

	export let data;

	let windowWidth;

	$: pathParts = data.pathname.split('/');
	$: dir = `/${pathParts[1]}`;

	$: if (windowWidth) {
		document.documentElement.classList.add('no-transitions');
		setTimeout(() => {
			document.documentElement.classList.remove('no-transitions');
		}, 50);
	}
</script>

<svelte:window bind:innerWidth={windowWidth} />

<Header />

<main>
	<PageTransition key={dir}>
		<slot />
	</PageTransition>
</main>

<Footer />
