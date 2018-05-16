/* eslint react/jsx-no-bind: 0 */
import { h } from 'preact';
import style from './style.scss';
import { icons } from '../../assets/svgs';
import Overview from '../../components/overview';

const items = ['Posts', 'Comments', 'Saved', 'Friends', 'Upvoted', 'Downvoted', 'Hidden', 'Trophies'];
const Icons = { icons };

const User = ({ user, overview, getInfo }) => (
	<div class={style.user}>
		<div class={style.info}>
			<span>Comment Karma<br />{user.comment_karma}</span>
			<span>Post Karma<br />{user.link_karma}</span>
			<span>Account Age<br />{user.created}</span>
		</div><br /><br />
		<div class={style.items}>
			{items.map(item => {
				let i = Icons.icons.profile[item];
				return (
					<button onClick={() => this.getInfo(item)}>
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
							<path d={i} />
						</svg>
						{item}
					</button>
				);
			})}
		</div>
		<div class={style.overview}>
			<h3>Overview</h3>
			{overview.map(item => <Overview data={item} />)}
		</div>
	</div>
);

export default User;