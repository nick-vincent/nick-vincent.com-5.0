<script>
	import Header from './header.svelte';
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

<footer>
	<p>
		Made with ❤️ with <a href="https://svelte.dev" rel="external noreferrer" target="_blank"
			>Svelte</a
		>
	</p>
</footer>
