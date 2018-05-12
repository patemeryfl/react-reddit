import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import Header from '../../components/header';
import User from '../../components/user';

class Profile extends Component {

	state = {
		user: '',
		fetchedUser: false
	}

	render(state) {
		if (this.props.profile instanceof Promise && this.state.fetchedUser === false) {
			this.props.profile.then(user => {
				this.setState({ fetchedUser: true, user });
			});
		}
		else if (this.state.fetchedUser === true) {
			return (
				<div>
					<Header
						left={{ text: 'Accounts', showIcon: false, icon: '' }}
						title={{ text: this.state.user.name, showIcon: false }}
						right={{ icons: [] }}
					/>
					<div class="profile">
						<User user={this.state.user} />
					</div>
				</div>
			);
		}
		else {
			return (<div>Loading...</div>);
		}
	}
}

export default connect(state => state)(Profile);