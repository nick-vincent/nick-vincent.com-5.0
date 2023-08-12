import { getImageData } from '$lib/js/data';

export function load() {
	const images = getImageData('photos');
	return { images };
}
