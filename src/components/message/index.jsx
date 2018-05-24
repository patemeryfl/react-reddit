import { h } from 'preact';
import { timeSince } from '../../assets/utilities';
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
					<header>{data.author.name} replied to your post <b>{data.link_title}</b></header>
					<article>{data.body}</article>
					<footer>
						<div>in {data.subreddit_name_prefixed}</div>
						<div>{timeSince(data.created_utc)}</div>
					</footer>
				</div>
			);
	}
};

export default Message;