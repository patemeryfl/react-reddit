/* eslint react/jsx-no-bind: 0 */
import { h } from 'preact';
import style from './style.scss';
import { icons } from '../../assets/svgs';
import { timeSince, numberWithCommas, capitalizeFirst } from '../../assets/utilities';
import Overview from '../../components/overview';

const items = ['Posts', 'Comments', 'Saved', 'Friends', 'Upvoted', 'Downvoted', 'Hidden', 'Trophies'];
const Icons = { icons };

const User = ({ state, actions, content }) => (
	<div class={style.user}>
		{ state.menuVisible ?
			<div>
				<div class={style.info}>
					<span>Comment Karma<br />{numberWithCommas(state.user.comment_karma)}</span>
					<span>Post Karma<br />{numberWithCommas(state.user.link_karma)}</span>
					<span>Account Created<br />{timeSince(state.user.created)}</span>
				</div>
				<div class={style.items}>
					{ items.map(item => {
						let i = Icons.icons.profile[item];
						return (
							<button onClick={() => actions.getInfo(item)}>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
									<path d={i} />
								</svg>
								{item}
							</button>
						);
					})}
				</div>
			</div>: ''}
		<div class={style.overview}>
			<h3>{content ? capitalizeFirst(content): 'Overview'}</h3>
			{state.overview.map(item => <Overview data={item} />)}
		</div>
	</div>
);

export default User;