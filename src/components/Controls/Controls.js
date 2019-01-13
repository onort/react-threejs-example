import React, { Component } from "react"

import styles from "./Controls.css"
import { NumberInput } from "../"

class Controls extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Controls</h2>
        <NumberInput />
      </div>
    )
  }
}

export default Controls
