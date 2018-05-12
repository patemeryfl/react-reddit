import { h } from 'preact';
import style from './style';

const Message = ({ data }) => {
	switch (data.constructor.name) {
		case 'PrivateMessage':
			return (
				<div class={style.container}>
					<header>{data.subject}</header>
					<article>{data.body}</article>
				</div>
			);
		case 'Comment':
			return (
				<div class={style.container}>
					<header>{data.author} replied to your comment {}</header>
					<article>{data.body}</article>
					<footer>in {data.subreddit.subreddit_name_prefixed}</footer>
				</div>
			);
		default:
			
	}
};

export default Message;