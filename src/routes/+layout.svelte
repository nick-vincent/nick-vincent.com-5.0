<script>
	import Nav from '$lib/nav.svelte';
	import '../app.css';
</script>

<header>
	<Nav />
</header>

<main>
	<slot />
</main>

<footer>Made with SvelteKit</footer>

<style>
	main {
		flex: 1;
	}
</style>
