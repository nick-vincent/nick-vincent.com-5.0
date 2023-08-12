<script>
	import { scale } from 'svelte/transition';

	export let key;
</script>

{#key key}
	<div
		class="transition"
		in:scale|global={{ start: 0.9, duration: 250, delay: 250 }}
		out:scale|global={{ start: 0.9, duration: 250 }}
	>
		<slot />
	</div>
{/key}
