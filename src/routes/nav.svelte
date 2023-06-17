<script>
	import { page } from '$app/stores';

	const navItems = [
		{ text: 'Nick Vincent', href: '/' },
		{ text: 'Work', href: '/work/' },
		{ text: 'Tunes', href: '/tunes/' },
		{ text: 'Faces', href: '/faces/' },
		{ text: 'Photos', href: '/photos/' },
		{ text: 'Contact', href: '/contact/' }
	];
</script>

<nav>
	<ul>
		{#each navItems as { href, text }}
			<li>
				<a aria-current={$page.url.pathname === href ? 'page' : null} {href}>{text}</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	ul {
		display: flex;
		justify-content: center;
		gap: 1.5rem;
		padding: 0;
		margin: 0;
		font-size: 0.75rem;
		font-weight: 500;
		list-style: none;
	}

	li {
		padding: 0;
		margin: 0;
	}

	a {
		color: var(--color-text);
		text-decoration: none;
	}
</style>
