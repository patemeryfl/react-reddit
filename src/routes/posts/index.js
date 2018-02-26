import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import style from './style';
import Header from '../../components/header';
import Post from '../../components/post';
import { icons } from '../../assets/svgs';

import testData from '../../z_examples/example';

//const { children } = testData.data;

class PostsContainer extends Component {
	state = { new: null, fetched: false, isFetching: false }

	componentDidMount() {
		this.props.dispatch({ type: 'GET_HOT' });
	}

	render(props, state) {
		if(this.props.posts instanceof Promise && state.fetched === false) {
			this.props.posts.then(res => {
				this.setState({ new: res, fetched: true});
			})
		}
		if (state.new === null) return(<div>Loading</div>);
		if (state.new !== null) {
			return (
				<div>
					<Header
						left={{ text: 'Subreddits', showIcon: true, icon: icons.header.left }}
						title={{ text: 'Home', showIcon: true }}
						right={{ icons: [icons.header.fire, icons.header.settings] }}
					/>
					<div class={style.posts}>
						{state.new.map(post => <Post data={post} />)}
					</div>
				</div>
			)
		}
	}
}

export default connect(state => state)(PostsContainer);