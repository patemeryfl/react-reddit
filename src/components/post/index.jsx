/* eslint react/jsx-no-bind: 0 react/display-name: 0 */
import { h } from 'preact';
import { icons } from '../../assets/svgs';
import { numberWithCommas, timeSince } from '../../assets/utilities';
import Button from '../button';
import Content from '../content';
import style from './style';

const Post = ({ data, onPostClick }) => (
	<div key={data.id} class={style.post} onClick={() => onPostClick(data)}>
		<header class={style.header}>
			<h1><a href={data.url}>{data.title}</a></h1>
		</header>
		<article>
			<Content src={data} />
		</article>
		<footer>
			<span>r/{data.subreddit.display_name}</span><br />
			<span>
				<Button icon={icons.post.upVote} width="13" height="13" />
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
				{timeSince(new Date(Date.now() - data.created_utc))}
			</span>
		</footer>
	</div>
);
export default Post;