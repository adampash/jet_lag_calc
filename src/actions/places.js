export const ADD_ORIGIN = 'ADD_ORIGIN'
export const ADD_DESTINATION = 'ADD_DESTINATION'

//
// action creators
//

export function addOrigin(obj) {
  return { type: ADD_ORIGIN, origin: obj }
}

export function addDestination(obj) {
  return { type: ADD_DESTINATION, origin: obj }
}
