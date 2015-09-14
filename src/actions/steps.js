export const NEXT_STEP = 'NEXT_STEP'
export const PREV_STEP = 'PREV_STEP'

//
// action creators
//

export function nextStep(step) {
  if (step !== undefined) {
    return { type: NEXT_STEP, step }
  } else
    return { type: NEXT_STEP }
}

export function prevStep() {
  return { type: PREV_STEP }
}

