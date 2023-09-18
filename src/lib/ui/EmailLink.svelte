<script>
	import Tooltip from '$lib/ui/Tooltip.svelte';

	export let url;
	export let text = 'Email';
</script>

<Tooltip {text} {url} rel="external noreferrer" target="_blank">
	<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<path
			d="M208,0H48C21.5,0,0,21.5,0,48v160c0,26.5,21.5,48,48,48h160c26.5,0,48-21.5,48-48V48C256,21.5,234.5,0,208,0z M51.3,65.8
 h153.3c6.5,0,12.1,4.7,13,11l-89.7,55.7L38.2,76.8C39.3,70.7,44.7,65.8,51.3,65.8z M218,177c0,7.4-6.1,13.3-13.3,13.3H51.3
 c-7.4,0-13.3-6.1-13.3-13.3v-76.3l86.7,53.9c0.9,0.7,2,0.9,3.1,0.9s2.2-0.4,3.4-0.9l86.7-53.9V177z"
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
