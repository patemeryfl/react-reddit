import { h } from 'preact';
import { convertTime } from '../../assets/utilities';
import { icons } from '../../assets/svgs';
import style from './style';


const Overview = ({ data }) => {
	let imageUrl = '';

	if (data.preview) {
		imageUrl = data.preview.images[0].resolutions[data.preview.images[0].resolutions.length - 1].url;
	}
	return (
		<div class={style.container}>
			<header>
				{data.author.name}&nbsp;
				<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24">
					<path d={icons.post.upVote} />
				</svg>
				{data.ups} {convertTime(data.created)}
			</header>
			<article>
				<img src={imageUrl} />
				{data.body}
			</article>
			<footer>
				{data.link_title} in {data.subreddit_name_prefixed}
			</footer>
		</div>
	);
};

export default Overview;