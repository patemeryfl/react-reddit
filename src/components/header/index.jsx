import { h } from 'preact';
import style from './style';
import { icons } from '../../assets/svgs';

const Header = ({ left, onLeftClick, title, right }) => (
	<header class={style.header}>
		<nav>
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
				<button>
					{title.text}&nbsp;
					<span style={{ visibility: title.showIcon ? '' : 'hidden' }}>
						<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
							<path d={icons.header.down} />
						</svg>
					</span>
				</button>
			</div>
			<div>
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
				<span>{right.text}</span>
			</div>
		</nav>
	</header>
);

export default Header;