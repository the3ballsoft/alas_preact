
import {
 HEADINGS_REQUEST, HEADINGS_SUCCESS, HEADINGS_FAILURE, 
 ADD_FAVORITE_REQUEST, ADD_FAVORITE_SUCCESS, ADD_FAVORITE_FAILURE,
 SELECT_HEADING, UNSELECT_HEADING
} from '../actions/headings';

const INITIAL_STATE = {
  headingsList: {
    headings: [],
    nextPage: null,
    error: null,
    loading: false
  },
  selectedHeading: {
    heading: null,
    error: null,
    loading: false
  },
  favoritesList: {
    headings: [],
    products: [],
    error: null,
    loading: false
  }
}


export default function(state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {
    case HEADINGS_REQUEST:
        return {
          ...state, 
          headingsList: {
            headings: [], error: null, loading: true
          }
        };
    case HEADINGS_SUCCESS:
        return {
          ...state, 
          headingsList: {
            headings: action.payload, error: null, loading: false 
          }
        };
    case HEADINGS_FAILURE:
        error = action.payload || { message: action.payload.message }
        return {
          ...state, 
          headingsList: {
            error: error, loading: false 
          }
        };
    default:
      return state
  }
}

