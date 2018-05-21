import { h } from 'preact';
import style from './style';

const SignIn = ({ changeView, signIn, handleSignInChange, errors }) => (
	<div class={style.container}>
		<h2 class={style.title}>Atlas</h2>
		<h3 class={style.subtitle}>Reddit Client</h3>
		<input type="text" id="username"
			placeholder="Username" required autofocus onChange={handleSignInChange}
		/>
		<input type="password" id="password" placeholder="Password" required onChange={handleSignInChange} />
		<div class={style.actions}>
			<button onClick={changeView}>Sign Up</button>
			<button onClick={signIn}>Sign In</button>
		</div>
		<div><br />
			{errors ?
				<div class="alert alert-warning">
					<p>{errors}</p>
				</div> : <div />
			}
		</div>
	</div>
);

export default SignIn;