// import 'promise-polyfill';
// import 'isomorphic-fetch';
import { h, render } from 'preact';
import { Provider } from 'preact-redux'
import { fetchHeadings } from './actions/headings';
import RootContainer from './containers/RootContainer';
import configureStore from './store/configureStore'
import './style';


const store = configureStore()

let root;
function init(){
  root = render(
    <Provider store={store}>
      <RootContainer />
    </Provider>,
    document.body,
    root
  )

  //store.dispatch(fetchHeadings()).then(() =>
    //console.log(store.getState())
  //);
}

init();

// register ServiceWorker via OfflinePlugin, for prod only:
if (process.env.NODE_ENV==='production') {
	require('./pwa');
}

// in development, set up HMR:
if (module.hot) {
	module.hot.accept('./containers/RootContainer.js', () => requestAnimationFrame(init) );
}
