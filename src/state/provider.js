import { h, Component } from 'preact';

export default class Provider extends Component {
	state = {
		snoostore: window.snoostore,
		posts: {},
		inbox: {},
		profile: {},
		search: {},
		settings: {}
	}
	componentDidMount() {
		const script = document.createElement('script');
		script.src = 'https://not-an-aardvark.github.io/snoowrap/snoowrap-v1.js';
		script.async = true;
	
		// script.onload = function() {
		// 	this.state.snoostore = new window.snoowrap(auth);
		// };
	
		document.body.appendChild(script);
	}
	render(state, props) {
		return (
			<div>
				{state.snoostore ? <div>Loading...</div> : <div {...props}> {this.props.children[0]} </div> }
			</div>
		);
	}
}