/* eslint react/jsx-no-bind: 0 */
import { h, Component } from 'preact';
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
		addSubscription: () => {
		},
		changeView: (view, post, subreddit) => {
			this.setState({ view });
			switch (view) {
				case 'POSTS':
					//Implement refresh rate
					break;
				case 'SUBSCRIPTIONS':
					break;
				case 'COMMENTS':
					window.scrollTo(0, 0);
					this.props.dispatch({ type: 'GET_COMMENTS', post });
					this.setState({ fetchedComments: false, currentPost: post });
					break;
				default:
					this.setState({ view: 'POSTS' });
			}
		}
	}

	componentWillMount() {
		this.setState({ view: 'POSTS' });
		this.props.dispatch({ type: 'GET_HOT' });
	}

	componentDidMount() {
		this.actions.getMe();
	}

	render(props, state) {
		switch (state.view) {
			case 'SUBSCRIPTIONS':
				if (this.props.profile instanceof Promise && this.state.fetchedSubscriptions === false) {
					this.props.profile.then(profile => {
						this.setState({ fetchedSubscriptions: true, subs: profile.subreddit });
					});
				}
				else if (state.fetchedSubscriptions ===  true) {
					return <Subscriptions subscriptions={state.subs} />;
				}
				else return (<div>Loading...</div>);
				break;
			case 'POSTS':
				if (this.props.posts instanceof Promise && this.state.fetchedPosts === false) {
					this.props.posts.then(posts => {
						this.setState({ fetchedPosts: true, posts });
					});
				}
				else if (state.fetchedPosts ===  true) {
					return <PostsList posts={state.posts} onPostClick={this.actions.changeView} onLeftClick={this.actions.changeView} />;
				}
				else return (<div>Loading...</div>);
				break;
			case 'COMMENTS':
				if (this.props.comments instanceof Promise && this.state.fetchedComments === false) {
					this.props.comments.then(post => {
						this.setState({ fetchedComments: true, comments: post.comments });
					});
				}
				else if (state.fetchedComments ===  true) {
					return <Display selectedPost={this.state.currentPost} onNavigate={() => this.actions.changeView('POSTS')} comments={this.state.comments} />;
				}
				else return (<div>Loading...</div>);
				break;
			default:
				return (<div>Loading...</div>);
		}
	}
}

export default connect(state => state)(PostsContainer);