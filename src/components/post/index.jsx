import { h } from 'preact';
import style from './style';
import { icons } from '../../assets/svgs';

//const currentTime = Date.now();

const Post = ({ data }) => {
	//let imageUrl = data.preview.images[0].resolutions[2].url;
	return(
	<div key={data.id} class={style.post}>
		<header class={style.header}>
			<h1><a href={data.url}>{data.title}</a></h1>
		</header>
		<article>
			<img src={data.thumbnail} />
		</article>
		<footer>
			r/{data.subreddit.display_name}<br />
			<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24">
				<path d={icons.post.upVote} />
			</svg>
			{data.ups}&nbsp;
			<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24">
				<path d={icons.post.comment} />
			</svg>
			{data.num_comments}&nbsp;
			<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24">
				<path d={icons.post.clock} />
			</svg>
			{data.created_utc}
		</footer>
	</div>
	)
};

export default Post;