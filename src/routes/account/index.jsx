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
		}
	};
	render() {
		if (this.state.view === 'SIGN_UP') {
			return <SignUp actions={this.actions} />;
		}
		return <SignIn actions={this.actions} />;
	}
}

export default Account;
