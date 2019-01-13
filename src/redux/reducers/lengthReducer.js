import { types } from "../actions"

const initialLength = 0

const lengthReducer = (state = initialLength, action) => {
  switch (action.type) {
    case types.DECREASE_LENGTH:
      return state > 0 ? state - 1 : null
    case types.INCREASE_LENGTH:
      // TO DO: Avoid going over max value
      return state + 1
    case types.SET_LENGTH:
      // TO DO: Avoid going over max value
      return action.length >= 0 ? action.length : null
    default:
      return state
  }
}

export default lengthReducer
