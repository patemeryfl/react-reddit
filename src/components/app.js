/* eslint no-case-declarations: 0 */
import { h, Component } from 'preact';
import { Router, route } from 'preact-router';
import { auth } from '../assets/auth/oAuth';

//Stateless
import Footer from './footer';
//Connected
import Account from '../routes/account';
import PostsContainer from '../routes/posts';
import Subscriptions from '../routes/subscriptions';
import Comments from '../routes/comments';
import Inbox from '../routes/inbox';
import Profile from '../routes/profile';
import Search from '../routes/search';
import Settings from '../routes/settings';

if (module.hot) {
	require('preact/debug');
}

export default class App extends Component {

	state = {
		init: false,
		user: {}
	}

	actions = {
		isAuthenticated: async () => {
			const user = window.snoo.getMe();
			await this.setState({ user });
		}
	}

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		switch (e.path) {
			case '/':
			  const isAuthed = false;
			  if (!isAuthed) {
				  route('/account', true);
			  }
			  else {
				  this.currentUrl = e.url;
				}
		}
	};

	componentWillMount() {
		const script = document.createElement('script');
		script.src = 'https://not-an-aardvark.github.io/snoowrap/snoowrap-v1.js';
		script.async = true;
	
		script.onload = () => {
			window.snoo = new window.snoowrap(auth);
			this.setState({ init: true });
		};
	
		document.body.appendChild(script);
	}

	render() {
		if (window.snoo === undefined) {
			return (<div>Loading...</div>);
		}
		return (
			<div id="app">
				<Router onChange={this.handleRoute}>
					<Account path="/account" />
					<PostsContainer path="/" />
					<Subscriptions path="/subscriptions" />
					<Comments path="/comments/:id" />
					<Inbox path="/inbox" />
					<Profile path="/profile/" />
					<Search path="/search" />
					<Settings path="/settings" />
				</Router>
				<Footer />
			</div>
		);
	}
}
