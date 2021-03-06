/* eslint react/jsx-no-bind: 0 */
import { h, Component } from 'preact';
import { icons } from '../../assets/svgs';
import { route } from 'preact-router';
import { numberWithCommas, timeSince, capitalizeFirst } from '../../assets/utilities';
import Header from '../../components/header';
import Loader from '../../components/loader';
import Button from '../../components/button';
import Content from '../../components/content';
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
		fetchedComments: false,
		replyWindow: false,
		reply: ''
	}

	actions = {
		getComments: async (id) => {
			const post = await window.snoo.getSubmission(id).expandReplies({ limit: 5, depth: 1 });
			await this.setState({ post, comments: post.comments });
		},
		onNavigate: () => {
			route('/', true);
		},
		showReplyWindow: () => this.setState({ replyWindow: !this.state.replyWindow }),
		post: {
			upVote: (id) => {},//window.snoo.getSubmission(id).upvote(),
			downVote: (id) => {}, //window.snoo.getSubmission(id).downvote(),
			favorite: (id) => window.snoo.getSubmission(id).save(),
			reply: (id) => window.snoo.getSubmission(id).reply(this.state.reply),
			share: () => {}
		},
		comment: {
			upVote: () => {},
			downVote: () => {},
			favorite: () => {},
			reply: () => {},
			share: () => {}
		}
	}
	componentWillMount() {
		window.scrollTo(0,0);
		this.actions.getComments(this.props.id);
	}

	render(props, state) {
		if (this.state.replyWindow) {
			//Show Reply Window
		}
		else {
			if (state.comments.length !== 0 && this.state.fetchedComments === false) {
				this.setState({
					fetchedComments: true,
					upvotes: numberWithCommas(this.state.post.ups),
					numComments: numberWithCommas(this.state.post.num_comments),
					timeSincePost: this.state.currentTime - this.state.post.created_utc
				});
			}
			if (state.fetchedComments ===  true) {
				return (
					<div>
						<Header
							left={{ text: capitalizeFirst(state.post.subreddit.display_name) , showIcon: true, icon: icons.header.left }}
							title={{ text: `${numberWithCommas(state.post.num_comments)} Comments`, showIcon: false }}
							right={{ icons: [icons.search.trending, icons.header.settings] }}
							onLeftClick={this.actions.onNavigate}
						/>
						<div class={style.container}>
							<Content src={state.post} />
							<article>
								<h4><a href={state.post.url}>{state.post.title}</a></h4>
								in {state.post.subreddit.display_name} by {state.post.author.name}<br />
								<span>
									<Button icon={icons.post.upVote} width="13" height="13" />
									{numberWithCommas(state.post.ups)}
								</span>
								<span>
									<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24">
										<path d={icons.post.comment} />
									</svg>&nbsp;&nbsp;
									{numberWithCommas(state.numComments)}
								</span>
								<span>
									<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24">
										<path d={icons.post.clock} />
									</svg>&nbsp;&nbsp;
									{timeSince(state.timeSincePost)}
								</span>
							</article>
							<footer>
								<Button icon={icons.post.upVote} width="24" height="24" onClick={() => this.actions.post.upVote(state.post.id)} />
								<Button icon={icons.post.downVote} width="24" height="24" onClick={() => this.actions.post.downVote(state.post.id)} />
								<span onClick={() => this.actions.post.favorite(state.post.id)}>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
										<path d={icons.post.favorite} />
									</svg>
								</span>
								<span onClick={this.actions.post.showReplyWindow}>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
										<path d={icons.post.reply} />
									</svg>
								</span>
								<span onClick={this.actions.post.share}>
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
		}
		return (<Loader />);
	}
}

export default Comments;