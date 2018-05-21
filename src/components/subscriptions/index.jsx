/* eslint react/jsx-no-bind: 0 */
import { h } from 'preact';
import { icons } from '../../assets/svgs';
import { capitalizeFirst } from '../../assets/utilities';
import style from './style';
import Header from '../header';

const Subscriptions = ({ subs, getHome, getPopular, getAll, getUser }) => (
	<div>
		<Header
			left={{ text: '', showIcon: true, icon: icons.header.add }}
			title={{ text: 'Subreddits', showIcon: false }}
			right={{ text: 'Edit', icons: ['',''] }}
			onLeftClick={this.addSubscription}
		/>
		<div class={style.container}>
			<button onClick={getHome}>
				<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
					<path d={icons.footer.posts} />
				</svg>
				<span class={style.title}>Home</span><br />
				<span class={style.subtitle}>Posts from subscriptions</span>
			</button>
			<button onClick={getPopular}>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<path d={icons.footer.posts} />
				</svg>
				<span class={style.title}>Popular</span><br />
				<span class={style.subtitle}>Most popular posts across Reddit</span>
			</button>
			<button onClick={getAll}>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<path d={icons.footer.posts} />
				</svg>
				<span class={style.title}>All Posts</span><br />
				<span class={style.subtitle}>Posts across all subreddits</span>
			</button>
			<div>
				{subs.map(sub => (
					<div class={style.subscription} onClick={() => getUser(sub)}>
						{capitalizeFirst(sub.display_name)}
					</div>
				))}
			</div>
		</div>
	</div>
);

export default Subscriptions;