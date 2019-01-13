import React from "react"

import styles from "./App.css"
import { Controls, Viewer } from "./components"

const App = () => {
  return (
    <div className={styles.container}>
      <Viewer />
      <Controls />
    </div>
  )
}

export default App
