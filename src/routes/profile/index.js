import { h, Component } from 'preact';
import style from './style';
import Header from '../../components/header';

export default class Profile extends Component {

	state = {}

	render({ user }, { time, count }) {
		return (
			<div>
				<Header
					left={{ text: 'Accounts', showIcon: false, icon: '' }}
					title={{ text: user, showIcon: false }}
					right={{ icons: [] }}
				/>
				<div class={style.profile}>
					<h1>Profile: {user}</h1>
					<p>This is the user profile for a user named { user }.</p>
				</div>
			</div>
		);
	}
}
