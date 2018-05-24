/* eslint react/jsx-no-bind: 0 */
import { h, Component } from 'preact';
import { route } from 'preact-router';
import { isEmpty } from '../../assets/utilities';
import Loader from '../../components/loader';
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
			window.localStorage.setItem('scrollY', window.scrollY);
			route(`comments/${post.id}`, true);
		},
		getUrl: async (url) => {
			const sub = await window.snoo.getSubreddit(url).getHot();
			await this.setState({ posts: sub });
		},
		showSubscriptions: () => {
			route(`subscriptions`, true);
		}
	}

	componentWillMount() {
		let position = window.localStorage.getItem('scrollY');
		window.scrollTo(0, position);
		if (this.props.subreddit) {
			this.actions.getUrl(this.props.subreddit);
		}
		else {
			this.actions.getHot();
		}
	}
	componentWillUnmount() {
		this.setState({ posts: {}, fetchedPosts: false });
	}

	render(props, state) {
		let title = 'Home';
		if (this.props.subreddit) {
			title = this.props.subreddit;
		}
		if (isEmpty(state.posts) === false && this.state.fetchedPosts === false) {
			this.setState({ fetchedPosts: true });
		}
		if (state.fetchedPosts ===  true) {
			return <PostsList title={title} posts={state.posts} onPostClick={this.actions.getComments} onLeftClick={this.actions.showSubscriptions} />;
		}
		return (<Loader />);
	}
}

export default PostsContainer;