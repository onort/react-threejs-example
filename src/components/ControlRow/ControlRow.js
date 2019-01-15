import React from "react"
import PropTypes from "prop-types"

import styles from "./ControlRow.css"

const ControlRow = props => {
  return (
    <div className={`${styles.row} ${props.inline ? styles.inline : ""}`}>
      <span className={styles.label}>{props.label}</span>
      <div className={styles.container}>{props.children}</div>
    </div>
  )
}

ControlRow.proptypes = {
  inline: PropTypes.bool,
  label: PropTypes.string.isRequired
}

ControlRow.defaultProps = {
  inline: false
}

export default ControlRow
