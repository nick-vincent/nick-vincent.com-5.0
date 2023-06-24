<script>
	import { fly } from 'svelte/transition';
	import { expoOut, expoIn } from 'svelte/easing';

	export let pathname = '';
</script>

{#key pathname}
	<div
		class="transition"
		in:fly={{ duration: 250, delay: 250, easing: expoOut, y: '-2rem' }}
		out:fly={{ duration: 250, easing: expoIn, y: '2rem' }}
	>
		<slot />
	</div>
{/key}
