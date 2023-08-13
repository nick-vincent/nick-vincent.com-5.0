<script>
	import { scale } from 'svelte/transition';
	import { expoOut, expoIn } from 'svelte/easing';

	export let key = '';

	const duration = 250;

	$: inTransition = {
		duration,
		delay: duration,
		easing: expoOut,
		start: 0.9
	};

	$: outTransition = {
		duration,
		easing: expoIn,
		start: 0.9
	};
</script>

<div class="grid">
	{#key key}
		<div class="page" in:scale={inTransition} out:scale={outTransition}>
			<slot />
		</div>
	{/key}
</div>

<style>
	.grid {
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr;
	}
	.page {
		grid-row: 1;
		grid-column: 1;
	}
</style>
