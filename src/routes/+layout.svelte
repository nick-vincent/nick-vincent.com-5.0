<script>
	import Header from './header.svelte';
	import Transition from '$lib/transition.svelte';
	import '../app.css';

	export let data;

	const { dir } = data;

	let windowWidth;

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
	<Transition pathname={dir}>
		<slot />
	</Transition>
</main>

<footer>
	<p>
		Made with ❤️ with <a href="https://svelte.dev" rel="external noreferrer" target="_blank"
			>Svelte</a
		>
	</p>
</footer>

<style>
	:global(html.no-transitions *),
	:global(html.no-transitions *::before),
	:global(html.no-transitions *::after) {
		transition: none !important;
	}

	main {
		flex: 1;
		padding: 6rem 0 4rem;
		text-align: center;
	}

	footer {
		padding: 1rem 0 1rem 0;
		text-align: center;
		font-size: 0.75rem;
		border-top: 0.05rem solid var(--color-line);
	}
</style>
