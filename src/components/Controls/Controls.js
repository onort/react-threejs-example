import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import styles from "./Controls.css"
import { decreaseLength, increaseLength, setLength } from "../../redux/actions"
import { NumberInput } from "../"

class Controls extends Component {
  handleDecrease = () => this.props.decrease()

  handleIncrease = () => this.props.increase()

  handleInputChange = e => this.props.setLength(parseInt(e.target.value, 10))

  render() {
    const { length } = this.props
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Controls</h2>
        <NumberInput
          currentValue={length}
          onChange={this.handleInputChange}
          onDecrease={this.handleDecrease}
          onIncrease={this.handleIncrease}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ length }) => ({
  length
})

const mapDispatchToProps = dispatch => ({
  decrease: () => dispatch(decreaseLength()),
  increase: () => dispatch(increaseLength()),
  setLength: length => dispatch(setLength(length))
})

Controls.propTypes = {
  decrease: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
  setLength: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls)
