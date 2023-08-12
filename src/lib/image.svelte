<script>
	import { onMount } from 'svelte';
	import { createObserver } from 'svelte-use-io';
	import Spinner from '$lib/spinner.svelte';

	export let src;
	export let alt;
	export let aspect;
	export let radius = 'none';
	export let delay = '0ms';

	const { observer } = createObserver();

	let img;
	let loaded = false;
	let visible = false;

	onMount(() => {
		if (img.complete) {
			delay = '0ms';
			loaded = true;
		}
	});

	function onVisible() {
		visible = true;
	}

	function onLoad() {
		loaded = true;
	}
</script>

<span
	class="wrapper"
	class:loaded
	style="--border-radius: {radius}; --delay: {delay};"
	use:observer={{ once: true }}
	on:intersecting={onVisible}
>
	<img
		bind:this={img}
		{src}
		{alt}
		loading="lazy"
		style:aspect-ratio={aspect}
		on:load|once={onLoad}
	/>
	{#if visible && !loaded}
		<Spinner />
	{/if}
</span>

<style>
	.wrapper {
		display: block;
		position: relative;
		overflow: hidden;
		border-radius: var(--border-radius);
		background-color: var(--color-image-background);
	}
	.wrapper::before {
		content: '';
		z-index: 3;
		position: absolute;
		display: block;
		inset: 0;
		border-radius: var(--border-radius);
		box-shadow: inset 0 0 0 1px var(--color-line);
	}

	img {
		z-index: 1;
		display: block;
		width: 100%;
		height: auto;
		will-change: opacity;
		opacity: 0;
		transition:
			var(--transition-dom-x-ray),
			opacity 500ms ease-in-out var(--delay);
	}
	.loaded img,
	:global(html.no-js) img {
		opacity: 1;
	}
</style>
