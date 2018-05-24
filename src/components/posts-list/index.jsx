/* eslint react/jsx-no-bind: 0 */
import style from './style.scss';
import { capitalizeFirst } from '../../assets/utilities';
import { icons } from '../../assets/svgs';
import Header from '../header';
import Post from '../post';

const PostsList = ({ title, posts, onPostClick, onLeftClick }) => (
	<div>
		<Header
			left={{ text: 'Subreddits', showIcon: true, icon: icons.header.left }}
			title={{ text: capitalizeFirst(title), showIcon: true }}
			right={{ icons: [icons.header.fire, icons.header.settings] }}
			onLeftClick={() => onLeftClick('SUBSCRIPTIONS')}
		/>
		<div class={style.posts}>
			{posts.map(post => <Post data={post} onPostClick={onPostClick} />)}
		</div>
	</div>
);

export default PostsList;