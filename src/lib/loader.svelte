<script>
	import { createObserver } from 'svelte-use-io';

	const { observer } = createObserver();

	let visible = false;

	function onVisible() {
		visible = true;
	}
</script>

<div class="loader" class:visible use:observer={{ once: true }} on:intersecting={onVisible}>
	<slot />
</div>

<style>
	.loader {
		opacity: 0;
		transition: var(--transition-dom-x-ray), opacity 500ms ease;
	}

	.visible,
	:global(html.no-js) .loader {
		opacity: 1;
	}
</style>
