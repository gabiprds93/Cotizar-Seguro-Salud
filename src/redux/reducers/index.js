import { combineReducers } from 'redux'
import { reducer } from 'redux-form'

import personReducer from './person'

const rootReducer = combineReducers({
  form: reducer,
  person: personReducer
})

export default rootReducer