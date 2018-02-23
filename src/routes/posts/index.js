import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import style from './style';
import Header from '../../components/header';
import Post from '../../components/post';
import { icons } from '../../assets/svgs';

import testData from '../../z_examples/example';

const { children } = testData.data;


class PostsContainer extends Component {
	state = {}
	render(props, state) {
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

export default connect(state => state)(PostsContainer);