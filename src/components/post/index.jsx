/* eslint react/jsx-no-bind: 0 */
import { h } from 'preact';
import style from './style';
import { icons } from '../../assets/svgs';
import { numberWithCommas, convertTime } from '../../assets/utilities';

//const currentTime = Date.now();
//let imageUrl = data.preview.images[0].resolutions[2].url;

const Post = ({ data, onPostClick }) => {
	let imageUrl = '';
	
	if (data.preview) {
		imageUrl = data.preview.images[0].resolutions[data.preview.images[0].resolutions.length - 2].url;
	}

	return (
		<div key={data.id} class={style.post} onClick={() => onPostClick('COMMENTS', data)}>
			<header class={style.header}>
				<h1><a href={data.url}>{data.title}</a></h1>
			</header>
			<article>
				<img src={imageUrl} />
			</article>
			<footer>
				<span>r/{data.subreddit.display_name}</span><br />
				<span>
					<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24">
						<path d={icons.post.upVote} />
					</svg>&nbsp;&nbsp;
					{numberWithCommas(data.ups)}
				</span>
				<span>
					<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24">
						<path d={icons.post.comment} />
					</svg>&nbsp;&nbsp;
					{numberWithCommas(data.num_comments)}
				</span>
				<span>
					<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24">
						<path d={icons.post.clock} />
					</svg>&nbsp;&nbsp;
					{convertTime(data.created_utc)}
				</span>
			</footer>
		</div>
	);
};
export default Post;