import React from "react"
import PropTypes from "prop-types"

import styles from "./RangeSlider.css"

const RangeSlider = props => {
  const { currentValue, onDrag, rangeMax, rangeMin } = props
  const rangeValue = currentValue !== null ? currentValue : 0
  return (
    <div
      className={`${styles.container} ${
        props.className ? props.className : ""
      }`}
    >
      <input
        type="range"
        min={rangeMin}
        max={rangeMax}
        value={rangeValue}
        className={styles.slider}
        onChange={onDrag}
      />
    </div>
  )
}

RangeSlider.propTypes = {
  className: PropTypes.string,
  currentValue: PropTypes.number,
  onDrag: PropTypes.func.isRequired,
  rangeMax: PropTypes.number.isRequired,
  rangeMin: PropTypes.number.isRequired
}

RangeSlider.defaultProps = {
  currentValue: 0,
  rangeMin: 0
}

export default RangeSlider
