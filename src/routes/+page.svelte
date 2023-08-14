<script>
	import Image from '$lib/Image.svelte';
	import Portrait from '../img/rock-out.jpg?format=webp&w=1600&as=meta';
</script>

<svelte:head>
	<title>Nick Vincent</title>
	<meta
		name="description"
		content="Personal website of Nick Vincent featuring work, tunes, faces, & photos."
	/>
</svelte:head>

<div class="grid">
	<div class="right">
		<h1 class="">Nick</h1>
		<p>is known to:</p>
		<ul class="bullet">
			<li><a href="/work/">push pixels</a></li>
			<li><a href="/tunes/">strum tunes</a></li>
			<li><a href="/faces/">make faces</a></li>
			<li><a href="/photos/">snap photos</a></li>
			<li><a href="/contact/">reply promptly</a></li>
		</ul>
	</div>
	<div class="left">
		<div class="image">
			<Image
				src={Portrait.src}
				alt="Nick Vincent recording guitar tracks."
				aspect=".8"
				radius="1.5rem"
			/>
		</div>
	</div>
</div>

<style>
	.image {
		width: 100%;
		border-radius: 1.5rem;
		box-shadow: var(--image-shadow);
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
	}

	.left {
		order: 1;
	}

	.right {
		order: 2;
	}

	p {
		margin-top: 0.5rem;
	}

	@media (min-width: 860px) {
		.grid {
			grid-template-columns: 2fr 1fr;
		}
	}
</style>
