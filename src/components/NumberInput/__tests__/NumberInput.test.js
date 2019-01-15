import React from "react"
import { shallow } from "enzyme"

import NumberInput from "../"

describe("<NumberInput />", () => {
  it("should match snapshot", () => {
    const fn = jest.fn()
    const wrapper = shallow(
      <NumberInput
        currentValue={1}
        max={5}
        min={1}
        onChange={fn}
        onDecrease={fn}
        onIncrease={fn}
      />
    )
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it("should fire onChange event if input is changed", () => {
    const fn = jest.fn()
    const onChange = jest.fn()
    const changeEvent = { target: { value: 2 } }
    const wrapper = shallow(
      <NumberInput
        currentValue={1}
        max={5}
        min={1}
        onChange={onChange}
        onDecrease={fn}
        onIncrease={fn}
      />
    )
    wrapper.find("input").simulate("change", changeEvent)
    expect(onChange).toBeCalledTimes(1)
    expect(onChange).toBeCalledWith(changeEvent)
  })

  it("should fire onDecrease event if decrease button is clicked", () => {
    const fn = jest.fn()
    const onDecrease = jest.fn()
    const wrapper = shallow(
      <NumberInput
        currentValue={1}
        max={5}
        min={1}
        onChange={fn}
        onDecrease={onDecrease}
        onIncrease={fn}
      />
    )
    wrapper.find(".decrease").simulate("click")
    wrapper.find(".decrease").simulate("click")
    wrapper.find(".decrease").simulate("click")
    expect(onDecrease).toBeCalledTimes(3)
  })

  it("should fire onIncrease event if increase button is clicked", () => {
    const fn = jest.fn()
    const onIncrease = jest.fn()
    const wrapper = shallow(
      <NumberInput
        currentValue={1}
        max={5}
        min={1}
        onChange={fn}
        onDecrease={fn}
        onIncrease={onIncrease}
      />
    )
    wrapper.find(".increase").simulate("click")
    wrapper.find(".increase").simulate("click")
    expect(onIncrease).toBeCalledTimes(2)
  })

  it("should render min-max range if provided", () => {
    const fn = jest.fn()
    const max = 10
    const min = 0
    const wrapper = shallow(
      <NumberInput
        currentValue={1}
        max={max}
        min={min}
        onChange={fn}
        onDecrease={fn}
        onIncrease={fn}
      />
    )
    expect(wrapper.find(".rangeLimits").exists()).toBe(true)
    expect(wrapper.find(".rangeLimits").text()).toBe(`(${min} - ${max})`)
  })

  it("should have a custom className", () => {
    const testClassName = "testClassName"
    const fn = jest.fn()
    const wrapper = shallow(
      <NumberInput
        className={testClassName}
        currentValue={1}
        max={5}
        min={1}
        onChange={fn}
        onDecrease={fn}
        onIncrease={fn}
      />
    )
    expect(wrapper.find(`.${testClassName}`).exists()).toBe(true)
  })
})
