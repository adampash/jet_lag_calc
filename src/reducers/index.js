import { combineReducers } from 'redux'
import * as exampleReducer from './example'
import * as stepsReducer from './steps'
import * as placesReducer from './places'

const rootReducer = combineReducers({
  ...exampleReducer,
  ...stepsReducer,
  ...placesReducer,
})

export default rootReducer
