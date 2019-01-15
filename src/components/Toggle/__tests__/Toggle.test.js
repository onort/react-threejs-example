import React from "react"
import { shallow } from "enzyme"

import Toggle from "../"

describe("<Toggle />", () => {
  it("should match snaphot", () => {
    const fn = jest.fn()
    const wrapper = shallow(<Toggle onToggle={fn} checked={false} />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it("should fire onChange event if a change occurs", () => {
    const onToggle = jest.fn()
    const changeEvent = { target: { checked: true } }
    const wrapper = shallow(<Toggle onToggle={onToggle} checked={false} />)
    wrapper.find("input").simulate("change", changeEvent)
    expect(onToggle).toBeCalledTimes(1)
    expect(onToggle).toBeCalledWith(changeEvent)
  })
})
