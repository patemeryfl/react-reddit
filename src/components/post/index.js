import { h } from 'preact';
import style from './style';
//const currentTime = Date.now();

const Post = ({ data }) => (
	<div key={data.id} class={style.post}>
		<header class={style.header}>
			<h1><a href={data.url}>{data.title}</a></h1>
		</header>
		<article>

			<img src={data.thumbnail} />
		</article>
		<footer>
			{data.subreddit}<br />
			{data.ups}&nbsp;
			{data.num_comments}&nbsp;
			{data.created_utc}
		</footer>
	</div>
);

export default Post;