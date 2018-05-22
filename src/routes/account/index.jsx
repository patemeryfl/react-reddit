import { h, Component } from 'preact';
import SignUp from '../../components/sign-up';
import SignIn from '../../components/sign-in';

class Account extends Component {
	state = {
		view: 'SIGN_IN',
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
	render() {
		if (this.state.view === 'SIGN_UP') {
			return <SignUp {...this.actions} />;
		}
		return <SignIn {...this.actions} />;
	}
}

export default Account;
