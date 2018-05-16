import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { isEmpty } from '../../assets/utilities';
import Header from '../../components/header';
import User from '../../components/user';

class Profile extends Component {

	state = {
		fetchedUser: false,
		fetchedOverview: false
	}

	actions = {
		getOverview: async () => {
			const overview = await window.snoo.getMe().getOverview();
			this.props.dispatch({ type: 'SET_OVERVIEW', data: overview });
		}
	}

	componentDidMount() {
		this.actions.getOverview();
	}

	render(state) {
		if (isEmpty(this.props.profile.user) === false && this.state.fetchedUser === false) {
			this.setState({ fetchedUser: true });
		}
		if (isEmpty(this.props.profile.overview) === false && this.state.fetchedOverview === false) {
			this.setState({ fetchedOverview: true });
		}
		if (this.state.fetchedUser === true && this.state.fetchedOverview === true) {
			return (
				<div>
					<Header
						left={{ text: 'Accounts', showIcon: false, icon: '' }}
						title={{ text: this.props.profile.user.name, showIcon: false }}
						right={{ icons: [] }}
					/>
					<div class="profile">
						<User {...this.props.profile} />
					</div>
				</div>
			);
		}
		return (<div>Loading...</div>);
	}
}

export default connect(state => state)(Profile);