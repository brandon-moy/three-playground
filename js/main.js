import * as THREE from 'three';
// Always need a scene, camera, and renderer

// Scene - container that holds objects, cameras, and bytes
const scene = new THREE.Scene();

// used to view the scene - mimics what human eyes see
// field of view (off 360deg)
// aspect-ratio
// view-frustrum - controls what is visible relative to the camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

// renders the graphics to see
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

// x,y,z points to make a shape
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
// material is the type of wrapper
// basic material does not require lightsource but standard material does
const material = new THREE.MeshStandardMaterial({
  color: 0xff6347,
});
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

// created a light at a specific point
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

// ambient light is light for the entire area
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// light helper - shows position of a point light
const lightHelper = new THREE.PointLightHelper(pointLight);
// grid helper - shows the grid of the scene
const gridHelper = new THREE.GridHelper();
scene.add(lightHelper, gridHelper);
// recursive function that rerenders the screen when we want to animate something
function animate() {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;
  renderer.render(scene, camera);
}

animate();
