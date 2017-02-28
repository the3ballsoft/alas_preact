
import {
 TARIFFDATA_REQUEST, TARIFFDATA_SUCCESS, TARIFFDATA_FAILURE
} from '../actions/tariffdata';

const INITIAL_STATE = {
  tariffData: {
    data: [],
    error: null,
    loading: false
  }
}

export default function(state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {
    case TARIFFDATA_REQUEST:
        return {
          ...state, 
          tariffData: {
            data: [], error: null, loading: true
          }
        };
    case TARIFFDATA_SUCCESS:
        return {
          ...state, 
          tariffData: {
            data: action.payload, error: null, loading: false 
          }
        };
    case TARIFFDATA_FAILURE:
        error = action.payload || { message: action.payload.message }
        return {
          ...state, 
          tariffData: {
            data: [], error: error, loading: false 
          }
        };
    default:
      return state
  }
}

