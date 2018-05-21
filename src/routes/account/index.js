import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import SignUp from '../../components/sign-up';
import SignIn from '../../components/sign-in';

class Account extends Component {
	state = {
		view: '',
		signIn: {
			username: '',
			email: '',
			password: ''
		},
		signUp: {
			username: '',
			password: '',
			confirmPassword: '',
			DOB: ''
		}
	};
	actions = {
		checkStatus: () => {
			if (!this.props.account.loggedIn) {
				this.setState({ view: 'SIGN_IN' });
			}
		},
		validateUser: (credentials) => {

		},
		checkForExisting: (credentials) => {

		},
		handleSignInChange: (e) => {
			const login = this.state.signIn;
			login[e.target.id] =  e.target.value;
			this.setState({ login });
		},
		handleSignUpChange: (e) => {
			const newAccount = this.state.signUp;
			newAccount[e.target.id] =  e.target.value;
			this.setState({ newAccount });
		},
		changeView: () => {
			if (this.state.view === 'SIGN_IN') {
				this.setState({ view: 'SIGN_UP' });
			}
			else {
				this.setState({ view: 'SIGN_IN' });
			}
		},
		signUp: async () => {},
		signIn: async () => {},
		errors: {}
	};
	componentWillMount() {
		this.actions.checkStatus();
	}
	render() {
		if (this.state.view === 'SIGN_UP') {
			return <SignUp {...this.actions} />;
		}
		return <SignIn {...this.actions} />;
	}
}

export default connect(state => state)(Account);
