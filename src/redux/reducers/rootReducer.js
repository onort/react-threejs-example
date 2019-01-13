import { combineReducers } from "redux"

import { lengthReducer } from "./"

export default combineReducers({
  length: lengthReducer
})
