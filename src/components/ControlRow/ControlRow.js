import React from "react"
import PropTypes from "prop-types"

import styles from "./ControlRow.css"

const ControlRow = props => {
  return (
    <div className={styles.row}>
      <span className={styles.label}>{props.label}</span>
      <div className={styles.container}>{props.children}</div>
    </div>
  )
}

ControlRow.proptypes = {
  label: PropTypes.string.isRequired
}

export default ControlRow
