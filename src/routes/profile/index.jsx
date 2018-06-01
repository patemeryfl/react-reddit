import { h, Component } from 'preact';
import { isEmpty, capitalizeFirst } from '../../assets/utilities';
import Header from '../../components/header';
import Loader from '../../components/loader';
import User from '../../components/user';

class Profile extends Component {

	state = {
		user: {},
		overview: {},
		menuVisible: true,
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
		},
		getInfo: async (content) => {
			this.setState({ menuVisible: !this.state.menuVisible });
			let overview;
			switch (content) {
				case 'Posts':
					overview = await window.snoo.getMe().getSubmissions(); break;
				case 'Comments':
					overview = await window.snoo.getMe().getComments(); break;
				case 'Saved':
					overview = await window.snoo.getMe().getSavedContent(); break;
				case 'Friends':
					overview = await window.snoo.getMe().getFriendInformation(); break;
				case 'Upvoted':
					overview = await window.snoo.getMe().getUpvotedContent(); break;
				case 'Downvoted':
					overview = await window.snoo.getMe().getDownvotedContent(); break;
				case 'Hidden':
					overview = await window.snoo.getMe().getHiddenContent(); break;
				case 'Trophies':
					overview = await window.snoo.getMe().getTrophies(); break;
				default:
					break;
			}
			await this.setState({ overview });
		}
	}

	componentWillMount() {
		this.actions.getMe();
		if (this.props.content) {
			this.actions.getInfo(capitalizeFirst(this.props.content));
		}
		else {
			this.actions.getOverview();
		}
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
						<User state={this.state} actions={this.actions} content={this.props.content} />
					</div>
				</div>
			);
		}
		return (<Loader />);
	}
}

export default Profile;