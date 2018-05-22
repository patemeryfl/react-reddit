/* eslint react/jsx-no-bind: 0 */
import { h, Component } from 'preact';
import { route } from 'preact-router';
import { isEmpty } from '../../assets/utilities';
import PostsList from '../../components/posts-list';

class PostsContainer extends Component {
	state = {
		fetchedPosts: false,
		posts: {},
		currentPost: null
	}

	actions = {
		getHot: async () => {
			const posts = await window.snoo.getHot();
			await this.setState({ posts });
		},
		getComments: (post) => {
			route(`comments/${post.id}`, true);
		},
		showSubscriptions: () => {
			route(`subscriptions`, true);
		}
	}

	componentWillMount() {
		this.actions.getHot();
	}

	render(props, state) {
		if (isEmpty(state.posts) === false && this.state.fetchedPosts === false) {
			this.setState({ fetchedPosts: true });
		}
		if (state.fetchedPosts ===  true) {
			return <PostsList posts={state.posts} onPostClick={this.actions.getComments} onLeftClick={this.actions.showSubscriptions} />;
		}
		return (<div>Loading...</div>);
	}
}

export default PostsContainer;