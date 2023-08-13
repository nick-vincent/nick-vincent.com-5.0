<script>
	import { fly } from 'svelte/transition';
	import { expoOut, expoIn } from 'svelte/easing';

	export let key = '';

	const duration = 250;

	$: inTransition = {
		duration,
		delay: duration,
		easing: expoOut,
		y: '-2rem'
	};

	$: outTransition = {
		duration,
		easing: expoIn,
		y: '2rem'
	};
</script>

<div class="grid">
	{#key key}
		<div class="page" in:fly={inTransition} out:fly={outTransition}>
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
