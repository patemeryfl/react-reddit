import { h, Component } from 'preact';
import { isEmpty } from '../../assets/utilities';
import style from './style';
import Header from '../../components/header';
import Message from '../../components/message';
import { icons } from '../../assets/svgs';

class Inbox extends Component {

	state = {
		fetchedMessages: false,
		messages: {}
	}

	actions = {
		getInbox: async () => {
			const messages = await window.snoo.getInbox();
			await this.setState({ messages });
		}
	}

	componentWillMount() {
		this.actions.getInbox();
	}

	render(props, state) {
		if (isEmpty(state.messages) === false && this.state.fetchedMessages === false) {
			this.setState({ fetchedMessages: true });
		}
		if (state.fetchedMessages ===  true) {
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
		return (<div>Loading...</div>);
	}
}

export default Inbox;