const GET_NEW = 'GET_NEW';
const GET_POPULAR = 'GET_POPULAR';
const GET_SELECTION = 'GET_SELECTION';

const posts = (state, action) => {
	switch (action.type) {
		case GET_NEW:
			return new Promise((res, rej) => {
				window.snoo.getNewSubreddits().then(subreddits => {
					res(subreddits);
				}).catch(e => {
					rej([...state, { errors: [e, 'There was an error fetching the new subreddits'] }]);
				});
			});
		case GET_POPULAR:
			return new Promise((res, rej) => {
				window.snoo.getPopularSubreddits().then(subreddits => {
					res(subreddits);
				}).catch(e => {
					rej([...state, { errors: [e, 'There was an error fetching the popular subreddits'] }]);
				});
			});
		case GET_SELECTION:
			return new Promise((res, rej) => {
				window.snoo.searchSubreddits({ query: action.query }).then(subreddits => {
					res(subreddits);
				}).catch(e => {
					rej([...state, { errors: [e, 'There was an error fetching the popular subreddits'] }]);
				});
			});
		default:
			return state;
	}
};

export default posts;