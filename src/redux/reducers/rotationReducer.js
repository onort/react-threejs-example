import { types } from "../actions"

const initialState = true

const rotationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_AUTO_ROTATION:
      return !state
    default:
      return state
  }
}

export default rotationReducer
