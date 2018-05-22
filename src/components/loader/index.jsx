import { h } from 'preact';
import style from './style';

const Loader = () => (
	<div class={style.container}>
		<div class={style.loader}>
			<svg class={style.circular} viewBox="25 25 50 50">
				<circle class={style.path} cx="50" cy="50" r="20" fill="none" stroke-width="5"
					stroke-miterlimit="10"
				/>
			</svg>
		</div>
	</div>
);

export default Loader;