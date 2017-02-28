import { combineReducers } from 'redux'
import  HeadingReducer from './reducerHeadings';
import { TariffDataReducer } from './reducerTariffdata';

const rootReducer = combineReducers({
  headings: HeadingReducer,
  //tariffdata: TariffDataReducer 
})

export default rootReducer
