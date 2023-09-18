<script>
	import Tooltip from '$lib/ui/Tooltip.svelte';

	export let url;
	export let text = 'Purchase a print';
</script>

<Tooltip {text} {url} rel="external noreferrer" target="_blank">
	<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
		<path
			d="M25,0H3C1.3,0,0,1.3,0,3v22c0,1.6,1.3,3,3,3h22c1.6,0,3-1.4,3-3V3C28,1.3,26.6,0,25,0z M14,6c2.8,0,5.1,2.3,5.1,5.1
s-2.3,5.1-5.1,5.1s-5.1-2.3-5.1-5.1S11.2,6,14,6z M3.4,26c1.4-4.6,5.7-7.8,10.6-7.8s9.2,3.2,10.6,7.8H3.4z"
		/>
	</svg>
</Tooltip>

<style>
	svg {
		display: block;
		width: 2rem;
	}
	path {
		fill: var(--color-link);
	}
</style>
