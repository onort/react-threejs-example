import rotationReducer from "../rotationReducer"
import { types } from "../../actions"

describe("rotationReducer", () => {
  it("should return initialState", () => {
    const initialState = true
    expect(rotationReducer(initialState, {})).toEqual(initialState)
  })

  it("should toggle rotation", () => {
    const initialState = true
    expect(
      rotationReducer(initialState, { type: types.TOGGLE_AUTO_ROTATION })
    ).toBe(false)
  })
})
