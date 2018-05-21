/* eslint-disable */

import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import { icons } from '../../assets/svgs';

const Footer = () => (
	<header class={style.header}>
		<nav>
			<Link activeClassName={style.active} href="/posts">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<path d={icons.footer.posts} />
				</svg><br />
			Posts
			</Link>
			<Link activeClassName={style.active} href="/inbox">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<path d={icons.footer.inbox} />
				</svg><br />
				Inbox
			</Link>
			<Link activeClassName={style.active} href="/profile/Pat">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<path d={icons.footer.account} />
				</svg><br />
				Profile
			</Link>
			<Link activeClassName={style.active} href="/search">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<path d={icons.footer.search} />
				</svg><br />
				Search
			</Link>
			<Link activeClassName={style.active} href="/settings">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<path d={icons.footer.settings} />
				</svg><br />
				Settings
			</Link>
		</nav>
	</header>
);

export default Footer;