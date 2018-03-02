const GET_ME = 'GET_ME';

const profile = (state, action) => {
	switch (action.type) {
		case GET_ME:
			return new Promise((res, rej) => {
				window.snoo.getMe().then(personal => {
					res(personal);
				}).catch(e => {
					rej([...state, { errors: [e, 'There was an error getting your info.'] }]);
				});
			});
		default:
			return state;
	}
};

export default profile;