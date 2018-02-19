import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = () => (
	<header class={style.header}>
		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<div />
			<Link activeClassName={style.active} href="/profile">Filter</Link>
			<Link activeClassName={style.active} href="/profile/john">...</Link>
		</nav>
	</header>
);

export default Header;