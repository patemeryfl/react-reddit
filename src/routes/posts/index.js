import { h, Component } from 'preact';
import style from './style';

import Posts from '../../components/posts';

export default class PostsContainer extends Component {
	state = {}
	render() {
		return (
			<div class={style.home}>
				<h1>Home</h1>
				<Posts />
			</div>
		);
	}
}
