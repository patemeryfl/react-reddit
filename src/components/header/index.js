import { h } from 'preact';
import style from './style';
import { icons } from '../../assets/svgs';

const Header = ({ left, title, right }) => (
	<header class={style.header}>
		<nav>
			<button class={style.backButton}>
				<span style={{ visibility: left.showIcon ? '' : 'hidden' }}>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
						<path d={left.icon} />
					</svg>
				</span>
				<p>{left.text}</p>
			</button>
			<div style={{ width: '90%' }} />
			<button class={style.banner}>
				<span style={{ visibility: title.showIcon ? '' : 'hidden' }}>
					<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
						<path d={icons.header.down} />
					</svg>
				</span>
				<p>{title.text}</p>
			</button>
			<div style={{ width: '100%' }} />
			<button>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<path d={right.icons[0]} />
				</svg>
			</button>
			<button>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<path d={right.icons[1]} />
				</svg>
			</button>
		</nav>
	</header>
);

export default Header;