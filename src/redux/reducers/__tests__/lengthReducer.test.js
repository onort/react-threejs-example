import lengthReducer from "../lengthReducer"
import { types } from "../../actions"

describe("lengthReducer", () => {
  it("should return initial state", () => {
    expect(lengthReducer(0, {})).toEqual(0)
  })

  it("should decrement length when it recieves a decrease action", () => {
    const initialLegth = 5
    expect(lengthReducer(initialLegth, { type: types.DECREASE_LENGTH })).toBe(
      initialLegth - 1
    )
  })

  it("should increment length when it recieves an incerase action", () => {
    const initialLegth = 0
    expect(lengthReducer(initialLegth, { type: types.INCREASE_LENGTH })).toBe(
      initialLegth + 1
    )
  })

  it("should set length correctly if it recieves a set length action", () => {
    const passedLength = 7
    expect(
      lengthReducer(0, { type: types.SET_LENGTH, length: passedLength })
    ).toBe(passedLength)
  })
})
