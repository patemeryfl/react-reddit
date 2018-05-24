import { h, Component } from 'preact';
import style from './style';

class Button extends Component {
	state = {
		clicked: false
	}
	actions = {
		click: () => this.setState({ clicked: !this.state.clicked })
	}
	render(props) {
		return (
			<span
				class={this.state.clicked ? style.clicked : style.notClicked}
				onClick={this.actions.click}
			>
				<svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 24 24">
					<path d={props.icon} />
				</svg>
			</span>
		);
	}
}

export default Button;