import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import style from './style';
import { icons } from '../../assets/svgs';

import Header from '../../components/header';
import Post from '../../components/post';
import Display from '../../components/display';

class PostsContainer extends Component {
	state = {
		showPostDetails: false,
		new: null,
		fetchedPosts: false,
		fetchedComments: false,
		isFetching: false,
		currentPost: null,
		comments: []
	}

	onSelect = (post) => {
		this.props.dispatch({ type: 'GET_COMMENTS', post });
		this.setState({ fetchedComments: false });
		this.setState({ showPostDetails: true, currentPost: post });
	}

	onNavigate = () => {
		this.setState({ showPostDetails: false });
	}

	componentWillMount() {
		this.props.dispatch({ type: 'GET_HOT' });
	}

	// componentWillReceiveProps(props) {

	// }

	render(props, state) {
		if (this.props.posts instanceof Promise && this.state.fetchedPosts === false) {
			this.props.posts.then(res => {
				this.setState({ fetchedPosts: true, new: res });
			});
		}
		if (this.props.comments instanceof Promise && this.state.fetchedComments === false) {
			this.props.comments.then(res => {
				this.setState({ fetchedComments: true, comments: res.comments });
			});
		}
		if (state.new === null) return (<div>Loading</div>);
		if (state.new !== null) {
			if (!state.showPostDetails) {
				return (
					<div>
						<Header
							left={{ text: 'Subreddits', showIcon: true, icon: icons.header.left }}
							title={{ text: 'Home', showIcon: true }}
							right={{ icons: [icons.header.fire, icons.header.settings] }}
						/>
						<div class={style.posts}>
							{state.new.map(post => <Post data={post} onPostClick={this.onSelect} />)}
						</div>
					</div>
				);
			}
			return (
				<Display selectedPost={this.state.currentPost} onNavigate={this.onNavigate} comments={this.state.comments} />
			);
		}
	}
}

export default connect(state => state)(PostsContainer);