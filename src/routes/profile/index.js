import { h, Component } from 'preact';
import style from './style';

export default class Profile extends Component {

	state = {}

	render({ user }, { time, count }) {
		return (
			<div class={style.profile}>
				<h1>Profile: {user}</h1>
				<p>This is the user profile for a user named { user }.</p>
			</div>
		);
	}
}
