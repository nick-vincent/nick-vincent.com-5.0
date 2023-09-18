<script>
	import Tooltip from '$lib/ui/Tooltip.svelte';

	export let url;
	export let text = 'LinkedIn';
</script>

<Tooltip {text} {url} rel="external noreferrer" target="_blank">
	<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
		<path
			class="st0"
			d="M50.9,0H13.1C5.9,0,0,5.9,0,13.1v37.7C0,58.1,5.9,64,13.1,64h37.7C58.1,64,64,58.1,64,50.9V13.1
 C64,5.9,58.1,0,50.9,0z M19.2,55.1H9.6V24.2h9.6V55.1z M14.4,20c-3.1,0-5.6-2.5-5.6-5.6c0-3.1,2.5-5.6,5.6-5.6
 c3.1,0,5.6,2.5,5.6,5.6C20,17.5,17.5,20,14.4,20z M55.2,55.1h-9.6v-15c0-3.6-0.1-8.2-5-8.2c-5,0-5.8,3.9-5.8,7.9v15.3h-9.6V24.2h9.2
 v4.2h0.1c1.3-2.4,4.4-5,9.1-5c9.7,0,11.5,6.4,11.5,14.7V55.1z"
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
