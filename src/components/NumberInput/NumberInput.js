import React from "react"
import Proptypes from "prop-types"

import styles from "./NumberInput.css"

const NumberInput = props => {
  const { currentValue, onChange, onDecrease, onIncrease } = props
  return (
    <React.Fragment>
      <span className={styles.label}>Side Length</span>
      <div className={styles.container}>
        <input
          className={styles.numberInput}
          onChange={onChange}
          type="number"
          value={currentValue}
        />
        <div className={styles.counter}>
          <span className={styles.increase} onClick={onIncrease}>
            &#43;
          </span>
          <span className={styles.decrease} onClick={onDecrease}>
            &#8722;
          </span>
        </div>
      </div>
    </React.Fragment>
  )
}

NumberInput.propTypes = {
  currentValue: Proptypes.number.isRequired,
  onChange: Proptypes.func.isRequired,
  onDecrease: Proptypes.func.isRequired,
  onIncrease: Proptypes.func.isRequired
}

NumberInput.defaultProps = {
  currentValue: 0
}

export default NumberInput
