<script>
	import FeedLink from '$lib/ui/FeedLink.svelte';
	import InstagramLink from '$lib/ui/InstagramLink.svelte';

	export let image;
	export let prevImage;
	export let nextImage;
	export let dir;

	const { title, date, caption, id } = image;
	const backUrl = `/${dir}/`;
	const feedUrl = `/${dir}/feed`;
	const instagramUrl = `https://instagram.com/p/${id}`;
	const showUI = Boolean(id || prevImage || nextImage || backUrl);
</script>

{#if title}<h2>{title}</h2>{/if}
{#if date}<p class="date">{date}</p>{/if}
{#if caption}<p class="caption">{caption}</p>{/if}
{#if showUI}
	<ul class="inline">
		{#if feedUrl}
			<li><FeedLink url={feedUrl} /></li>
		{/if}
		{#if id}
			<li><InstagramLink url={instagramUrl} /></li>
		{/if}
		{#if prevImage}
			<li><a href={prevImage.url}>Prev</a></li>
		{/if}
		{#if nextImage}
			<li><a href={nextImage.url}>Next</a></li>
		{/if}
		{#if backUrl}
			<li><a href={backUrl}>See all</a></li>
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

	ul {
		font-size: 0.75rem;
		line-height: 1rem;
		margin: 1.5rem 0 0;
	}
</style>
