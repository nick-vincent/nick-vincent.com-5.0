export const prerender = true;
export const trailingSlash = 'always';

export const load = async ({ url: { pathname } }) => {
	const pathParts = pathname.split('/');
	const dir = `/${pathParts[1]}`;
	return { dir };
};
