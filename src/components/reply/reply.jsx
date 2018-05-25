import { h } from 'preact';
import { icons } from '../../assets/svgs';
import { numberWithCommas } from '../../assets/utilities';
import ReactMarkdown from 'react-markdown';
import style from './style';

let showUpvoteButtons = false;

const Reply = ({ margin, comment }) => (
	<div class={style.container}>
		{showUpvoteButtons ?
			<div class={style.buttons}>
				<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
					<path d={icons.post.upVote} />
				</svg>
				<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
					<path d={icons.post.downVote} />
				</svg>
			</div>
			: ''}
		<div class={style.reply} style={{ marginLeft: ( margin + 1 ) * 10 }}>
			<div class={style.author}>
				{comment.author.name}&nbsp;
				<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
					<path d={icons.post.upVote} />
				</svg>
				<span>{numberWithCommas(comment.ups)}</span>&nbsp;
				{comment.gilded === 1 ?
					<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
						<path d={icons.post.gold} fill="yellow" />
					</svg> : ''
				}
			</div>
			<ReactMarkdown source={comment.body} />
		</div>
	</div>
);

export default Reply;