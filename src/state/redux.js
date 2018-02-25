import search from '../routes/search/reducers';
import posts from '../routes/posts/reducers';

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
	posts: {},
	inbox: {},
	profile: {},
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

const combineReducers = (reducers) => (state = { dispatch: '' }, action) => Object.keys(reducers).reduce(
	(nextState, key) => {
		nextState[key] = reducers[key](
			state[key], action);
		return nextState;
	}, {});


const APP = combineReducers({ posts, search, async });

export default createStore(APP, initialState);