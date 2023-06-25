<script>
	import { fly, scale } from 'svelte/transition';
	import { expoOut, expoIn } from 'svelte/easing';

	export let pathname = '';

	const duration = 250;

	let windowWidth;

	$: desktop = windowWidth >= 640;
	$: transition = desktop ? fly : scale;

	$: inTransition = desktop
		? {
				duration,
				delay: duration,
				easing: expoOut,
				y: '-2rem'
		  }
		: {
				duration,
				delay: duration,
				easing: expoOut,
				start: 0.9
		  };

	$: outTransition = desktop
		? {
				duration,
				easing: expoIn,
				y: '2rem'
		  }
		: {
				duration,
				easing: expoIn,
				start: 0.9
		  };
</script>

<svelte:window bind:innerWidth={windowWidth} />

{#key pathname}
	<div class="transition" in:transition={inTransition} out:transition={outTransition}>
		<slot />
	</div>
{/key}

<style>
	.transition {
		transform-origin: 50% 2rem;
		transition: opacity calc(var(--duration-menu) * 2) var(--easing-accelerate),
			transform calc(var(--duration-menu) * 2) var(--easing-accelerate);
	}

	:global(html.nav-open .transition) {
		opacity: 0.75;
		transform: scale(0.9);
		transition: opacity calc(var(--duration-menu) * 2) var(--easing-decelerate),
			transform calc(var(--duration-menu) * 2) var(--easing-decelerate);
	}
</style>
