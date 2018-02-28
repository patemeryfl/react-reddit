const GET_HOT = 'GET_HOT';
const GET_POPULAR = 'GET_POPULAR';
const GET_SELECTION = 'GET_SELECTION';
const GET_SUBSCRIPTIONS = 'GET_SUBSCRIPTIONS';
const GET_COMMENTS = 'GET_COMMENTS';

const posts = (state, action) => {
	switch (action.type) {
		case GET_HOT:
			return new Promise((res, rej) => {
				window.snoo.getHot().then(subreddits => {
					res(subreddits);
				}).catch(e => {
					rej([...state, { errors: [e, 'There was an error fetching the new subreddits'] }]);
				});
			});
		case GET_POPULAR:
			return new Promise((res, rej) => {
				window.snoo.getPopularSubreddits().then(subreddits => {
					res(subreddits);
				}).catch(e => {
					rej([...state, { errors: [e, 'There was an error fetching the popular subreddits'] }]);
				});
			});
		case GET_SELECTION:
			return new Promise((res, rej) => {
				window.snoo.searchSubreddits({ query: action.query }).then(subreddits => {
					res(subreddits);
				}).catch(e => {
					rej([...state, { errors: [e, 'There was an error fetching the popular subreddits'] }]);
				});
			});
		case GET_SUBSCRIPTIONS:
			return new Promise((res, rej) => {
				window.snoo.getSubscriptions({ limit: 20 }).then(subreddits => {
					res(subreddits);
				}).catch(e => {
					rej([...state, { errors: [e, 'There was an error fetching the popular subreddits'] }]);
				});
			});
		case GET_COMMENTS:
			return new Promise((res, rej) => {
				window.snoo.getSubmission('80f9i7')
					.expandReplies({ limit: 2, depth: 1 })
					.then(comments => {
						res(comments);
					}).catch(e => {
						rej([...state, { errors: [e, 'Couldnt get comments'] }]);
					});
			});
		default:
			return state;
	}
};

export default posts;