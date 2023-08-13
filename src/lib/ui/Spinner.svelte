<script>
	import { scale } from 'svelte/transition';
	import { backIn, backOut } from 'svelte/easing';
</script>

<span
	class="spinner"
	in:scale|global={{ duration: 500, delay: 500, start: 0, easing: backOut }}
	out:scale|global={{ duration: 500, start: 0, easing: backIn }}
/>

<style>
	.spinner {
		z-index: 2;
		position: absolute;
		display: block;
		inset: 0;
	}
	.spinner::before,
	.spinner::after {
		content: '';
		position: absolute;
		width: 25%;
		height: auto;
		aspect-ratio: 1;
		left: 50%;
		top: 50%;
		border-radius: 100%;
		transform: translate(-50%, -50%);
	}
	.spinner::before {
		border: 2px solid var(--color-line);
	}
	.spinner::after {
		border: 2px solid transparent;
		border-top: 2px solid var(--color-line);
		animation: spinner 1s infinite;
	}

	@keyframes spinner {
		0% {
			transform: translate(-50%, -50%) rotate(0deg);
		}
		100% {
			transform: translate(-50%, -50%) rotate(360deg);
		}
	}
</style>
