<script>
	import Tooltip from '$lib/ui/Tooltip.svelte';

	export let url;
	export let text = 'Subscribe to RSS feed';
</script>

<Tooltip {text} {url} target="_blank">
	<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<path
			d="M208,0H48C21.5,0,0,21.5,0,48v160c0,26.5,21.5,48,48,48h160c26.5,0,48-21.5,48-48V48C256,21.5,234.5,0,208,0z
		 M64,224c-17.7,0-32-14.3-32-32s14.3-32,32-32s32,14.3,32,32S81.7,224,64,224z M128,224c0-53-43-96-96-96V96
		c70.7,0,128,57.3,128,128H128z M192,224c0-88.4-71.6-160-160-160V32c106,0,192,86,192,192H192z"
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
