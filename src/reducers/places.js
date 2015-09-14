import { ADD_ORIGIN, ADD_DESTINATION } from '../actions/places'

export function places(state={origin: null, destination: null}, action) {
  switch (action.type) {
  case ADD_ORIGIN:
    return {...state, origin: action.origin}
  case ADD_DESTINATION:
    return {...state, destination: action.origin}
  default:
    return state
  }
}
