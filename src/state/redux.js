import search from '../routes/search/reducers';

const results = (state = [], action) => {
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

const createStore = (reducer) => {

	let state = {
		posts: {},
		inbox: {},
		profile: {},
		search: {},
		settings: {}
	};
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


const APP = combineReducers({ search, results });

export default createStore(APP);