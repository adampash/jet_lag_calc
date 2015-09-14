import { combineReducers } from 'redux'
import * as exampleReducer from './example'
import * as stepsReducer from './steps'

const rootReducer = combineReducers({
  ...exampleReducer,
  ...stepsReducer
})

export default rootReducer
