import dayjs from 'dayjs';
import slugify from 'slugify';
import { data as photosData } from '../../img/photos/_manifest.js';
import { data as facesData } from '../../img/faces/_manifest.js';

function loadFiles(dir) {
	let thumbFiles, imageFiles, feedFiles;

	switch (dir) {
		case 'photos':
			thumbFiles = import.meta.glob('../../img/photos/*.jpg', {
				eager: true,
				query: { format: 'webp', w: 360, h: 360, as: 'meta' }
			});
			imageFiles = import.meta.glob('../../img/photos/*.jpg', {
				eager: true,
				query: { format: 'webp', w: 2400, h: 1800, quality: 100, fit: 'inside', as: 'meta' }
			});
			break;
		case 'faces':
			thumbFiles = import.meta.glob('../../img/faces/*.png', {
				eager: true,
				query: { format: 'webp', w: 360, h: 360, as: 'meta' }
			});
			imageFiles = import.meta.glob('../../img/faces/*.png', {
				eager: true,
				query: { format: 'webp', w: 2400, h: 1800, quality: 100, fit: 'inside', as: 'meta' }
			});
			break;
	}

	return { thumbFiles, imageFiles, feedFiles };
}

export const getImageData = function (
	dir,
	extension = 'jpg',
	titleTemplate = (t) => t,
	captionTemplate = (c) => c
) {
	const images = [];
	const { thumbFiles, imageFiles, feedFiles } = loadFiles(dir);
	const data = dir === 'photos' ? photosData : facesData;

	for (let i = 0; i < data.length; i++) {
		const image = { ...data[i] };

		const id = image.id;
		const slug = `${image.date}-${slugify(image.title, { lower: true, strict: true })}`;
		const url = `/${dir}/${slug}/`;
		const date = dayjs(image.date).format('MMM D, YYYY');
		const path = `../../img/${dir}/${slug}.${extension}`;
		const title = titleTemplate(image.title);
		const caption = captionTemplate(image.caption);
		const buy = image.buy;

		const imageData = imageFiles[path];
		const { src, aspect } = imageData;

		const thumbData = thumbFiles[path];
		const thumb = thumbData.src;

		images[i] = { id, title, caption, slug, url, date, thumb, src, aspect, buy };
	}
	return images;
};
