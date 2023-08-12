import { getImageData } from '$lib/js/data';

export function load({ params }) {
	const images = getImageData('photos');
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
