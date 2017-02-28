
export const TARIFFDATA_REQUEST = 'TARIFFDATA_REQUEST';
export const TARIFFDATA_SUCCESS = 'TARIFFDATA_SUCCESS';
export const TARIFFDATA_FAILURE = 'TARIFFDATA_FAILURE';

export function tariffDataRequest(id) {
  const request = fetchHeadings();//cambiar por la de tariff data!!!
  return { 
    type: TARIFFDATA_REQUEST, 
    payload: request
  }
}

export function tariffDataSuccess(tariffData) {
  return {
    type: TARIFFDATA_SUCCESS,
    payload: tariffData 
  }
}

export function tariffDataFailure(error) {
  return { 
    type: TARIFFDATA_FAILURE, 
    payload: error 
  }
}
