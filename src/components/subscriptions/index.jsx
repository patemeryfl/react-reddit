import { h } from 'preact';
import { icons } from '../../assets/svgs';
import Header from '../header';

const Subscriptions = () => (
	<div>
		<Header
			left={{ text: '', showIcon: true, icon: icons.header.left }}
			title={{ text: 'Subreddits', showIcon: false }}
			right={{ text: 'Edit', icons: ['',''] }}
			onLeftClick={this.addSubscription}
		/>
		
	</div>
);

export default Subscriptions;