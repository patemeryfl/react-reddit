import { h } from 'preact';
import style from './style';

const SignUp = (props) => (
	<div class={style.container}>
		<h2 class={style.title}>Sign Up</h2>
		<input type="text" id="first" class="form-control" placeholder="First Name" required onChange={props.handleChange} />
		<input type="text" id="last" class="form-control" placeholder="Last Name" required onChange={props.handleChange} />
		<input type="text" id="school" class="form-control" placeholder="School" required onChange={props.handleChange} />
		<input type="email" id="email" class="form-control"
			placeholder="Email address" required autofocus onChange={props.handleChange}
		/>
		<input type="password" id="password" class="form-control" placeholder="Password" required onChange={props.handleChange} />
		<div class={style.actions}>
			<button onClick={props.cancel}>Cancel</button>
			<button onClick={props.signUp}>Sign Up</button>
		</div>
		{props.errors ?
			<div class="alert alert-warning">
				<p>{props.errors}</p>
			</div> : <div />
		}
	</div>
);

export default SignUp;