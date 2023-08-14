<script>
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	import MenuToggle from '$lib/ui/MenuToggle.svelte';
	import ThemeToggle from '$lib/ui/ThemeToggle.svelte';

	export let open = false;

	const navItems = [
		{ text: 'Work', href: '/work/' },
		{ text: 'Tunes', href: '/tunes/' },
		{ text: 'Faces', href: '/faces/' },
		{ text: 'Photos', href: '/photos/' },
		{ text: 'Contact', href: '/contact/' }
	];

	let width;

	$: if (width >= 640) open = false;

	$: if (browser) {
		document.documentElement.classList.toggle('nav-open', open);
	}
</script>

<header class:open bind:clientWidth={width}>
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
		position: absolute;
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
		transition: opacity 500ms var(--easing-standard);
	}

	/* light mode */
	header::before {
		background-color: var(--color-nav-background);
		background-image: var(--light-body-gradient);
	}
	header.open::before {
		opacity: var(--light-body-gradient-opacity);
	}

	/* dark mode */
	header::after {
		background-color: var(--color-nav-background);
		background-image: var(--dark-body-gradient);
	}
	header.open::after {
		opacity: var(--dark-body-gradient-opacity);
	}

	nav {
		display: flex;
		gap: 1rem;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: center;
		max-width: 50rem;
		padding: 0 0 1rem;
		margin: 0 auto;
		border-bottom: 2px solid var(--color-line);
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
		transition:
			visibility var(--duration-menu) ease-in-out,
			opacity var(--duration-menu) ease-in-out;
	}

	header.open li {
		opacity: 1;
		visibility: visible;
		transition:
			visibility var(--duration-menu) ease-in-out var(--duration-menu),
			opacity var(--duration-menu) ease-in-out var(--duration-menu);
	}

	#home {
		z-index: 2;
		text-align: center;
		font-size: 1.25rem;
		line-height: 1;
	}

	a {
		color: var(--color-text);
		text-decoration: none;
		text-shadow: var(--header-text-shadow);
		transition:
			var(--transition-theme),
			text-shadow 500ms var(--easing-sharp);
	}
	header.open a {
		color: var(--color-h1);
	}

	@media (min-width: 860px) {
		header {
			padding: 2rem 2rem 0;
		}

		#menu {
			display: none;
		}

		#theme {
			order: 3;
			margin-left: auto;
		}

		#home {
			font-size: 1.5rem;
		}

		nav {
			padding: 0 0 0.5rem;
			justify-content: flex-start;
			align-items: baseline;
		}

		ul {
			position: static;
			opacity: 1;
			visibility: visible;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			gap: 1rem;
			padding: 0;
			margin: 0;
			font-size: 1rem;
			line-height: 1;
			font-weight: 400;
			list-style: none;
		}

		li {
			opacity: 1;
			visibility: visible;
		}

		a {
			font-weight: 500;
		}
	}
</style>
