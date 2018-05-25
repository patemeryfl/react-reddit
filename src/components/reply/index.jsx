import { h } from 'preact';
import Reply from './reply';
import style from './style';

const ReplyWrapper = ({ comment }) => (
	<div class={style.container}>
		<Reply comment={comment} />
		{comment.replies.length > 0 ?
			comment.replies.map((reply, i) => <Reply margin={i} comment={reply} />) : '' }
	</div>
);

export default ReplyWrapper;