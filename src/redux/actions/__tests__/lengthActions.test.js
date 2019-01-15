import { decreaseLength, increaseLength, setLength, types } from "../"

describe("lengthActions", () => {
  it("should create a descrease action", () => {
    const expectedAction = { type: types.DECREASE_LENGTH }
    expect(decreaseLength()).toEqual(expectedAction)
  })

  it("should create an increase anction", () => {
    const expectedAction = { type: types.INCREASE_LENGTH }
    expect(increaseLength()).toEqual(expectedAction)
  })

  it("should create a set length action", () => {
    const expectedAction = { type: types.SET_LENGTH, length: 10 }
    expect(setLength(10)).toEqual(expectedAction)
  })
})
