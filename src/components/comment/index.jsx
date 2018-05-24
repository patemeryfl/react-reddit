import { h } from 'preact';
import { icons } from '../../assets/svgs';
import style from './style';

const Comment = ({ comment }) => (
	<div class={style.container}>
		<div class={style.buttons}>
			<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
				<path d={icons.post.upVote} />
			</svg>
			<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
				<path d={icons.post.downVote} />
			</svg>
		</div>
		<div class={style.comment}>
			<div class={style.author}>{comment.author.name}</div>
			<div class={style.body}>{comment.body}</div>
		</div>
	</div>
);

export default Comment;