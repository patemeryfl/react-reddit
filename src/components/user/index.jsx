/* eslint react/jsx-no-bind: 0 */
import { h } from 'preact';
import style from './style.scss';
import { icons } from '../../assets/svgs';

const items = ['Posts', 'Comments', 'Saved', 'Friends', 'Upvoted', 'Downvoted', 'Hidden', 'Trophies'];

const User = ({ user, getInfo }) => (
	<div class={style.user}>
		<div class={style.info}>
			<span>Comment Karma{user.comment_karma}</span>
			<span>Post Karma{user.link_karma}</span>
			<span>Account Age{user.created}</span>
		</div>
		<div class={style.items}>
			{items.map(item => {
				let i = `icons.profile.${item}`;
				<span onClick={() => this.getInfo(item)}>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
						<path d={i} />
					</svg>
					<h4>{item}</h4>
				</span>
			})}
		</div>
		<div class={style.overview}>
			<h3>Overview</h3>
		</div>
	</div>
);

export default User;