import React from "react"
import PropTypes from "prop-types"

import styles from "./Toggle.css"

const Toggle = props => {
  const { checked, onToggle } = props
  return (
    <div className={styles.container}>
      <label className={styles.switch}>
        <input type="checkbox" defaultChecked={checked} onChange={onToggle} />
        <span className={styles.slider} />
      </label>
    </div>
  )
}

Toggle.proptypes = {
  checked: PropTypes.bool,
  onToggle: PropTypes.func.isRequired
}

Toggle.defaultProps = {
  checked: false
}

export default Toggle
