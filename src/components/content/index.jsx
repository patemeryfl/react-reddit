import { h } from 'preact';

const Content = ({ src }) => {
	let imageUrl;
	if (src.preview) {
		if (src.preview.reddit_video_preview) {
			return (
				<video preload="auto" autoplay="autoplay" loop="loop" style="width: 200px; height: 200px;">
					<source src="{src.preview.reddit_view_preview.dash_url}" type="video/webm" />
				</video>
			);
		}
		if (src.url === /'gifv'/gm) {
			return (
				<video width="320" height="240" controls>
					<source src={src.url} type="video/webm" />
				</video>
			);
		}
		else if (src.url === /'gif'/gm) {
			return <img src={src.url} width="100%" />;
		}
		if (src.preview.images[0].resolutions.length > 0) {
			imageUrl = src.preview.images[0].resolutions[src.preview.images[0].resolutions.length - 1].url;
			return <img src={imageUrl} width="100%" />;
		}
		return <div>{src.selftext}</div>;
	}
};

export default Content;