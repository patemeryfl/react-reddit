import { h } from 'preact';
import { icons } from '../../assets/svgs';
import Header from '../header';
import Comment from '../comment';
import style from './style';

const numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const Display = ({ selectedPost, onNavigate, comments }) =>  {
	let ups = numberWithCommas(selectedPost.ups);
	let numComments = numberWithCommas(selectedPost.num_comments);
	let currentTime = new Date().getTime();
	let timeSincePost = currentTime - selectedPost.created_utc;
	
	if (comments === undefined) {
		return ( <div>Loading...</div> );
	}
	return (
		<div>
			<Header
				left={{ text: selectedPost.subreddit.display_name , showIcon: true, icon: icons.header.left }}
				title={{ text: `${selectedPost.num_comments} Comments`, showIcon: false }}
				right={{ icons: [icons.search.trending, icons.header.settings] }}
				onLeftClick={onNavigate}
			/>
			<div class={style.container}>
				<img src={selectedPost.thumbnail} />
				<article>
					<h4>{selectedPost.title}</h4>
					in {selectedPost.subreddit.display_name} by {selectedPost.author.name}<br />
					<span>
						<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24">
							<path d={icons.post.upVote} />
						</svg>&nbsp;&nbsp;
						{ups}
					</span>
					<span>
						<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24">
							<path d={icons.post.comment} />
						</svg>&nbsp;&nbsp;
						{numComments}
					</span>
					<span>
						<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24">
							<path d={icons.post.clock} />
						</svg>&nbsp;&nbsp;
						{timeSincePost}
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
					{comments.map(comment => <Comment comment={comment} /> )}
				</div>
			</div>
		</div>
	);
	
};

export default Display;