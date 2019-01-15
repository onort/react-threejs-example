import { combineReducers } from "redux"

import { lengthReducer, rotationReducer } from "./"

export default combineReducers({
  length: lengthReducer,
  rotation: rotationReducer
})
