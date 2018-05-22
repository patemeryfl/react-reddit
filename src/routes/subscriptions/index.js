/* eslint react/jsx-no-bind: 0 */
import { h, Component } from 'preact';
import { icons } from '../../assets/svgs';
import { capitalizeFirst, isEmpty } from '../../assets/utilities';
import style from './style';
import Header from '../../components/header';

class Subscriptions extends Component {
	state = {
		subscriptions: [],
		popular: [],
		fetchedSubscriptions: false
	}
	actions = {
		getPopular: async () => {
			const popular = await window.snoo.getPopularSubreddits();
			await popular.sort((a, b) => {
				let nameA = a.display_name.toUpperCase();
				let nameB = b.display_name.toUpperCase();
				if (nameA < nameB) { return -1; }
				if (nameA > nameB) { return 1; }
			});
			await this.setState({ popular });
		},
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
						title={{ text: 'Subreddits', showIcon: false }}
						right={{ text: 'Edit', icons: ['',''] }}
						onLeftClick={this.addSubscription}
					/>
					<div class={style.container}>
						<button onClick={this.actions.getHome}>
							<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
								<path d={icons.footer.posts} />
							</svg>
							<span class={style.title}>Home</span><br />
							<span class={style.subtitle}>Posts from subscriptions</span>
						</button>
						<button onClick={this.actions.getPopular}>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<path d={icons.footer.posts} />
							</svg>
							<span class={style.title}>Popular</span><br />
							<span class={style.subtitle}>Most popular posts across Reddit</span>
						</button>
						<button onClick={this.actions.getAll}>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<path d={icons.footer.posts} />
							</svg>
							<span class={style.title}>All Posts</span><br />
							<span class={style.subtitle}>Posts across all subreddits</span>
						</button>
						<div>
							{this.state.subscriptions.map(sub => (
								<div class={style.subscription} onClick={() => this.actions.getUser(sub)}>
									{capitalizeFirst(sub.display_name)}
								</div>
							))}
						</div>
					</div>
				</div>
			);
		}
		return (<div>Loading</div>);
	}
}

export default Subscriptions;