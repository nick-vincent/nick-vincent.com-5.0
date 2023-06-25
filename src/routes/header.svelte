<script>
	import { page } from '$app/stores';
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

	const itemDurationIn = durationIn / navItems.length;
	const itemDurationOut = durationOut / navItems.length;

	const itemDelayIn = (i) => delay + itemDurationIn * i;
	const itemDelayOut = (i) => (navItems.length - i) * itemDurationOut;
	const itemStyles = (i) => {
		return `
      --duration-in: ${itemDurationIn}ms;
      --duration-out: ${itemDurationOut}ms;
      --delay-in: ${itemDelayIn(i)}ms;
      --delay-out: ${itemDelayOut(i)}ms;
    `;
	};

	let scrollPos;

	$: scrolled = scrollPos > 0;

	// $: document && document.body.classList.toggle('navOpen', open);
</script>

<svelte:window bind:scrollY={scrollPos} />

<header class:scrolled class:open>
	<nav>
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
				<li style={itemStyles(i)}>
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
		transition: min-height var(--duration-menu) ease-in-out;
	}

	header.open {
		min-height: 100vh;
		transition: min-height var(--duration-menu) ease-in-out;
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
	header.open::before,
	header.scrolled::before {
		opacity: var(--light-body-gradient-opacity);
	}

	/* dark mode */
	header::after {
		background-image: var(--dark-body-gradient);
	}
	header.open::after,
	header.scrolled::after {
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
		border-bottom: 0.05rem solid var(--color-line);
	}

	header.scrolled:not(.open) nav {
		border-bottom: 0.05rem solid transparent;
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
		filter: blur(0.25rem);
		transform: scale(0.5);
		transition: visibility var(--duration-out) ease-in-out var(--delay-out),
			opacity var(--duration-out) ease-in-out var(--delay-out),
			filter var(--duration-out) ease-in-out var(--delay-out),
			transform var(--duration-out) ease-in-out var(--delay-out);
	}

	header.open li {
		opacity: 1;
		visibility: visible;
		filter: blur(0);
		transform: scale(1);
		transition: visibility var(--duration-in) ease-in-out var(--delay-in),
			opacity var(--duration-in) ease-in-out var(--delay-in),
			filter var(--duration-in) ease-in-out var(--delay-in),
			transform var(--duration-in) ease-in-out var(--delay-in);
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
	.scrolled a {
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

		header.open {
			min-height: 0;
		}

		header::before,
		header::after {
			border-bottom: 0.05rem solid var(--color-line);
		}

		header.open:not(.scrolled)::before,
		header.open:not(.scrolled)::after {
			opacity: 0;
		}

		nav {
			justify-content: flex-end;
		}

		header.scrolled nav {
			border-bottom: 0.05rem solid transparent;
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
