import { h } from 'preact';
import style from './style';

const Message = ({ data }) => (
	<div class={style.container}>
		<header>{data.title}</header>
		<article>{data.message}</article>
	</div>
);

export default Message;