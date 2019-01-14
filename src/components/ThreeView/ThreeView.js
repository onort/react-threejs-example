import React, { Component } from "react"
import * as THREE from "three"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import styles from "./ThreeView.css"

class ThreeView extends Component {
  state = { rotating: false }
  scene = null
  camera = null
  renderer = new THREE.WebGLRenderer({ antialias: true })
  threeContainer = new React.createRef()
  container = new React.createRef()
  cube = null

  componentDidMount() {
    const containerWidth = this.container.current.offsetWidth
    const containerHeight = this.container.current.offsetHeight
    const aspectRatio = containerWidth / containerHeight
    const sideLength = this.props.length || 1
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(75, aspectRatio, 1, 1000)
    this.camera.position.z = 60
    this.renderer.setClearColor("#e8e8e8")
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(containerWidth, containerHeight)
    this.threeContainer.current.appendChild(this.renderer.domElement)
    const geometry = new THREE.BoxGeometry(sideLength, sideLength, sideLength)
    const material = new THREE.MeshBasicMaterial({
      color: "#159eee",
      wireframe: true
    })
    this.cube = new THREE.Mesh(geometry, material)
    this.scene.add(this.cube)
    this.renderer.render(this.scene, this.camera)
  }

  shouldComponentUpdate(nextProps) {
    const sideLength = nextProps.length
    if (sideLength !== this.props.length) {
      this.cube.scale.set(sideLength, sideLength, sideLength)
      this.renderer.render(this.scene, this.camera)
      return false
    }
  }

  componentWillUnmount() {
    this.threeContainer.current.removeChild(this.renderer.domElement)
  }

  render() {
    return (
      <div className={styles.container} ref={this.container}>
        <div className={styles.threeContainer} ref={this.threeContainer} />
      </div>
    )
  }
}

const mapStateToProps = ({ length }) => ({ length })

ThreeView.proptypes = {
  length: PropTypes.number
}

export default connect(mapStateToProps)(ThreeView)

/*
TO CONSIDER: Using OrthographicCamera

OrthographicCamera
Camera that uses orthographic projection.

In this projection mode, an object's size in the rendered image stays constant regardless of its distance from the camera.

This can be useful for rendering 2D scenes and UI elements, amongst other things.

const left = (-aspectRatio * containerHeight) / 2
const right = (aspectRatio * containerHeight) / 2
const top = containerHeight / 2
const bottom = -containerHeight / 2
const near = -1000
const far = 1000
this.camera = new THREE.OrthographicCamera(
  left,
  right,
  top,
  bottom,
  near,
  far
)
*/