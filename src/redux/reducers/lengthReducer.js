import { types } from "../actions"

const initialLength = 25

const lengthReducer = (state = initialLength, action) => {
  switch (action.type) {
    case types.DECREASE_LENGTH:
      return state > 0 ? state - 1 : null
    case types.INCREASE_LENGTH:
      return state + 1
    case types.SET_LENGTH:
      return action.length >= 0 ? action.length : null
    default:
      return state
  }
}

export default lengthReducer
