import React from "react"
import { shallow } from "enzyme"

import RangeSlider from "../"

describe("<RangeSlider />", () => {
  it("should match snapshot", () => {
    const fn = jest.fn()
    const wrapper = shallow(
      <RangeSlider onDrag={fn} rangeMax={10} rangeMin={0} />
    )
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it("should fire onDrag function when a change occurs", () => {
    const onDrag = jest.fn()
    const wrapper = shallow(
      <RangeSlider onDrag={onDrag} rangeMax={10} rangeMin={0} />
    )
    wrapper.find("input").simulate("change")
    expect(onDrag).toBeCalledTimes(1)
  })

  it("should be able to have a custom className", () => {
    const testClassName = "testClassName"
    const fn = jest.fn()
    const wrapper = shallow(
      <RangeSlider
        className={testClassName}
        onDrag={fn}
        rangeMax={10}
        rangeMin={0}
      />
    )
    expect(wrapper.find(`.${testClassName}`).exists()).toBe(true)
  })
})
