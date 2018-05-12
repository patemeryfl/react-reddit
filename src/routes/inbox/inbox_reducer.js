const GET_INBOX = 'GET_INBOX';

const inbox = (state, action) => {
	switch (action.type) {
		case GET_INBOX:
			return new Promise((res, rej) => {
				window.snoo.getInbox()
					.then(messages => {
						res(messages);
						return [...state, { messages }];
					}).catch(e => {
						rej([...state, { errors: [e, 'Couldnt get inbox'] }]);
					});
			});
		default:
			return state;
	}
};

export default inbox;