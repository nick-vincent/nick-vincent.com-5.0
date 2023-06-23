<script>
	import Nav from './nav.svelte';
	import Transition from '$lib/transition.svelte';
	import '../app.css';

	export let data;

	$: pathParts = data.pathname.split('/');
	$: dir = `/${pathParts[1]}`;
</script>

<header>
	<Nav />
</header>

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
	header {
		padding: 0 0 1rem 0;
		border-bottom: 0.05rem solid var(--color-line);
	}

	main {
		flex: 1;
		padding: 4rem 0;
		text-align: center;
	}

	footer {
		padding: 1rem 0 0 0;
		text-align: center;
		font-size: 0.75rem;
		border-top: 0.05rem solid var(--color-line);
	}
</style>
