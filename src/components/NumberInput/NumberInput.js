import React from "react"

import styles from "./NumberInput.css"

const NumberInput = () => {
  return (
    <React.Fragment>
      <span className={styles.label}>Side Length</span>
      <div className={styles.container}>
        <input className={styles.numberInput} type="number" />
        <div className={styles.counter}>
          <span className={styles.increase}>&#43;</span>
          <span className={styles.decrease}>&#8722;</span>
        </div>
      </div>
    </React.Fragment>
  )
}

export default NumberInput
