import { 
  PERSON_DATA_REQUEST,
  PERSON_DATA_SUCCESS,
  PERSON_DATA_FAILURE, 
} from "../actions/actionTypes";

const initialState = {
  isFetching: false,
  profile: undefined,
  errors: undefined,
}

export default function reducer(
  state = initialState,
  action,
){
  switch (action.type) {
    case PERSON_DATA_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      })

    case PERSON_DATA_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        profile: action.data,
      })

    case PERSON_DATA_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errors: action.errors,
      })

    default:
      return state
  }
}