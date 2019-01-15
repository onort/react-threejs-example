import React, { Component } from "react"
import * as THREE from "three"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import styles from "./ThreeView.css"

class ThreeView extends Component {
  camera = null
  container = new React.createRef()
  cube = null
  frameId = null
  renderer = new THREE.WebGLRenderer({ antialias: true })
  scene = new THREE.Scene()
  threeContainer = new React.createRef()

  componentDidMount() {
    const containerWidth = this.container.current.offsetWidth
    const containerHeight = this.container.current.offsetHeight
    const aspectRatio = containerWidth / containerHeight
    const initialSideLength = this.props.length
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
    }
    if (nextProps.rotation !== this.props.rotation) {
      nextProps.rotation ? this.startAutoRotation() : this.stopAutoRotation()
    }
    return false
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

  animate = () => {
    this.cube.rotation.x += 0.0005
    this.cube.rotation.y += 0.001
    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)
  }

  startAutoRotation = () =>
    (this.frameId = window.requestAnimationFrame(this.animate))

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

const mapStateToProps = ({ length, rotation }) => ({ length, rotation })

ThreeView.proptypes = {
  length: PropTypes.number,
  rotation: PropTypes.bool
}

export default connect(mapStateToProps)(ThreeView)
