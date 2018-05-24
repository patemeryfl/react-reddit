/* eslint react/jsx-no-bind: 0 */
import { h, Component } from 'preact';
import { route } from 'preact-router';
import { icons } from '../../assets/svgs';
import { capitalizeFirst, isEmpty } from '../../assets/utilities';
import style from './style';
import Header from '../../components/header';
import Loader from '../../components/loader';

class Subscriptions extends Component {
	state = {
		subscriptions: [],
		popular: [],
		fetchedSubscriptions: false
	}
	actions = {
		getSubscriptions: async () => {
			const subscriptions = await window.snoo.getSubscriptions();
			await subscriptions.sort((a, b) => {
				let nameA = a.display_name.toUpperCase();
				let nameB = b.display_name.toUpperCase();
				if (nameA < nameB) { return -1; }
				if (nameA > nameB) { return 1; }
			});
			await this.setState({ subscriptions });
		},
		getHome: () => route(`/`, true),
		getPopular: () => route(`/popular`, true),
		getAll: () => route(`/all`, true),
		getUser: (subreddit) => route(`/${subreddit.display_name}`, true),
		addSubscription: () => {}
	}

	componentWillMount() {
		this.actions.getSubscriptions();
	}

	render(state) {
		if (isEmpty(this.state.subscriptions) === false && this.state.fetchedSubscriptions === false) {
			this.setState({ fetchedSubscriptions: true });
		}
		if (this.state.fetchedSubscriptions ===  true) {
			return (
				<div>
					<Header
						left={{ text: '', showIcon: true, icon: icons.header.add }}
						title={{ text: 'Subscriptions', showIcon: false }}
						right={{ text: 'Edit', icons: ['',''] }}
						onLeftClick={this.addSubscription}
					/>
					<div class={style.container}>
						<button onClick={this.actions.getHome}>
							<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 30 30">
								<path d={icons.subscriptions.house} />
							</svg>
							<div>
								<span class={style.title}>Home</span><br />
								<span class={style.subtitle}>Posts from subscriptions</span>
							</div>
						</button>
						<button onClick={this.actions.getPopular}>
							<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 30 30">
								<path d={icons.subscriptions.popular} />
							</svg>
							<div>
								<span class={style.title}>Popular</span><br />
								<span class={style.subtitle}>Most popular posts across Reddit</span>
							</div>
						</button>
						<button onClick={this.actions.getAll}>
							<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 30 30">
								<path d={icons.footer.posts} />
							</svg>
							<div>
								<span class={style.title}>All Posts</span><br />
								<span class={style.subtitle}>Posts across all subreddits</span>
							</div>
						</button>
						<div>
							{this.state.subscriptions.map(sub => (
								<div class={style.subscription} onClick={() => this.actions.getUser(sub)}>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
										<path d={icons.subscriptions.chevron} />
									</svg>
									<span>
										{capitalizeFirst(sub.display_name)}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			);
		}
		return (<Loader />);
	}
}

export default Subscriptions;