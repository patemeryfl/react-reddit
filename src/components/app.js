import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Footer from './footer';

import PostsContainer from '../routes/posts';
import Inbox from '../routes/inbox';
import Profile from '../routes/profile';
import Search from '../routes/search';
import Settings from '../routes/settings';

if (module.hot) {
	require('preact/debug');
}

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Router onChange={this.handleRoute}>
					<PostsContainer path="/" />
					<Inbox path="/inbox" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
					<Search path="/search" />
					<Settings path="/settings" />
				</Router>
				<Footer />
			</div>
		);
	}
}
