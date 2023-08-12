<script>
	import Image from '$lib/image.svelte';

	export let image;

	const { title, url, thumbData } = image;
	const { src } = thumbData;

	let card;
	let mouseX = 0;
	let mouseY = 0;

	$: rotateY = mouseX ? `${(mouseX / card.clientWidth) * 2 * 10}deg` : '0deg';
	$: rotateX = mouseY ? `${(mouseY / card.clientHeight) * 2 * 10}deg` : '0deg';

	function onMouseMove(e) {
		mouseX = e.offsetX - e.target.clientWidth / 2;
		mouseY = e.target.clientHeight / 2 - e.offsetY;
	}

	function onMouseLeave() {
		mouseX = 0;
		mouseY = 0;
	}
</script>

<a href={url} bind:this={card} on:mousemove={(e) => onMouseMove(e)} on:mouseleave={onMouseLeave}>
	<span
		class="card"
		style:--mouseX={mouseX}
		style:--mouseY={mouseY}
		style:--rotateX={rotateX}
		style:--rotateY={rotateY}
	>
		<Image {src} alt={title} aspect="1" radius="0.5rem" delay="500ms" />
		<span class="shine" />
	</span>
</a>

<style>
	a {
		z-index: 1;
		position: relative;
		display: block;
		width: 100%;
		height: auto;
		aspect-ratio: 1;
		border-radius: 0.5rem;
	}
	a::before {
		display: none;
	}

	.card {
		--scale: 1;
		pointer-events: none;
		position: relative;
		display: block;
		border-radius: 0.5rem;
		box-shadow: var(--image-shadow);
		overflow: hidden;
		will-change: transform;
		backface-visibility: hidden;
		transform-style: preserve-3d;
		transform: perspective(10em) scale(var(--scale)) rotateY(var(--rotateY)) rotateX(var(--rotateX));
		transition:
			var(--transition-dom-x-ray),
			box-shadow 150ms ease-in,
			transform 150ms ease-in;
	}

	/* light gradient */
	.shine {
		z-index: 2;
		pointer-events: none;
		content: '';
		display: block;
		position: absolute;
		inset: -50%;
		will-change: opacity, transform;
		opacity: 0;
		background-image: radial-gradient(circle closest-side, white, transparent);
		background-repeat: no-repeat;
		transition:
			var(--transition-dom-x-ray),
			transform 150ms ease-in,
			opacity 150ms ease-in;
		transform: translateX(calc(var(--mouseX) * 1px)) translateY(calc(var(--mouseY) * -1px));
	}

	a:focus .card {
		--scale: 1.075;
		z-index: 2;
		box-shadow: var(--image-shadow-focus);
		transition:
			var(--transition-dom-x-ray),
			box-shadow 150ms ease-out,
			transform 150ms ease-out;
	}
	a:focus .shine {
		opacity: 0.1;
		transition:
			var(--transition-dom-x-ray),
			transform 150ms ease-out,
			opacity 150ms ease-out;
	}

	@media (hover: hover) {
		a:hover .card {
			--scale: 1.075;
			z-index: 2;
			box-shadow: var(--image-shadow-focus);
			transition:
				var(--transition-dom-x-ray),
				box-shadow 150ms ease-out,
				transform 150ms ease-out;
		}
		a:hover .shine {
			opacity: 0.2;
			transition:
				var(--transition-dom-x-ray),
				transform 150ms ease-out,
				opacity 150ms ease-out;
		}
	}
</style>
