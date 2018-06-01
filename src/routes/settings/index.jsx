import { h, Component } from 'preact';
import style from './style';
import { icons } from '../../assets/svgs';
import Header from '../../components/header';

export default class Settings extends Component {

	state = {
		setting: 'Main',
		items: ['General', 'Apperance', 'Theme', 'Accounts', 'About']
	}

	actions = {

	}

	render(props, state) {
		const Icons = { icons };
		let view = () => {
			switch (this.state.setting) {
				case 'Main':
			}
		}
		return (
			<div>
				<Header
					left={{ text: '', showIcon: false, icon: '' }}
					title={{ text: 'Settings', showIcon: false }}
					right={{ icons: [] }}
				/>
				<div class={style.settings}>
					<div class={style.items}>
						{state.items.map(item => {
							let i = Icons.icons.profile[item];
							return (
								<button onClick={() => this.actions.getInfo(item)}>
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
										<path d={i} />
									</svg>
									{item}
								</button>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}
