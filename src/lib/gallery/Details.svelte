<script>
	import FeedLink from '$lib/ui/FeedLink.svelte';
	import InstagramLink from '$lib/ui/InstagramLink.svelte';
	import BuyPrintLink from '$lib/ui/BuyPrintLink.svelte';

	export let image;
	export let prevImage;
	export let nextImage;
	export let dir;

	const { title, date, caption, id, buy } = image;
	const backUrl = `/${dir}/`;
	const feedUrl = `/${dir}/feed`;
	const instagramUrl = `https://instagram.com/p/${id}`;
	const showUI = Boolean(prevImage || nextImage || dir);
	const showIcons = Boolean(buy || id || dir);
	const useHangingPunctuation = dir === 'faces';
</script>

{#if showUI}
	<ul class="inline">
		{#if prevImage}
			<li><a href={prevImage.url} aria-label="View the previous image">Prev</a></li>
		{/if}
		{#if nextImage}
			<li><a href={nextImage.url} aria-label="View the next image">Next</a></li>
		{/if}
		{#if backUrl}
			<li><a href={backUrl} aria-label="View the image gallery">All</a></li>
		{/if}
	</ul>
{/if}

{#if title}<h2>{title}</h2>{/if}
{#if date}<p class="date">{date}</p>{/if}
{#if caption}<p class="caption" class:useHangingPunctuation>{caption}</p>{/if}
{#if showIcons}
	<ul class="icons">
		{#if feedUrl}
			<li><FeedLink url={feedUrl} text="Subscribe to RSS feed" /></li>
		{/if}
		{#if buy}
			<li><BuyPrintLink url={buy} text="Purchase a print" /></li>
		{/if}
		{#if id}
			<li><InstagramLink url={instagramUrl} text="View on Instagram" /></li>
		{/if}
	</ul>
{/if}

<style>
	.date {
		text-transform: uppercase;
		letter-spacing: 0.25em;
		font-size: 0.75rem;
		font-weight: 500;
	}

	.inline {
		margin-top: 0;
	}

	ul.icons {
		display: flex;
		gap: 1rem;
	}

	.useHangingPunctuation {
		text-indent: calc(-1rem * 10 / 24);
	}
</style>
