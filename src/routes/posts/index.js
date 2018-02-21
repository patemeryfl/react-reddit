import { h, Component } from 'preact';
import style from './style';
import Header from '../../components/header';
import Post from '../../components/post';
import { icons } from '../../assets/svgs';

import testData from '../../z_examples/example';

const { children } = testData.data;

export default class PostsContainer extends Component {
	state = {}
	render() {
		return (
			<div>
				<Header
					left={{ text: 'Subreddits', showIcon: true, icon: icons.header.left }}
					title={{ text: 'Home', showIcon: true }}
					right={{ icons: [icons.header.fire, icons.header.settings] }}
				/>
				<div class={style.posts}>
					{children.map(post => <Post data={post.data} />)}
				</div>
			</div>
		);
	}
}
