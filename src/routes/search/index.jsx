import { h, Component } from 'preact';
import style from './style';
import { icons } from '../../assets/svgs';

class Search extends Component {

	state = {
		query: 'Search Posts, Subreddits, Users',
		trending: ['Cozy Places', 'Oddly Satisfying', 'Vintage Menus', 'Trees', 'Meditation'],
		results: {}
	}

	actions = {
		getSearch: async () => {
			const results = await window.snoo.getSubreddit(this.state.query).getNew();
			await this.setState({ results });
		},
		handleChange: e => {
			this.setState({ query: e.target.value });
		},
		clear: () => {this.setState({ query: '' });}
	}


	render(props, { query, trending }) {
		if (this.props.search instanceof Promise) {
			this.props.search.then(res => {
				//this.props.dispatch({ type: 'FETCHING_COMPLETED', payload: res });
			});
		}
		return (
			<div>
				<header class={style.header}>
					<form onSubmit={this.actions.getSearch} action="javascript:">
						<input class={style.searchBar} placeholder={query} onChange={this.actions.handleChange} />
						<button type="submit">
							<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24">
								<path d={icons.search.search} />
							</svg>
						</button>
					</form>
				</header>
				<div class={style.search}>
					<h3>Trending</h3>
					<ul>
						{trending.map(sub => (
							<div>
								<button>
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
										<path d={icons.search.trending} />
									</svg>
									{sub}
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class={style.right}>
										<path d={icons.header.right} />
									</svg>
								</button>
							</div>
						))}
						<br /><br />
						<button>
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
								<path d={icons.search.random} />
							</svg>
							Random Subreddit
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class={style.right}>
								<path d={icons.header.right} />
							</svg>
						</button>
					</ul>
				</div>
			</div>
		);
	}
}


export default Search;