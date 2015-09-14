import {
  ADD_ORIGIN,
  ADD_DESTINATION,
  ADD_ORIGIN_TZ,
  ADD_DESTINATION_TZ,
} from '../actions/places'

export function places(state={origin: null, destination: null}, action) {
  switch (action.type) {
  case ADD_ORIGIN:
    return {...state, origin: action.origin}
  case ADD_DESTINATION:
    return {...state, destination: action.origin}
  case ADD_ORIGIN_TZ:
    return {...state, origin: {...state.origin, tz: action.tz}}
  case ADD_DESTINATION_TZ:
    return {...state, destination: {...state.destination, tz: action.tz}}
  default:
    return state
  }
}
