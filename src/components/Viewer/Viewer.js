import React, { Component } from "react"

import styles from "./Viewer.css"
import { ThreeView } from "../"

class Viewer extends Component {
  render() {
    return (
      <div className={styles.container}>
        <ThreeView />
      </div>
    )
  }
}

export default Viewer
