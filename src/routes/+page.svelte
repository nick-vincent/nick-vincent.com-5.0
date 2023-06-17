<script>
	import Image from '../img/nick-vincent.jpg?format=webp&w=480&h=480&as=meta';
</script>

<h1>Nick Vincent</h1>

<img alt="Portrait of Nick Vincent" src={Image.src} width="480" height="480" />

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
	img {
		border-radius: 50%;
		width: 14rem;
		height: auto;
		margin-top: 1rem;
		background-color: var(--image-background);
		box-shadow: var(--image-shadow);
	}

	ul {
		display: flex;
		justify-content: center;
		gap: 1rem;
		padding: 0;
		margin: 0;
		/* font-size: 0.75rem; */
		/* font-weight: 500; */
		list-style: none;
	}

	li {
		padding: 0;
		margin: 0;
	}
</style>
