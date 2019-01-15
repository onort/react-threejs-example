import React from "react"
import { shallow } from "enzyme"

import ControlRow from "../"

const testLabel = "testLabel"

describe("<ControlRow />", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<ControlRow label={testLabel} />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it("should render label", () => {
    const wrapper = shallow(<ControlRow label={testLabel} />)
    expect(wrapper.find(".label").exists()).toBe(true)
    expect(wrapper.find(".label").text()).toBe(testLabel)
  })
})
