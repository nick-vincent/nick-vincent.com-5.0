import { getImageData } from '$lib/data';

export function load() {
	const images = getImageData(
		'faces',
		'png',
		(t) => `${t}.`,
		(c) => `“${c}”`
	);

	return { images };
}
