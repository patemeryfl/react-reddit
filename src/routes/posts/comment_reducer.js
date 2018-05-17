const GET_REPLIES = 'GET_REPLIES';
const REPLY_TO_POST = 'REPLY_TO_POST';

const comments = (state, action) => {
	switch (action.type) {
		case GET_REPLIES:
			return state;
		case REPLY_TO_POST:
			return state;
		default:
			return state;
	}
};

export default comments;
