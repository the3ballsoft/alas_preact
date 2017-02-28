import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1>ALAS</h1>
				<nav>
					<Link href="/">Arancel</Link>
          <Link href="/indice/">Indice</Link>
          <Link href="/favoritos/">Favoritos</Link>
				</nav>
			</header>
		);
	}
}
