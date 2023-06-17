import dayjs from 'dayjs';
import slugify from 'slugify';
import { data as photosData } from '../img/photos/_manifest.js';
import { data as facesData } from '../img/faces/_manifest.js';

function loadFiles(folder) {
	let thumbFiles, imageFiles, feedFiles;

	switch (folder) {
		case 'photos':
			thumbFiles = import.meta.glob('../img/photos/*.jpg', {
				eager: true,
				query: { format: 'webp', w: 280, h: 280, as: 'meta' }
			});
			imageFiles = import.meta.glob('../img/photos/*.jpg', {
				eager: true,
				query: { format: 'webp', w: 1920, h: 1200, quality: 100, fit: 'inside', as: 'meta' }
			});
			// feedFiles = import.meta.glob('../img/photos/*.jpg', {
			// 	eager: true,
			// 	as: 'format=png&w=120;960&quality=60&as=meta'
			// });
			break;
		case 'faces':
			thumbFiles = import.meta.glob('../img/faces/*.png', {
				eager: true,
				query: { format: 'webp', w: 280, h: 280, as: 'meta' }
			});
			imageFiles = import.meta.glob('../img/faces/*.png', {
				eager: true,
				query: { format: 'webp', w: 1920, h: 1200, quality: 100, fit: 'inside', as: 'meta' }
			});
			// feedFiles = import.meta.glob('../img/faces/*.png', {
			// 	eager: true,
			// 	as: 'format=png&w=120;960&quality=60&as=meta'
			// });
			break;
	}

	return { thumbFiles, imageFiles, feedFiles };
}

export const getImageData = function (
	folder,
	extension = 'jpg',
	titleTemplate = (t) => t,
	captionTemplate = (c) => c
) {
	const images = [];
	const { thumbFiles, imageFiles, feedFiles } = loadFiles(folder);
	const data = folder === 'photos' ? photosData : facesData;

	for (let i = 0; i < data.length; i++) {
		const image = { ...data[i] };
		const slug = `${image.date}-${slugify(image.title, { lower: true, strict: true })}`;
		const url = `/${folder}/${slug}/`;
		const date = dayjs(image.date).format('MMM D, YYYY');
		const path = `../img/${folder}/${slug}.${extension}`;
		const title = titleTemplate(image.title);
		const caption = captionTemplate(image.caption);
		const thumbData = thumbFiles[path];
		const imageData = imageFiles[path];
		// const feedData = feedFiles[path];
		// images[i] = { ...image, title, caption, slug, url, date, thumbData, imageData, feedData };
		images[i] = { ...image, title, caption, slug, url, date, thumbData, imageData };
	}
	return images;
};
