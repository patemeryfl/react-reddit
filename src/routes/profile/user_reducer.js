const SET_ME = 'SET_ME';
const SET_OVERVIEW = 'SET_OVERVIEW';

const profile = (state, action) => {
	switch (action.type) {
		case SET_ME:
			return { ...state, user: action.data };
		case SET_OVERVIEW:
			return { ...state, overview: action.data };
		default:
			return state;
	}
};

export default profile;