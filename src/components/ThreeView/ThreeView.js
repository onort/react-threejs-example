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
  frameId = null

  componentDidMount() {
    const containerWidth = this.container.current.offsetWidth
    const containerHeight = this.container.current.offsetHeight
    const aspectRatio = containerWidth / containerHeight
    const initialSideLength = this.props.length
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(75, aspectRatio, 1, 1000)
    this.camera.position.z = 60
    this.renderer.setClearColor("#f2f2f2")
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(containerWidth, containerHeight)
    this.threeContainer.current.appendChild(this.renderer.domElement)
    const geometry = new THREE.BoxGeometry(1, 1, 1, 10, 10, 10)
    const material = new THREE.MeshBasicMaterial({
      color: "#159eee",
      wireframe: true
    })
    this.cube = new THREE.Mesh(geometry, material)
    this.cube.scale.set(initialSideLength, initialSideLength, initialSideLength)
    this.scene.add(this.cube)
    this.renderScene()
    this.startAutoRotation()
    window.addEventListener("resize", this.handleResize)
  }

  shouldComponentUpdate(nextProps) {
    let sideLength = nextProps.length
    if (sideLength !== this.props.length) {
      sideLength = sideLength > 0 ? sideLength : 1
      this.cube.scale.set(sideLength, sideLength, sideLength)
      this.renderScene()
      return false
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize)
    this.stopAutoRotation()
    this.threeContainer.current.removeChild(this.renderer.domElement)
  }

  handleResize = () => {
    setTimeout(() => {
      let containerWidth = this.container.current.offsetWidth
      let containerHeight = this.container.current.offsetHeight
      this.renderer.setSize(containerWidth, containerHeight)
      this.camera.aspect = containerWidth / containerHeight
      this.camera.updateProjectionMatrix()
      this.renderScene()
    }, 1)
  }

  startAutoRotation = () => {
    this.cube.rotation.x += 0.0005
    this.cube.rotation.y += 0.001
    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.startAutoRotation)
  }

  stopAutoRotation = () => window.cancelAnimationFrame(this.frameId)

  renderScene = () => this.renderer.render(this.scene, this.camera)

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
