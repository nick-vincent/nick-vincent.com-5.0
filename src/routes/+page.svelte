<script>
	import Image from '$lib/image.svelte';
	import Portrait from '../img/nick-vincent.jpg?format=webp&w=680&h=680&as=meta';
</script>

<h1>Nick Vincent</h1>

<div class="image">
	<Image src={Portrait.src} alt="Portrait of Nick Vincent" aspect="1" radius="50%" />
</div>

<!-- <p>is known to</p>

<ul>
	<li><a href="/work/">push pixels</a></li>
	<li><a href="/tunes/">strum tunes</a></li>
	<li><a href="/faces/">make faces</a></li>
	<li><a href="/photos/">snap photos</a></li>
</ul>

<p>
	Feel free to <br />
	<a href="/contact/">drop him a line</a>
</p> -->

<style>
	.image {
		width: 14rem;
		margin: 1rem auto 0;
		border-radius: 50%;
		box-shadow: var(--image-shadow);
	}

	/* 
	ul {
		display: flex;
		justify-content: center;
		gap: 1rem;
		padding: 0;
		margin: 0;
		font-size: 0.75rem;
		font-weight: 500;
		list-style: none;
	}

	li {
		padding: 0;
		margin: 0;
	} */
</style>
