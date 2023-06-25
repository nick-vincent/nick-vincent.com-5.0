<script>
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	import MenuToggle from '$lib/menu-toggle.svelte';
	import ThemeToggle from '$lib/theme-toggle.svelte';

	export let open = false;

	const durationIn = 1000;
	const durationOut = 250;
	const delay = 100;

	const navItems = [
		{ text: 'Work', href: '/work/' },
		{ text: 'Tunes', href: '/tunes/' },
		{ text: 'Faces', href: '/faces/' },
		{ text: 'Photos', href: '/photos/' },
		{ text: 'Contact', href: '/contact/' }
	];

	let width;
	let scrollPos;

	$: scrolled = scrollPos > 0;
	$: overlay = scrolled || open;
	$: border = !scrolled || open;

	$: if (width >= 640) open = false;

	$: if (browser) {
		document.documentElement.classList.toggle('nav-open', open);
	}
</script>

<svelte:window bind:scrollY={scrollPos} />

<header class:overlay class:open bind:clientWidth={width}>
	<nav class:border>
		<div id="menu">
			<MenuToggle bind:open />
		</div>
		<a
			id="home"
			on:click={() => (open = false)}
			aria-current={$page.url.pathname === '/' ? 'page' : null}
			href="/">Nick Vincent</a
		>
		<div id="theme">
			<ThemeToggle />
		</div>
		<ul id="navigation">
			{#each navItems as { href, text }, i}
				<li>
					<a
						on:click={() => (open = false)}
						aria-current={$page.url.pathname === href ? 'page' : null}
						{href}>{text}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	header {
		z-index: 2;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		min-height: 0;
		padding: 1rem 1rem 0;
		backdrop-filter: blur(1rem);
		-webkit-backdrop-filter: blur(1rem);
		transition: min-height calc(var(--duration-menu) * 2) var(--easing-accelerate);
	}

	header.open {
		min-height: 100dvh;
		transition: min-height calc(var(--duration-menu) * 2) var(--easing-decelerate);
	}

	header::before,
	header::after {
		content: '';
		display: block;
		position: absolute;
		inset: 0;
		z-index: -2;
		opacity: 0;
		box-shadow: var(--image-shadow);
		border-bottom: 0.05rem solid var(--color-line);
		transition: opacity 500ms var(--easing-standard);
	}

	/* light mode */
	header::before {
		background-image: var(--light-body-gradient);
	}
	header.overlay::before {
		opacity: var(--light-body-gradient-opacity);
	}

	/* dark mode */
	header::after {
		background-image: var(--dark-body-gradient);
	}
	header.overlay::after {
		opacity: var(--dark-body-gradient-opacity);
	}

	nav {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		max-width: 38rem;
		padding: 0 0 1rem;
		margin: 0 auto;
		border-bottom: 0.05rem solid transparent;
		transition: var(--transition-dom-x-ray), border-bottom var(--duration-menu) ease-in-out;
	}
	nav.border {
		border-bottom: 0.05rem solid var(--color-line);
	}

	ul {
		display: flex;
		position: absolute;
		flex-direction: column;
		gap: 0.25rem;
		inset: 0;
		margin: 0;
		padding: 0;
		align-items: center;
		justify-content: center;
		font-size: 1.25rem;
		text-align: center;
	}

	li {
		padding: 0;
		margin: 0;
		opacity: 0;
		visibility: hidden;
		transition: visibility var(--duration-menu) ease-in-out,
			opacity var(--duration-menu) ease-in-out;
	}

	header.open li {
		opacity: 1;
		visibility: visible;
		transition: visibility var(--duration-menu) ease-in-out var(--duration-menu),
			opacity var(--duration-menu) ease-in-out var(--duration-menu);
	}

	#home {
		z-index: 2;
		text-align: center;
		font-size: 1rem;
		line-height: 1;
	}

	a {
		color: var(--color-text);
		text-decoration: none;
		text-shadow: var(--header-text-shadow);
		transition: var(--transition-dom-x-ray), text-shadow 500ms var(--easing-sharp);
	}
	header.overlay a {
		color: var(--color-h1);
	}

	@media (min-width: 640px) {
		#menu {
			display: none;
		}

		#theme {
			order: 3;
		}

		#home {
			margin-right: auto;
		}

		nav {
			justify-content: flex-end;
		}

		ul {
			position: static;
			opacity: 1;
			visibility: visible;
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			gap: 1rem;
			padding: 0;
			margin: 0;
			font-size: 0.75rem;
			line-height: 1;
			font-weight: 500;
			list-style: none;
		}

		li {
			opacity: 1;
			visibility: visible;
			filter: blur(0);
			transform: scale(1);
		}
	}
</style>
