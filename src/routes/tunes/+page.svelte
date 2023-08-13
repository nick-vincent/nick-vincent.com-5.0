<div class="intro">
	<h1>Tunes</h1>
	<p>Some music projects.</p>
</div>

<div class="grid">
	<div class="column">
		<iframe
			width="560"
			height="315"
			src="https://www.youtube.com/embed/videoseries?list=PLmMZSDatGk4ckjfFE82f7O-s97zjN-NL8&modestbranding=1&color=white"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		/>
		<h2>Just me and my guitar</h2>
		<p>Lots of cover songs and a few originals.</p>
	</div>
	<div class="column">
		<iframe
			width="560"
			height="315"
			src="https://www.youtube.com/embed/videoseries?list=PLkCSJIvjbqhu3i1saWiZRxZefRkCqjoN_&modestbranding=1&color=white"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		/>
		<h2>My band Annum Ford</h2>
		<p>Filmed at Freakin’ Frog in Las Vegas on December 14, 2006.</p>
	</div>
</div>

<style>
	h2 {
		font-size: 1rem;
		margin-bottom: 0.25rem;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;
		font-size: 0.75rem;
		letter-spacing: -0.01rem;
	}

	iframe {
		width: 100%;
		height: auto;
		margin-bottom: 0.5rem;
		aspect-ratio: 16 / 9;
		border-radius: 0.5rem;
	}

	@media (min-width: 1024px) {
		.grid {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
