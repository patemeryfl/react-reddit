const SET_HOT = 'SET_HOT';
const SET_POPULAR = 'SET_POPULAR';
const SET_SELECTION = 'SET_SELECTION';
const SET_COMMENTS = 'SET_COMMENTS';
const SET_SUBSCRIPTIONS = 'SET_SUBSCRIPTIONS';

const posts = (state, action) => {
	switch (action.type) {
		case SET_HOT:
			return { ...state, posts: action.data };
		case SET_POPULAR:
			return { ...state, posts: action.data };
		case SET_SELECTION:
			return { ...state, posts: action.data };
		case SET_COMMENTS:
			return { ...state, comments: action.data };
		case SET_SUBSCRIPTIONS:
			return { ...state, subscriptions: action.data };
		default:
			return state;
	}
};

export default posts;