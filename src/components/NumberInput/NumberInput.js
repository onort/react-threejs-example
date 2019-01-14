import React from "react"
import PropTypes from "prop-types"

import styles from "./NumberInput.css"

const NumberInput = props => {
  const { currentValue, max, min, onChange, onDecrease, onIncrease } = props
  const numberValue = currentValue !== null ? currentValue : ""
  return (
    <div
      className={`${styles.container} ${
        props.className ? props.className : ""
      }`}
    >
      <input
        className={styles.numberInput}
        onChange={onChange}
        type="number"
        value={numberValue}
      />
      <div className={styles.counter}>
        <span className={styles.increase} onClick={onIncrease}>
          &#43;
        </span>
        <span className={styles.decrease} onClick={onDecrease}>
          &#8722;
        </span>
      </div>
      {max && min && (
        <span className={styles.rangeLimits}>
          ({min} - {max})
        </span>
      )}
    </div>
  )
}

NumberInput.propTypes = {
  className: PropTypes.string,
  currentValue: PropTypes.number,
  max: PropTypes.number,
  min: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
  onIncrease: PropTypes.func.isRequired
}

NumberInput.defaultProps = {
  currentValue: 0
}

export default NumberInput
