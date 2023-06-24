import { getImageData } from '$lib/data';

export function load({ params }) {
	const images = getImageData(
		'faces',
		'png',
		(t) => `${t}.`,
		(c) => `“${c}”`
	);

	const image = images.find((i) => i.slug === params.slug);
	const index = images.indexOf(image);
	const prevImage = images[index - 1] || images[images.length - 1];
	const nextImage = images[index + 1] || images[0];

	return {
		image,
		prevImage,
		nextImage
	};
}
