import { NEXT_STEP, PREV_STEP } from '../actions/steps'

export function step(state=0, action) {
  switch (action.type) {
  case NEXT_STEP:
    if (action.step !== undefined) {
      return action.step
    } else
      return state + 1
  case PREV_STEP:
    return Math.max(0, state - 1)
  default:
    return state
  }
}

