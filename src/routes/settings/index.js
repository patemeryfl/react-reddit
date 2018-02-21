import { h, Component } from 'preact';
import style from './style';
import Header from '../../components/header';

export default class Settings extends Component {

	state = {}

	render({ user }, { time, count }) {
		return (
			<div>
				<Header
					left={{ text: '', showIcon: false, icon: '' }}
					title={{ text: 'Settings', showIcon: false }}
					right={{ icons: [] }}
				/>
				<div class={style.settings}>
					<h1>Settings Works</h1>
				</div>
			</div>
		);
	}
}
