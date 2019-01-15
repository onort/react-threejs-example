import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import styles from "./Controls.css"
import { decreaseLength, increaseLength, setLength } from "../../redux/actions"
import { ControlRow, NumberInput, RangeSlider } from "../"

class Controls extends Component {
  max = 50
  min = 1

  handleDecrease = () =>
    this.props.length > this.min ? this.props.decrease() : null

  handleIncrease = () =>
    this.props.length < this.max ? this.props.increase() : null

  handleInputChange = e => {
    const newLength = e.target.value
    if (newLength > this.max) {
      this.props.setLength(this.max)
      return
    }
    this.props.setLength(parseInt(newLength, 10))
  }

  handleSizeDrag = e => this.props.setLength(+e.target.value)

  render() {
    const { length } = this.props
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Controls</h2>
        <ControlRow label="Side Length">
          <RangeSlider
            className={styles.sizeSlider}
            currentValue={length}
            onDrag={this.handleSizeDrag}
            rangeMax={this.max}
            rangeMin={this.min}
          />
          <NumberInput
            className={styles.sizeNumberInput}
            currentValue={length}
            max={this.max}
            min={this.min}
            onChange={this.handleInputChange}
            onDecrease={this.handleDecrease}
            onIncrease={this.handleIncrease}
          />
        </ControlRow>
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
  length: PropTypes.number,
  setLength: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls)
