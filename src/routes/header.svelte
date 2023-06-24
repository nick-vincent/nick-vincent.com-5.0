<script>
	import { page } from '$app/stores';
	import ThemeToggle from '$lib/theme-toggle.svelte';

	const navItems = [
		{ text: 'Nick Vincent', href: '/' },
		{ text: 'Work', href: '/work/' },
		{ text: 'Tunes', href: '/tunes/' },
		{ text: 'Faces', href: '/faces/' },
		{ text: 'Photos', href: '/photos/' },
		{ text: 'Contact', href: '/contact/' }
	];

	let scrollPos;

	$: scrolled = scrollPos > 0;
</script>

<svelte:window bind:scrollY={scrollPos} />

<header class:scrolled>
	<nav>
		<ul>
			{#each navItems as { href, text }}
				<li>
					<a aria-current={$page.url.pathname === href ? 'page' : null} {href}>{text}</a>
				</li>
			{/each}
			<li>
				<ThemeToggle />
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		padding: 0;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		padding: 1rem 1rem 0;
		backdrop-filter: blur(1rem);
		z-index: 2;
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
		transition: var(--transition-dom-x-ray), opacity 500ms var(--easing-sharp);
	}

	/* light mode */
	header::before {
		background-image: var(--light-body-gradient);
		/* opacity: var(--light-body-gradient-opacity); */
	}

	/* dark mode */
	header::after {
		background-image: var(--dark-body-gradient);
		/* opacity: var(--dark-body-gradient-opacity); */
	}

	.scrolled::before {
		opacity: 1;
	}

	ul {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 1rem;
		margin: 0 auto;
		padding: 0 0 1rem;
		font-size: 0.75rem;
		font-weight: 500;
		list-style: none;
		max-width: 38rem;
		border-bottom: 0.05rem solid var(--color-line);
	}

	.scrolled ul {
		border-bottom: 0.05rem solid transparent;
	}

	li {
		padding: 0;
		margin: 0;
	}

	li:first-of-type {
		margin-right: auto;
		font-size: 1rem;
	}

	a {
		color: var(--color-text);
		text-decoration: none;
		text-shadow: rgba(255, 255, 255, 0.25) 1px 1px 0;
	}
</style>
