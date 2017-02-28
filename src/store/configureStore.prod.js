import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'


const configureStore = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware // lets us dispatch() functions
  )
);

export default configureStore
