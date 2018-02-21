import { h, Component } from 'preact';
import style from './style';
import Header from '../../components/header';
import Message from '../../components/message';
import { icons } from '../../assets/svgs';

const messages = [
	{
		title: 'This is a title',
		message: 'Here is a message'
	},
	{
		title: 'This is another title',
		message: 'Here is another message'
	},
	{
		title: 'This is a third title',
		message: 'Here is a third message'
	}
];

export default class Inbox extends Component {

	state = {}

	render({ query }, { time, count }) {
		return (
			<div>
				<Header
					left={{ text: '', showIcon: true, icon: icons.inbox.read }}
					title={{ text: 'Inbox', showIcon: false }}
					right={{ icons: ['', icons.inbox.new] }}
				/>
				<div class={style.inbox}>
					{ messages.map(message => <Message data={message} />)}
				</div>
			</div>
		);
	}
}
