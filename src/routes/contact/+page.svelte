<script>
	import Image from '$lib/Image.svelte';
	import EmailLink from '$lib/ui/EmailLink.svelte';
	import LinkedInLink from '$lib/ui/LinkedInLink.svelte';
	import InstagramLink from '$lib/ui/InstagramLink.svelte';
	import YouTubeLink from '$lib/ui/YouTubeLink.svelte';
	import PhoneBooth from '../../img/contact.jpg?format=webp&w=1600&as=meta';
</script>

<svelte:head>
	<title>Nick Vincent → Contact</title>
	<meta name="description" content="Connect or drop me a line." />
</svelte:head>

<div class="grid">
	<div class="right">
		<h1>Contact</h1>
		<p>Connect or drop me a line.</p>
		<ul class="icons">
			<li><EmailLink url="mailto:the.nick.vincent@gmail.com" /></li>
			<li><LinkedInLink url="https://www.linkedin.com/in/nickvincent/" /></li>
			<li><InstagramLink url="https://www.instagram.com/the.nick.vincent/" /></li>
			<li><YouTubeLink url="https://www.youtube.com/@nick-vincent" /></li>
		</ul>
	</div>
	<div class="left">
		<div class="image">
			<Image src={PhoneBooth.src} alt="Phone booth relic." aspect=".8" radius="1rem" />
		</div>
	</div>
</div>

<style>
	.image {
		width: 100%;
		border-radius: 1rem;
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
		margin-bottom: 2rem;
	}

	ul.icons {
		display: flex;
		gap: 1rem;
	}

	@media (min-width: 860px) {
		.grid {
			grid-template-columns: 2fr 1fr;
		}
	}
</style>
