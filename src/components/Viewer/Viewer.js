import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import styles from "./Viewer.css"

class Viewer extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h2>Viewer</h2>
        <p>Side length is: {this.props.length}</p>
      </div>
    )
  }
}

const mapStateToProps = ({ length }) => ({ length })

Viewer.propTypes = {
  length: PropTypes.number.isRequired
}

export default connect(mapStateToProps)(Viewer)
