import { h } from 'preact';
import { icons } from '../../assets/svgs';
import Header from '../header';

const Subscriptions = ({ subs }) => (
	<div>
		<Header
			left={{ text: '', showIcon: true, icon: icons.header.left }}
			title={{ text: 'Subreddits', showIcon: false }}
			right={{ text: 'Edit', icons: ['',''] }}
			onLeftClick={this.addSubscription}
		/>
		<div>
			{subs.map(sub =>  (<p>{sub.display_name}</p>))}
		</div>
	</div>
);

export default Subscriptions;