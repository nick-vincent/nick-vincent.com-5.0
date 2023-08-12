<script>
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';
	import { backIn, backOut } from 'svelte/easing';

	import { createObserver } from 'svelte-use-io';

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
		<span
			class="spinner"
			in:scale|global={{ duration: 500, delay: 500, start: 0, easing: backOut }}
			out:scale|global={{ duration: 500, start: 0, easing: backIn }}
		/>
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

	.spinner {
		z-index: 2;
		position: absolute;
		display: block;
		inset: 0;
	}
	.spinner::before,
	.spinner::after {
		content: '';
		position: absolute;
		width: 25%;
		height: auto;
		aspect-ratio: 1;
		left: 50%;
		top: 50%;
		border-radius: 100%;
		transform: translate(-50%, -50%);
	}
	.spinner::before {
		border: 0.1rem solid var(--color-line);
	}
	.spinner::after {
		border: 0.1rem solid transparent;
		border-top: 0.1rem solid var(--color-line);
		animation: spinner 1s infinite;
	}

	@keyframes spinner {
		0% {
			transform: translate(-50%, -50%) rotate(0deg);
		}
		100% {
			transform: translate(-50%, -50%) rotate(360deg);
		}
	}
</style>
