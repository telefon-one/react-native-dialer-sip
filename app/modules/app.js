import * as PjSip from './pjsip'

export const DESTROY = 'app/DESTROY'

/**
 * Initialize application modules
 */
export function init() {
  return async (dispatch, getState) => {
    try {
      console.log("4");
      await dispatch(PjSip.init())
      console.log("5");
    } catch (e) {
      console.log(e)
    }

  }
}

export function reset() {
  return async (dispatch, getState) => {
    dispatch(PjSip.destroy())
    dispatch({type: DESTROY})
  }
}

const initialState = {}

export default function app(state = initialState, action) {
  switch (action.type) {
    case DESTROY:
      return initialState
    default:
      return state
  }
}
