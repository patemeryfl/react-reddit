import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Provider } from 'preact-redux';
import store from '../state/redux';
import { auth } from '../assets/auth/oAuth';

//Stateless
import Footer from './footer';
//Connected
import PostsContainer from '../routes/posts';
import Inbox from '../routes/inbox';
import Profile from '../routes/profile';
import Search from '../routes/search';
import Settings from '../routes/settings';

if (module.hot) {
	require('preact/debug');
}

export default class App extends Component {

	state = { snoo: '' }

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	componentWillMount() {
		const script = document.createElement('script');
		script.src = 'https://not-an-aardvark.github.io/snoowrap/snoowrap-v1.js';
		script.async = true;
	
		script.onload = () => {
			window.snoo = new window.snoowrap(auth);
		};
	
		document.body.appendChild(script);
	}

	render({ state }) {
		return (<div id="app">
			<Provider store={store}>
				<Router onChange={this.handleRoute}>
					<PostsContainer path="/" />
					<Inbox path="/inbox" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
					<Search path="/search" />
					<Settings path="/settings" />
				</Router>
			</Provider>
			<Footer />
		</div>);
	}
}
