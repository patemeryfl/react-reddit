/* eslint react/jsx-no-bind: 0 */
import { h } from 'preact';
import { icons } from '../../assets/svgs';
import { numberWithCommas } from '../../assets/utilities';
import ReplyWrapper from '../reply';
import ReactMarkdown from 'react-markdown';
import style from './style';

let showUpvoteButtons = false;
let repliesVisible = true;

const Comment = ({ comment }) => (
	<div class={style.container}>
		<div class={style.comment} onClick={() => repliesVisible = !repliesVisible}>
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
			<div class={style.commentBody}>
				<div class={style.author}>
					{comment.author.name}&nbsp;
					<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
						<path d={icons.post.upVote} />
					</svg>
					<span>{numberWithCommas(comment.ups)}</span>&nbsp;&nbsp;
					{comment.gilded > 0 ?
						<span>
							<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
								<path d={icons.post.gold} fill="yellow" />
							</svg>&nbsp;{comment.gilded}
						</span> : ''
					}
				</div>
				<ReactMarkdown source={comment.body} />
			</div>
		</div>
		<div class={style.reply}>
			{comment.replies && repliesVisible ?
				comment.replies.map(reply => <ReplyWrapper comment={reply} />)
				: ''}
		</div>
	</div>
);

export default Comment;