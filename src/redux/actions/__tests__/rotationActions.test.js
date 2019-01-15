import { toggleAutoRotation, types } from "../"

describe("lengthActions", () => {
  it("should create toggle auto rotation action", () => {
    const expectedAction = { type: types.TOGGLE_AUTO_ROTATION }
    expect(toggleAutoRotation()).toEqual(expectedAction)
  })
})
