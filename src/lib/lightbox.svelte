<script>
	import { goto } from '$app/navigation';
	import { spring } from 'svelte/motion';
	import { onMount } from 'svelte';
	import { createObserver } from 'svelte-use-io';
	import { swipeable } from '$lib/swipeable';
	// import InstagramLink from '$lib/InstagramLink.svelte';
	// import FeedLink from '$lib/FeedLink.svelte';

	import Image from '$lib/image.svelte';

	export let image;
	export let prevImage;
	export let nextImage;
	export let backUrl;
	// export let feedUrl;

	$: id = image.id;
	$: title = image.title;
	$: date = image.date;
	$: caption = image.caption;
	$: imageData = image.imageData;
	$: src = imageData.src;
	$: aspect = imageData.aspect;

	const { observer } = createObserver();

	let left;
	let grabbing = false;

	function onKeyUp(e) {
		switch (e.key) {
			case 'Escape':
				if (backUrl) goto(backUrl);
				break;
			case 'ArrowLeft':
				if (prevImage) goto(prevImage.url);
				break;
			case 'ArrowRight':
				if (nextImage) goto(nextImage.url);
				break;
		}
	}

	const coords = spring(
		{ x: 0 },
		{
			stiffness: 0.25,
			damping: 1
		}
	);

	function onSwipeStart() {
		grabbing = true;
	}
	function onSwipeMove(e) {
		const { dx } = e.detail;
		coords.update(($coords) => ({
			x: $coords.x + dx
		}));
	}
	function onSwipeCancel(e) {
		grabbing = false;
		const { dx, direction } = e.detail;
		const swiped = Math.abs(dx) > left.clientWidth / 2;

		if (swiped && direction === 'left') {
			if (nextImage) goto(nextImage.url);
		} else if (swiped && direction === 'right') {
			if (prevImage) goto(prevImage.url);
		} else {
			coords.set({ x: 0 });
		}
	}
	function onSwipe(e) {
		if (e.detail.direction === 'left') {
			if (nextImage) goto(nextImage.url);
		} else {
			if (prevImage) goto(prevImage.url);
		}
	}
</script>

<svelte:window on:keyup={(e) => onKeyUp(e)} />

<div
	class="lightbox {aspect < 1.6 ? 'portrait' : 'landscape'}"
	style="transform: translateX({$coords.x}px);"
>
	<div class="right">
		{#if title}<h1>{title}</h1>{/if}
		{#if date}<p class="date">{date}</p>{/if}
		{#if caption}<p class="caption">{caption}</p>{/if}
		{#if id || prevImage || nextImage || backUrl}
			<ul class="inline">
				<!-- {#if feedUrl}
					<li><FeedLink url={feedUrl} /></li>
				{/if}
				{#if id}
					<li><InstagramLink url={`https://instagram.com/p/${id}`} /></li>
				{/if} -->
				{#if prevImage}
					<li><a href={prevImage.url}>Prev</a></li>
				{/if}
				{#if nextImage}
					<li><a href={nextImage.url}>Next</a></li>
				{/if}
				{#if backUrl}
					<li><a class="arrow-link" href={backUrl}>See all</a></li>
				{/if}
			</ul>
		{/if}
	</div>
	<div
		bind:this={left}
		class="left"
		class:grabbing
		use:swipeable
		on:swipestart={onSwipeStart}
		on:swipemove={(e) => onSwipeMove(e)}
		on:swipecancel={(e) => onSwipeCancel(e)}
		on:swipe={(e) => onSwipe(e)}
	>
		<Image {src} alt={title} {aspect} radius="1rem" delay="500ms" />
	</div>
</div>

<style>
	h1 {
		font-size: 1.5rem;
		letter-spacing: -0.05rem;
	}

	.lightbox {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1rem;
		will-change: transform;
		transition:
			var(--transition-dom-x-ray),
			transform 0s;
		text-align: left;
	}

	.left {
		order: 1;
		max-width: 100%;
		border-radius: 1rem;
		box-shadow: var(--image-shadow);
		cursor: grab;
	}
	.right {
		order: 2;
		width: 100%;
		max-width: 14rem;
	}
	.landscape .left {
		width: 38rem;
	}
	.portrait .left {
		width: 23rem;
	}

	ul {
		font-size: 0.75rem;
		line-height: 1rem;
		margin: 1.5rem 0 0;
	}

	.grabbing {
		cursor: grabbing;
	}
</style>
