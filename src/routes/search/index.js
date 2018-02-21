import { h, Component } from 'preact';
import style from './style';
import { icons } from '../../assets/svgs';

export default class Search extends Component {
	state = {
		query: 'Search Posts, Subreddits, Users',
		trending: ['Cozy Places', 'Oddly Satisfying', 'Vintage Menus', 'Trees', 'Meditation']
	}

	handleChange = e => {
		this.setState({ query: e.target.value });
	}

	handleSubmit = () => {
		let { query } = this.state;
		console.log(query);
	}

	clear = () => {this.setState({ query: '' });}

	render({ }, { query, trending }) {
		return (
			<div>
				<header class={style.header}>
					<form onSubmit={this.handleSubmit} action="javascript:">
						<input class={style.searchBar} placeholder={query} onChange={this.handleChange} />
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
