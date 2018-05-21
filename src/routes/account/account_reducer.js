const SIGN_UP = 'SIGN_UP';
const SIGN_IN = 'SIGN_IN';
const CHECK_FOR_EXISTING = 'CHECK_FOR_EXISTING';

const account = (state, action) => {
	switch (action.type) {
		case SIGN_UP:
			return state;
		case SIGN_IN:
			return state;
		case CHECK_FOR_EXISTING:
			return state;
		default:
			return state;
	}
};

export default account;