/* eslint react/jsx-no-bind: 0 */
import { h, Component } from 'preact';
import { isEmpty } from '../../assets/utilities';
import { connect } from 'preact-redux';

import PostsList from '../../components/posts-list';
import Display from '../../components/display';
import Subscriptions from '../../components/subscriptions';

class PostsContainer extends Component {
	state = {
		view: 'POSTS',
		fetchedPosts: false,
		fetchedComments: false,
		fetchedSubscriptions: false,
		posts: {},
		currentPost: null,
		comments: [],
		subs: []
	}

	actions = {
		getMe: async () => {
			const user = await window.snoo.getMe();
			this.props.dispatch({ type: 'SET_ME', data: user });
		},
		getHot: async () => {
			const hot = await window.snoo.getHot();
			this.props.dispatch({ type: 'SET_HOT', data: hot });
		},
		getPopular: async () => {
			const popular = await window.snoo.getPopularSubreddits();
			this.props.dispatch({ type: 'SET_POPULAR', data: popular });
		},
		getSubscriptions: async () => {
			const subs = await window.snoo.getSubscriptions();
			this.props.dispatch({ type: 'SET_SUBSCRIPTIONS', data: subs });
		},
		addSubscription: () => {
		},
		getComments: async (post) => {
			const comments = await window.snoo.getSubmission(post.id).expandReplies({ limit: 2, depth: 1 });
			this.actions.changeView('COMMENTS');
			this.props.dispatch({ type: 'SET_COMMENTS', data: comments });
		},
		changeView: (view, subreddit) => {
			this.setState({ view });
			switch (view) {
				case 'POSTS':
					//Implement refresh rate
					break;
				case 'SUBSCRIPTIONS':
					this.actions.getSubscriptions();
					break;
				case 'COMMENTS':
					window.scrollTo(0, 0);
					break;
				default:
					this.setState({ view: 'POSTS' });
			}
		}
	}

	componentWillMount() {
		this.setState({ view: 'POSTS' });
		this.actions.getHot();
	}

	componentDidMount() {
		this.actions.getMe();
	}

	render(props, state) {
		switch (state.view) {
			case 'SUBSCRIPTIONS':
				if (isEmpty(this.props.posts.subscriptions) === false && this.state.fetchedSubscriptions === false) {
					this.setState({ fetchedSubscriptions: true });
				}
				else if (state.fetchedSubscriptions ===  true) {
					return <Subscriptions subs={this.props.posts.subscriptions} />;
				}
				else return (<div>Loading...</div>);
				break;
			case 'POSTS':
				if (isEmpty(this.props.posts.posts) === false && this.state.fetchedPosts === false) {
					this.setState({ fetchedPosts: true });
				}
				if (state.fetchedPosts ===  true) {
					return <PostsList posts={this.props.posts.posts} onPostClick={this.actions.getComments} onLeftClick={this.actions.changeView} />;
				}
				return (<div>Loading...</div>);
			case 'COMMENTS':
				if (isEmpty(this.props.posts.comments) === false && this.state.fetchedComments === false) {
					this.setState({ fetchedComments: true });
				}
				if (state.fetchedComments ===  true) {
					return <Display selectedPost={this.props.posts.comments} onNavigate={() => this.actions.changeView('POSTS')} comments={this.props.posts.comments.comments} />;
				}
				return (<div>Loading...</div>);
			default:
				return (<div>Loading...</div>);
		}
	}
}

export default connect(state => state)(PostsContainer);