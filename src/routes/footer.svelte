<footer>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/work/">Work</a></li>
		<li><a href="/tunes/">Tunes</a></li>
		<li><a href="/faces/">Faces</a></li>
		<li><a href="/photos/">Photos</a></li>
		<li><a href="/contact/">Contact</a></li>
	</ul>
	<p>
		Built with <a href="https://svelte.dev" rel="external noreferrer" target="_blank">Svelte</a>
	</p>
</footer>

<style>
	footer {
		padding: 2rem 0 3rem;
		text-align: center;
	}

	@media (min-width: 860px) {
		ul {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 1rem;
		}

		footer {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 2rem;
			padding: 0.25rem 0 3rem;
		}
	}
</style>
