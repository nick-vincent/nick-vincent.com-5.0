import { getImageData } from '$lib/data';

export function load() {
	const images = getImageData('photos');
	return { images };
}
