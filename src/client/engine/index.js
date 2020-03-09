import * as THREE from 'three'

let camera, scene, renderer
let geometry, material, mesh

let mouse, raycaster
let isHovering = false

function init() {
  raycaster = new THREE.Raycaster()
  mouse = new THREE.Vector2()

  camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.01,
    10
  )
  camera.position.z = 1

  scene = new THREE.Scene()
  scene.background = new THREE.Color('#ffffff')

  geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
  material = new THREE.MeshNormalMaterial()

  mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)

  document.body.appendChild(renderer.domElement)
}

function update() {
  raycaster.setFromCamera(mouse, camera)

  // calculate objects intersecting the picking ray
  var intersects = raycaster.intersectObjects(scene.children)

  if (intersects.length) {
    if (!isHovering) {
      isHovering = true
      document.body.style.cursor = 'pointer'
    }
  } else {
    if (isHovering) {
      document.body.style.cursor = 'default'
      isHovering = false
    }

    mesh.rotation.x += 0.01
    mesh.rotation.y += 0.02
  }

  renderer.render(scene, camera)
}

function animate() {
  requestAnimationFrame(animate)
  update()
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()

  renderer.setSize(window.innerWidth, window.innerHeight)
}

function onMouseMove(event) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
}

export function renderScene() {
  init()
  animate()

  window.addEventListener('mousemove', onMouseMove, false)
  window.addEventListener('resize', onWindowResize, false)
}
