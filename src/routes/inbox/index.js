import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import style from './style';
import Header from '../../components/header';
import Message from '../../components/message';
import { icons } from '../../assets/svgs';

class Inbox extends Component {

	state = {
		fetchedInbox: false,
		messages: {}
	}

	componentWillMount() {
		this.props.dispatch({ type: 'GET_INBOX' });
	}

	render({ state, props }) {
		if (this.props.inbox instanceof Promise && this.state.fetchedInbox === false) {
			this.props.inbox.then(messages => {
				this.setState({ fetchedInbox: true, messages });
			});
		}
		else if (this.state.fetchedInbox ===  true) {
			return (
				<div class={style.inbox}>
					<Header
						left={{ text: '', showIcon: true, icon: icons.inbox.read }}
						title={{ text: 'Inbox', showIcon: false }}
						right={{ icons: ['', icons.inbox.new] }}
					/>
					{ this.state.messages.map(message => <Message data={message} />)}
				</div>
			);
		}
		else return (
			<div>
				<Header
					left={{ text: '', showIcon: true, icon: icons.inbox.read }}
					title={{ text: 'Inbox', showIcon: false }}
					right={{ icons: ['', icons.inbox.new] }}
				/>
				Loading...
			</div>);
	}
}

export default connect(state => state)(Inbox);