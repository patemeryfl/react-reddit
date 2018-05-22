import { h, Component } from 'preact';
import { isEmpty } from '../../assets/utilities';
import Header from '../../components/header';
import Loader from '../../components/loader';
import User from '../../components/user';

class Profile extends Component {

	state = {
		user: {},
		overview: {},
		fetchedUser: false,
		fetchedOverview: false
	}

	actions = {
		getMe: async () => {
			const user = await window.snoo.getMe();
			await this.setState({ user });
		},
		getOverview: async () => {
			const overview = await window.snoo.getMe().getOverview();
			await this.setState({ overview });
		}
	}

	componentWillMount() {
		this.actions.getMe();
		this.actions.getOverview();
	}

	render(props, state) {
		if (isEmpty(state.user) === false && state.fetchedUser === false) {
			this.setState({ fetchedUser: true });
		}
		if (isEmpty(state.overview) === false && state.fetchedOverview === false) {
			this.setState({ fetchedOverview: true });
		}
		if (state.fetchedUser === true && state.fetchedOverview === true) {
			return (
				<div>
					<Header
						left={{ text: 'Accounts', showIcon: false, icon: '' }}
						title={{ text: state.user.name, showIcon: false }}
						right={{ icons: [] }}
					/>
					<div class="profile">
						<User {...state} />
					</div>
				</div>
			);
		}
		return (<Loader />);
	}
}

export default Profile;