<article>
	<header>
		<h1>Nick Vincent</h1>
		<p>
			Fluent in both design & code<br />
			Prefers work to speak for itself
		</p>
		<p id="contact">
			<a href="/">nick-vincent.com</a><br />
			<a href="mailto:the.nick.vincent@gmail.com">the.nick.vincent@gmail.com</a>
		</p>
	</header>

	<main>
		<div id="col-1">
			<div id="expertise">
				<h2>Expertise</h2>
				<p>
					Markup maestro<br />
					Stylesheet sculptor<br />
					Javascript gymnast
				</p>
				<p>
					Interface iterationist<br />
					Component curator<br />
					Design system devotee
				</p>
				<p>
					End-user empath<br />
					Accessibility advocate<br />
					Interaction inclusivist
				</p>
				<p>
					Typographic tinkerer<br />
					Moonlight motionographer<br />
					Bearer of the brand torch
				</p>
			</div>

			<div id="education">
				<h2>Education</h2>
				<h3>
					<a href="https://www.unlv.edu" rel="external noreferrer" target="_blank"
						>University of Nevada, Las&nbsp;Vegas</a
					>
				</h3>
				<p>Bachelor of Arts in&nbsp;Computer&nbsp;Science</p>
				<p class="date">Dec 2005</p>
				<h3>
					<a href="https://www.csn.edu" rel="external noreferrer" target="_blank"
						>College of Southern&nbsp;Nevada</a
					>
				</h3>
				<p>Associate of Applied Science in&nbsp;Web&nbsp;Design</p>
				<p class="date">Dec 2003</p>
			</div>
		</div>

		<div id="experience">
			<h2>Experience</h2>

			<div id="col-2">
				<div id="col-2-1">
					<div id="block">
						<h3>
							<a href="https://block.xyz" rel="external noreferrer" target="_blank">Block, Inc.</a>
						</h3>
						<p>Senior Frontend Engineer</p>
						<p class="date">Dec 2021 – Present</p>
						<p>
							Currently using <a
								href="https://stenciljs.com"
								rel="external noreferrer"
								target="_blank">Stencil</a
							>
							to construct cross‑framework Web&nbsp;Components for Market, Square’s shared design system
							used across an ever‑increasing multitude of web applications
						</p>
					</div>

					<div id="square">
						<h3>
							<a href="https://squareup.com" rel="external noreferrer" target="_blank"
								>Square, Inc.</a
							>
						</h3>
						<p>Senior Frontend Engineer</p>
						<p class="date">Apr 2014 – Dec 2021</p>
						<ul class="bullet spread">
							<li>
								Built out header navigation for global marketing website and several subsites as an
								internal npm library using <a
									href="https://svelte.dev"
									rel="external noreferrer"
									target="_blank">Svelte</a
								>
							</li>
							<li>
								Rebuilt the global marketing website to integrate with <a
									href="https://contentful.com"
									rel="external noreferrer"
									target="_blank">Contentful</a
								> to move content management out of code and into the hands of product teams and content
								authors
							</li>
							<li>
								Authored the <a
									href="https://rubyonrails.org"
									rel="external noreferrer"
									target="_blank">Rails</a
								>
								&
								<a href="https://jquery.com/" rel="external noreferrer" target="_blank">jQuery</a> library
								housing the design system powering the global marketing website, support center, hardware
								store, and other public‑facing websites
							</li>
						</ul>
					</div>
				</div>

				<div id="col-2-2">
					<div id="zappos">
						<h3>
							<a href="https://www.zappos.com" rel="external noreferrer" target="_blank"
								>Zappos.com</a
							>
						</h3>
						<p>Senior Developer</p>
						<p class="date">May 2011 – Apr 2014</p>
						<p>
							Lead UX design and UI development on assorted e‑commerce experiments for SF‑based
							incubation lab
						</p>
					</div>
					<div id="self-employed">
						<h3>
							<a href="https://nickvincent.carbonmade.com" rel="external noreferrer" target="_blank"
								>Self-Employed</a
							>
						</h3>
						<p>Freelance Client Work</p>
						<p class="date">Apr 2010 – May 2011</p>
						<p>Left advertising, traveled the US, and took on various design gigs</p>
					</div>
					<div id="rrpartners">
						<h3>
							<a href="https://rrpartners.com" rel="external noreferrer" target="_blank"
								>R&R Partners</a
							>
						</h3>
						<p>Web Developer</p>
						<p class="date">Apr 2009 – Apr 2010</p>
						<p>
							Flash websites and client pitches for the Vegas‑based traditional ad agency
							responsible for “What Happens Here, Stays Here”
						</p>
					</div>
					<div id="eatdrink">
						<h3>
							<a href="http://eatdrink.com" rel="external noreferrer" target="_blank">Eatdrink</a>
						</h3>
						<p>Intern to Interactive Lead</p>
						<p class="date">Mar 2003 - Apr 2009</p>
						<p>
							“The Web Guy” at a Vegas‑based boutique creative agency known for animation, motion
							graphics, illustration, and band websites
						</p>
					</div>
				</div>
			</div>
		</div>
	</main>
</article>

<style>
	article {
		display: grid;
		gap: 2em;
		padding: 4em 3em;
		margin: 2em 0;
		background-color: white;
		font-size: calc(16rem / 24);
		line-height: 1.5;
		letter-spacing: normal;
		text-align: left;
		box-shadow: var(--image-shadow);
	}

	article *,
	article *::before,
	article *::after {
		color: black;
	}

	header {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		align-items: end;
		gap: 2em;
	}

	main {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2em;
	}

	#col-1 {
		display: flex;
		flex-direction: column;
		gap: 3em;
	}
	#col-2 {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2em;
	}
	#col-2-1,
	#col-2-2 {
		display: flex;
		flex-direction: column;
		gap: 2em;
	}

	header p {
		margin: 0;
		padding: 0;
	}

	#contact {
		text-align: right;
	}

	h1 {
		margin: 0;
		padding: 0;
		font-size: 2em;
		line-height: 1;
		letter-spacing: -0.025em;
	}

	h2 {
		text-transform: uppercase;
		letter-spacing: 0.25em;
		font-size: calc(14em / 16);
		font-weight: 600;
		line-height: 1;
		border-top: 1px solid black;
		border-bottom: 1px solid black;
		padding: 0.5rem;
		margin: 0 0 1rem;
	}

	a {
		font-weight: 600;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline 1px;
		text-underline-offset: 2px;
	}

	#education h3 {
		font-size: calc(18em / 16);
		margin: 0;
	}

	#experience {
		grid-column-end: span 2;
	}

	#experience h3 {
		font-size: 1.25em;
		margin: 0;
		line-height: 1.2;
	}

	.date {
		margin-top: -1em;
		font-style: italic;
	}

	ul.bullet li::before {
		content: '-';
	}
	ul.bullet li {
		padding-bottom: 1em;
	}
</style>