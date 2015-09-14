import fetchTimezone from '../lib/timezone'
export const ADD_ORIGIN = 'ADD_ORIGIN'
export const ADD_ORIGIN_TZ = 'ADD_ORIGIN_TZ'
export const ADD_DESTINATION = 'ADD_DESTINATION'
export const ADD_DESTINATION_TZ = 'ADD_DESTINATION_TZ'

//
// action creators
//

export function addOrigin(obj) {
  return dispatch => {
    fetchTimezone(obj.location, tz => {
      dispatch(addOriginTimezone(tz))
    })
    dispatch({ type: ADD_ORIGIN, origin: obj })
  }
}

export function addDestination(obj) {
  return dispatch => {
    fetchTimezone(obj.location, tz => {
      dispatch(addDestinationTimezone(tz))
    })
    dispatch({ type: ADD_DESTINATION, origin: obj })
  }
}

function addOriginTimezone(tz) {
  return { type: ADD_ORIGIN_TZ, tz }
}

function addDestinationTimezone(tz) {
  return { type: ADD_DESTINATION_TZ, tz }
}



// export function testAsync(text) {
//   return dispatch => {
//     // dispatch optimistic update
//     dispatch(test(text))
//     setTimeout(() => {
//       // dispatch final update
//       dispatch(test(`${text} async`))
//     }, 1000)
//   }
// }
