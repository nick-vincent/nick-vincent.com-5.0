<script>
	import { onMount, onDestroy } from 'svelte';
	import { autoUpdate, computePosition, flip, shift, offset, arrow } from '@floating-ui/dom';

	export let url;
	export let text;
	export let rel;
	export let target;
	// export let reload = false;
	// data-sveltekit-reload

	let anchor;
	let popover;
	let arrowEl;

	function updatePosition() {
		computePosition(anchor, popover, {
			middleware: [offset(24), flip(), shift({ padding: 24 }), arrow({ element: arrowEl })]
		}).then(({ x, y, placement, middlewareData }) => {
			Object.assign(popover.style, {
				left: `${x}px`,
				top: `${y}px`
			});
			updateArrow(placement, middlewareData.arrow);
		});
	}

	function updateArrow(placement, { x, y }) {
		const staticSide = {
			top: 'bottom',
			right: 'left',
			bottom: 'top',
			left: 'right'
		}[placement.split('-')[0]];

		const rotation = staticSide === 'bottom' ? '-225deg' : '-45deg';

		Object.assign(arrowEl.style, {
			left: x != null ? `${x}px` : '',
			top: y != null ? `${y}px` : '',
			right: '',
			bottom: '',
			transform: `rotate(${rotation})`,
			[staticSide]: '-6px'
		});
	}

	onMount(() => {
		return autoUpdate(anchor, popover, updatePosition);
	});
</script>

<a href={url} {rel} {target} bind:this={anchor}>
	<slot />
	<span bind:this={popover} class="popover">
		{text}
		<span bind:this={arrowEl} class="arrow"></span>
	</span>
</a>

<style>
	a {
		display: block;
	}

	.popover {
		z-index: 2;
		pointer-events: none;
		position: absolute;
		padding: 0.75rem;
		font-size: 0.5rem;
		font-weight: 600;
		line-height: 1;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		white-space: nowrap;
		color: var(--color-ui-invert);
		background-color: var(--color-tooltip-background);
		border-radius: 0.25rem;
		box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
		opacity: 0;
		transform: translateY(-0.5rem);
		transition:
			transform 100ms var(--easing-sharp),
			opacity 100ms var(--easing-sharp);
	}

	.arrow {
		position: absolute;
		border: 0.25rem solid var(--color-tooltip-background);
		border-bottom-color: transparent;
		border-left-color: transparent;
		transform: rotate(-45deg);
	}

	a:focus .popover {
		opacity: 1;
		transform: translateY(0);
		transition:
			transform 100ms var(--easing-sharp),
			opacity 100ms var(--easing-sharp);
	}

	@media (hover: hover) {
		a:hover .popover {
			opacity: 1;
			transform: translateY(0);
			transition:
				transform 100ms var(--easing-sharp),
				opacity 100ms var(--easing-sharp);
		}
	}
</style>
