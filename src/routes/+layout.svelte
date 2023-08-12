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

<style>
	main {
		flex: 1;
		padding: 6rem 0 4rem;
		text-align: left;
	}

	footer {
		padding: 1rem 0 1rem 0;
		text-align: center;
		font-size: 0.75rem;
		border-top: 0.05rem solid var(--color-line);
	}
</style>
