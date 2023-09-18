<script>
	import Tooltip from '$lib/ui/Tooltip.svelte';

	export let url;
	export let text = 'YouTube';
</script>

<Tooltip {text} {url} rel="external noreferrer" target="_blank">
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<polygon points="110,154.2 156,128 110,101.8 " />
		<path
			d="M208,0H48C21.5,0,0,21.5,0,48v160c0,26.5,21.5,48,48,48h160c26.5,0,48-21.5,48-48V48C256,21.5,234.5,0,208,0z M212.3,170.6
 c-2,7.6-8,13.6-15.6,15.7C183,190,128,190,128,190s-55,0-68.8-3.7c-7.6-2-13.5-8-15.6-15.7C40,156.8,40,128,40,128s0-28.8,3.7-42.6
 c2-7.6,8-13.6,15.6-15.7C73,66,128,66,128,66s55,0,68.8,3.7c7.6,2,13.5,8,15.6,15.7C216,99.2,216,128,216,128S216,156.8,212.3,170.6
 z"
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
	polygon {
		fill: var(--color-link);
	}
</style>
