<script>
	export let url;
	export let text = 'Email';
</script>

<a href={url} rel="external noreferrer" target="_blank">
	<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
		<g>
			<path
				d="M82.5,16.9H17.5C9.2,16.9,2.5,23.7,2.5,32v36c0,8.3,6.7,15.1,15.1,15.1h64.9c8.3,0,15.1-6.7,15.1-15.1V32
     C97.5,23.6,90.8,16.9,82.5,16.9z M17.6,24.6h64.9c0.5,0,1,0.1,1.5,0.2L53,55.9c-0.8,0.8-1.9,1.2-2.9,1.2c-1.1,0-2.1-0.4-2.9-1.2
     L16,24.8C16.5,24.7,17,24.6,17.6,24.6z M10.2,31.9c0-0.6,0.1-1.2,0.2-1.7l18.4,18.4L10.3,67.2L10.2,31.9L10.2,31.9z M82.5,75.2
     H17.5c-1.3,0-2.5-0.3-3.5-0.9L34.3,54l7.3,7.3c2.2,2.2,5.2,3.5,8.4,3.5s6.2-1.2,8.4-3.5l7.3-7.3L86,74.3
     C85,74.9,83.8,75.2,82.5,75.2z M89.8,67.2L71.2,48.6l18.4-18.4c0.1,0.6,0.2,1.1,0.2,1.7L89.8,67.2L89.8,67.2z"
			/>
		</g>
	</svg>
	<span class="visually-hidden">{text}</span>
</a>

<style>
	a {
		display: block;
	}
	a::before {
		inset: -0.5em;
	}
	svg {
		display: block;
		width: 2rem;
	}
	path {
		fill: var(--color-link);
	}
</style>
