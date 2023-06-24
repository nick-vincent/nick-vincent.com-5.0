<script>
	import { onMount, onDestroy } from 'svelte';

	export let isPast;

	let waypoint;
	let observer;

	onMount(() => {
		observer = new IntersectionObserver(onIntersection);
		observer.observe(waypoint);
	});

	onDestroy(() => {
		if (observer) {
			observer.unobserve(waypoint);
		}
	});

	function onIntersection(entries) {
		isPast = !entries[0].isIntersecting;
	}
</script>

<div bind:this={waypoint} />
