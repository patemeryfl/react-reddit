const FETCH_TRENDING = 'FETCH_TRENDING';
const SEARCH_SUBREDDITS = 'SEARCH_SUBREDDITS';

const search = (state, action) => {
	switch (action.type) {
		case FETCH_TRENDING: {
			return [...state ];
		}
		case SEARCH_SUBREDDITS: {
			return new Promise((res, rej) => {
				window.snoo.getSubreddit('programming').getNew().then(subreddit => {
					res(subreddit);
					rej({ error: 'An error occured fetching subs' });
				});
			});
		}
		default:
			return state;
	}
};

export default search;