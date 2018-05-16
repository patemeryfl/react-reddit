import { h } from 'preact';
import { convertTime } from '../../assets/utilities';
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
					<header>{data.author.name} replied to your comment {} at {convertTime(data.created)}</header>
					<article>{data.body}</article>
					<footer>in {data.subreddit_name_prefixed}</footer>
				</div>
			);
	}
};

export default Message;