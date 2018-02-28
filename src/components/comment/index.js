import { h } from 'preact';
import style from './style';

const Comment = ({ comment }) => (
	<div class={style.container}>
		<div class={style.author}>{comment.author.name}</div>
		<div class={style.body}>{comment.body}</div>
	</div>
);

export default Comment;