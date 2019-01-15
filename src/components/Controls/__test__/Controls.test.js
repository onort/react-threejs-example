import React from "react"
import { mount } from "enzyme"
import { Provider } from "react-redux"
import configureStore from "redux-mock-store"

import Controls from "../"
import { Toggle, NumberInput } from "../../"
import { types } from "../../../redux/actions"

describe("<Controls />", () => {
  const mockStore = configureStore()
  const initialState = { length: 25, rotation: true }
  let wrapper
  let store

  beforeEach(() => {
    store = mockStore(initialState)
    wrapper = mount(
      <Provider store={store}>
        <Controls />
      </Provider>
    )
  })

  afterEach(() => {
    store = null
    wrapper.unmount()
  })

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it("should toggle auto-rotation", () => {
    const expectedAction = { type: types.TOGGLE_AUTO_ROTATION }
    wrapper
      .find(Toggle)
      .props()
      .onToggle()
    expect(store.getActions()).toEqual([expectedAction])
  })

  it("should set length", () => {
    const expectedAction = { type: types.SET_LENGTH, length: 20 }
    const changeEvent = { target: { value: 20 } }
    wrapper
      .find(NumberInput)
      .props()
      .onChange(changeEvent)
    expect(store.getActions()).toEqual([expectedAction])
  })

  it("should increment side length", () => {
    const expectedAction = { type: types.INCREASE_LENGTH }
    wrapper
      .find(NumberInput)
      .props()
      .onIncrease()
    expect(store.getActions()).toEqual([expectedAction])
  })

  it("should decrement side length", () => {
    const expectedAction = { type: types.DECREASE_LENGTH }
    wrapper
      .find(NumberInput)
      .props()
      .onDecrease()
    expect(store.getActions()).toEqual([expectedAction])
  })
})
