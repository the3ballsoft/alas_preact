import { h, Component } from 'preact';
import { Provider } from 'preact-redux';
import { Router } from 'preact-router';
import Header from './header';
import HeadingsPage from '../pages/HeadingsPage'; 
import ProductsPage from '../pages/ProductsPage'; 
import FavoritesPage from '../pages/FavoritesPage'; 
import Profile from './profile';
import 'flexboxgrid';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
          <HeadingsPage path="/" />
					<ProductsPage path="/indice/" />
          <FavoritesPage path="/favoritos/" />
				</Router>
			</div>
		);
	}
}
