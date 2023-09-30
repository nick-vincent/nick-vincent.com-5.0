function encode(string) {
	return String(string)
		.replace(/&/g, '&amp;')
		.replace(/>/g, '&gt;')
		.replace(/</g, '&lt;')
		.replace(/"/g, '&quot;');
}

export const getRssItem = function (image) {
	const { url, title, thumb, src, date, caption } = image;

	return `
    <item>
      <title>${encode(title)}</title>
      <link>https://nick-vincent.com${url}</link>
      <guid>https://nick-vincent.com${url}</guid>
      <pubDate>${new Date(date).toUTCString()}</pubDate>
      <description>${encode(caption)}</description>
      <media:title>${encode(title)}</media:title>
      <media:content
        url="https://nick-vincent.com${src}"
        type="image/webp"
        medium="image"
        fileSize="1000000"
      />
      <media:thumbnail url="https://nick-vincent.com${thumb}" />
    </item>
  `;
};
