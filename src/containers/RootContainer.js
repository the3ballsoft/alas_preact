import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import App from '../components/App';

const mapDispatchToProps = (dispatch) => {
  return {
  	 pruebaAuthToken: () => {
       console.log('aca revisaria el token');
  	 }
  }
}

export default connect(null, mapDispatchToProps)(App);
