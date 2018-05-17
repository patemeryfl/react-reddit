import posts from '../routes/posts/post_reducer';
import comments from '../routes/posts/comment_reducer';
import inbox from '../routes/inbox/inbox_reducer';
import profile from '../routes/profile/user_reducer';
import search from '../routes/search/reducers';

const async = (state, action) => {
	switch (action.type) {
		case 'STARTED_FETCHING':
			return [...state, { isFetching: true }];
		case 'FETCHING_COMPLETED':
			return [...state, { isFetching: false, data: action.payload }];
		case 'FETCH_FAILED':
			return [...state, { isFetching: false, error: action.error }];
		default:
			return state;
	}
};

const initialState = {
	posts: {
		posts: {},
		subscriptions: {},
		comments: {}
	},
	comments: [],
	inbox: {},
	profile: {
		user: {},
		overview: {}
	},
	search: {},
	settings: {},
	isFetching: false,
	error: ''
};


const createStore = (reducer, initialState) => {
	let state = initialState;
	let listeners = [];
		
	const getState = () => state;
	
	const dispatch = (action) => {
		state = reducer(state, action);
		listeners.forEach(listener => listener());
	};
	
	const subscribe = (listener) => {
		listeners.push(listener);
		return () => {
			listeners.filter(l => l !== listener);
		};
	};
	dispatch({});
	
	return { getState, dispatch, subscribe };
};

const combineReducers = (reducers) => (state , action) => Object.keys(reducers).reduce(
	(nextState, key) => {
		nextState[key] = reducers[key](
			state[key], action);
		return nextState;
	}, {});


const APP = combineReducers({ posts, comments, inbox, profile, search, async });

export default createStore(APP, initialState);