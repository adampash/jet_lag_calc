export const ADD_ORIGIN = 'ADD_ORIGIN'
export const ADD_DESTINATION = 'ADD_DESTINATION'

//
// action creators
//

export function addOrigin(text) {
  return { type: ADD_ORIGIN, text }
}

export function addOriginAsync(text) {
  return dispatch => {
    // dispatch optimistic update
    dispatch(test(text))
    setTimeout(() => {
      // dispatch final update
      dispatch(test(`${text} async`))
    }, 1000)
  }
}
