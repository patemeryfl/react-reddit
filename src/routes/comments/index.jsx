import { h, Component } from 'preact';
import { icons } from '../../assets/svgs';
import { route } from 'preact-router';
import { numberWithCommas, convertTime } from '../../assets/utilities';
import Header from '../../components/header';
import Loader from '../../components/loader';
import Comment from '../../components/comment';
import style from './style';

class Comments extends Component {

	state = {
		upvotes: '',
		numComments: '',
		currentTime: new Date().getTime(),
		timeSincePost: '',
		post: null,
		comments: [],
		fetchedComments: false
	}

	actions = {
		getComments: async (id) => {
			const post = await window.snoo.getSubmission(id).expandReplies({ limit: 2, depth: 1 });
			await this.setState({ post, comments: post.comments });
		},
		onNavigate: () => route('/', true),
		replyToPost: () => {}
	}
	componentWillMount() {
		this.actions.getComments(this.props.id);
	}

	render(props, state) {
		if (state.comments.length !== 0 && this.state.fetchedComments === false) {
			this.setState({
				fetchedComments: true,
				upvotes: numberWithCommas(this.state.post.ups),
				numComments: numberWithCommas(this.state.post.num_comments),
				timeSincePost: this.state.currentTime - this.state.post.created_utc
			});
		}
		if (state.fetchedComments ===  true) {
			let imageUrl;
			if (state.post.preview.images[0].resolutions.length === 0) {
				imageUrl = ''; //Image URL is broken
			}
			else {
				imageUrl = state.post.preview.images[0].resolutions[state.post.preview.images[0].resolutions.length - 1].url;
			}
			return (
				<div>
					<Header
						left={{ text: state.post.subreddit.display_name , showIcon: true, icon: icons.header.left }}
						title={{ text: `${state.post.num_comments} Comments`, showIcon: false }}
						right={{ icons: [icons.search.trending, icons.header.settings] }}
						onLeftClick={this.actions.onNavigate}
					/>
					<div class={style.container}>
						<img src={imageUrl} />
						<article>
							<h4>{state.post.title}</h4>
							in {state.post.subreddit.display_name} by {state.post.author.name}<br />
							<span>
								<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24">
									<path d={icons.post.upVote} />
								</svg>&nbsp;&nbsp;
								{state.ups}
							</span>
							<span>
								<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24">
									<path d={icons.post.comment} />
								</svg>&nbsp;&nbsp;
								{state.numComments}
							</span>
							<span>
								<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24">
									<path d={icons.post.clock} />
								</svg>&nbsp;&nbsp;
								{convertTime(state.timeSincePost)}
							</span>
						</article>
						<footer>
							<span>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
									<path d={icons.post.upVote} />
								</svg>
							</span>
							<span>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
									<path d={icons.post.downVote} />
								</svg>
							</span>
							<span>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
									<path d={icons.profile.saved} />
								</svg>
							</span>
							<span>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
									<path d={icons.post.reply} />
								</svg>
							</span>
							<span>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
									<path d={icons.post.upload} />
								</svg>
							</span>
						</footer>
						<div>
							{this.state.comments.map(comment => <Comment comment={comment} /> )}
						</div>
					</div>
				</div>
			);
		}
		return (<Loader />);
	}
}

export default Comments;