/*
 * constants 
 */

export const HEADINGS_REQUEST = 'HEADINGS_REQUEST';
export const HEADINGS_SUCCESS = 'HEADINGS_SUCCESS';
export const HEADINGS_FAILURE = 'HEADINGS_FAILURE';

export const SELECT_HEADING = 'SELECT_HEADING';
export const UNSELECT_HEADING = 'UNSELECT_HEADING';

export const ADD_FAVORITE_REQUEST = 'ADD_FAVORITE_REQUEST';
export const ADD_FAVORITE_SUCCESS = 'ADD_FAVORITE_SUCCESS';
export const ADD_FAVORITE_FAILURE = 'ADD_FAVORITE_FAILURE';


const HEADINGS =  'http://localhost:8000/api/v1/headings/';


/* API Call */

export function fetchHeadings() {
  return dispatch => {
    const config = { 
      method: 'GET',
      headers: new Headers({
        Authorization : `Token cfea63bc1832c02e823a98c0db269d1e69548df2`
      }),
      mode: 'cors'
    };

    return fetch(apiUrls.HEADINGS, config);
  }
}

/*
 * action creators
 */

export function headingsRequest() {
  const request = fetchHeadings();
  return { 
    type: HEADINGS_REQUEST, 
    payload: request
  }
}

export function headingSuccess(headings) {
  return {
    type: HEADINGS_SUCCESS,
    payload: headings
  }
}

export function headingsFailure(error) {
  return { 
    type: HEADINGS_FAILURE, 
    payload: error 
  }
}


export function selectHeading(id) {
  return { 
    type: SELECT_HEADING, 
    payload: id 
  }
}

export function unselectHeading() {
  return { 
    type: UNSELECT_HEADING
  }
}

export function addFavoriteRequest(id) {
  const request = fetchHeadings(id);//cambiar por la de favorites!!!
  return { 
    type: ADD_FAVORITE_REQUEST, 
    payload: request 
  }
}

export function addFavoriteSuccess(newFav) {
  return {
    type: ADD_FAVORITE_SUCCESS,
    payload: newFav 
  }
}

export function addFavoriteFailure(error) {
  return { 
    type: ADD_FAVORITE_FAILURE, 
    payload: error
  }
}

