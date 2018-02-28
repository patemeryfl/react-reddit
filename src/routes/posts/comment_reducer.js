const GET_COMMENTS = 'GET_COMMENTS';
const GET_REPLIES = 'GET_REPLIES';
const REPLY_TO_POST = 'REPLY_TO_POST';

const comments = (state, action) => {
	switch (action.type) {
		case GET_COMMENTS:
			return new Promise((res, rej) => {
				window.snoo.getSubmission(action.post.id)
					.expandReplies({ limit: 2, depth: 1 })
					.then(comments => {
						res(comments);
						return [...state, { comments }];
					}).catch(e => {
						rej([...state, { errors: [e, 'Couldnt get comments'] }]);
					});
			});
		case GET_REPLIES:
			return state;
		case REPLY_TO_POST:
			return state;
		default:
			return state;
	}
};

export default comments;
