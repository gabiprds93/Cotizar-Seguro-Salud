import {
  PERSON_DATA_REQUEST,
  PERSON_DATA_SUCCESS,
  PERSON_DATA_FAILURE,
} from './actionTypes'

export const personDataRequest = () => ({
  type: PERSON_DATA_REQUEST
})

export const personDataSuccess = payload => ({
  type: PERSON_DATA_SUCCESS,
  ...payload
})

export const personDataFailure = payload => ({
  type: PERSON_DATA_FAILURE,
  ...payload
})

export const fetchPersonData = payload => {
  return dispatch =>{
    dispatch(personDataRequest())
    fetch('https://freestyle.getsandbox.com/dummy/obtenerdatospersona', {
      method: "POST",
      headers: { 'Content-Type':'application/json' },
    })
    .then(response => response.json())
    .then(result => dispatch(personDataSuccess(result)))
    .catch(error => {
      dispatch(personDataFailure(error.message))
    })
  }
}