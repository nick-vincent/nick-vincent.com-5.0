<script>
	import LinkedInLink from '$lib/ui/LinkedInLink.svelte';
	import InstagramLink from '$lib/ui/InstagramLink.svelte';
</script>

<svelte:head>
	<title>Nick Vincent → Contact</title>
	<meta name="description" content="Connect or drop me a line." />
</svelte:head>

<div class="intro">
	<h1>Contact</h1>
	<p>Connect or drop me a line.</p>
</div>

<ul class="inline">
	<li><a href="mailto:the.nick.vincent@gmail.com">Email</a></li>
	<li><LinkedInLink url="https://www.linkedin.com/in/nickvincent/" /></li>
	<li><InstagramLink url="https://www.instagram.com/the.nick.vincent/" /></li>
</ul>

<p></p>
