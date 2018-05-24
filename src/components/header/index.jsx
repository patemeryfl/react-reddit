import { h } from 'preact';
import style from './style';

const Header = ({ left, onLeftClick, refresh, title, right }) => (
	<header class={style.header}>
		<div>
			<button onClick={onLeftClick}>
				<span style={{ visibility: left.showIcon ? '' : 'hidden' }}>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
						<path d={left.icon} />
					</svg>
				</span>
				{left.text}
			</button>
		</div>
		<div>
			<button onClick={refresh}>
				{title.text}
			</button>
		</div>
		<div>
			<button>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<path d={right.icons[0]} />
				</svg>
				&nbsp;&nbsp;
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<path d={right.icons[1]} />
				</svg>
			</button>
			<span>{right.text}</span>
		</div>
	</header>
);

export default Header;