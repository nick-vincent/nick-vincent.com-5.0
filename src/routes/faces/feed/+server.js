export const prerender = true;

import { getImageData } from '$lib/js/data';
import { getRssItem } from '$lib/js/rss';

import Portrait from '../../../img/rock-out.jpg?png&w=480&h=480&as=meta';

const images = getImageData(
	'faces',
	'png',
	(t) => `${t}.`,
	(c) => `“${c}”`
);

export function GET() {
	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/xml'
	};
	return new Response(
		`<?xml version="1.0" encoding="UTF-8" ?>
			<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">
				<channel>
					<atom:link href="https://nick-vincent.com/etcetera/faces/feed" rel="self" type="application/rss+xml" />
					<title>Nick Vincent → Faces</title>
					<link>https://nick-vincent.com/etcetera/faces/</link>
					<description>Portraits of various famous folks.</description>
					<image>
						<url>https://nick-vincent.com${Portrait.src}</url>
						<title>Nick Vincent → Faces</title>
						<link>https://nick-vincent.com/etcetera/faces/</link>
					</image>				
					${images.map((image) => getRssItem(image)).join('')}
				</channel>
			</rss>
		`,
		{ headers }
	);
}
