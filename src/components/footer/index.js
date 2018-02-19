import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Footer = () =>  (
	<header class={style.header}>
		<nav>
			<Link activeClassName={style.active} href="/">Posts</Link>
			<Link activeClassName={style.active} href="/inbox">Inbox</Link>
			<Link activeClassName={style.active} href="/profile/Pat">Profile</Link>
			<Link activeClassName={style.active} href="/search">Search</Link>
			<Link activeClassName={style.active} href="/settings">Settings</Link>
		</nav>
	</header>
);

export default Footer;
