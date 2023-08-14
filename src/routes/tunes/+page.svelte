<svelte:head>
	<title>Nick Vincent → Tunes</title>
	<meta name="description" content="Some musical endeavors of mine." />
</svelte:head>

<div class="intro">
	<h1>Tunes</h1>
	<p>Some musical endeavors of mine.</p>
</div>

<div class="grid">
	<div class="row">
		<div class="details">
			<h2>Just me & my guitar</h2>
			<p>Lots of cover songs and a few originals.</p>
		</div>
		<div class="video">
			<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/videoseries?list=PLmMZSDatGk4ckjfFE82f7O-s97zjN-NL8&modestbranding=1&color=white"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			/>
		</div>
	</div>
	<div class="row">
		<div class="details">
			<h2>My band Annum Ford</h2>
			<p>Filmed at Freakin’ Frog in Las Vegas on December 14, 2006.</p>
		</div>
		<div class="video">
			<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/videoseries?list=PLkCSJIvjbqhu3i1saWiZRxZefRkCqjoN_&modestbranding=1&color=white"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			/>
		</div>
	</div>
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 3rem;
	}

	.row {
		display: grid;
		grid-template-columns: 1fr;
		column-gap: 1.5rem;
		row-gap: 0.25rem;
	}

	.details {
		order: 2;
	}

	.video {
		order: 1;
	}

	iframe {
		width: 100%;
		height: auto;
		aspect-ratio: 16 / 9;
		border-radius: 1rem;
		background-color: var(--color-image-background);
		box-shadow: var(--image-shadow);
	}

	@media (min-width: 1024px) {
		.row {
			grid-template-columns: 2fr 1fr;
		}
	}
</style>
