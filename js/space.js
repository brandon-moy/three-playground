import * as THREE from 'three';
// Always need a scene, camera, and renderer

// allows us to move around scene with the mouse
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

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
  color: 0xff8347,
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
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper);

const controls = new OrbitControls(camera, renderer.domElement);

// function to create random star background
function addStar() {
  // creates a new sphere shape
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  // gives it a solid material, color white, that allows color to shine off of it
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  // creates a mesh of the shape and material to create the star
  const star = new THREE.Mesh(geometry, material);
  // randomly generate xyz positions for each star and map them with the random spread function from threejs
  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));
  // sets the position of the star
  star.position.set(x, y, z);
  // adds the star to the scene
  scene.add(star);
}

Array(200).fill().forEach(addStar);

// takes an image and create a texture to apply to the background
// const spaceTexture = new THREE.TextureLoader().load('/images/space.png');
// scene.background = spaceTexture;

// texture mapping
// const bopsTexture = new THREE.TextureLoader().load('/images/bops.jpg');

// // creates a new mesh
// const bops = new THREE.Mesh(
//   // mesh is a box
//   new THREE.BoxGeometry(3, 3, 3),
//   // maps the texture to each of the box faces
//   new THREE.MeshBasicMaterial({ map: bopsTexture }),
// );

// scene.add(bops);

// const moonTexture = new THREE.TextureLoader().load('/images/moon.webp');

// const moon = new THREE.Mesh(
//   new THREE.SphereGeometry(3, 32, 32),
//   new THREE.MeshStandardMaterial({
//     map: moonTexture,
//   }),
// );

// scene.add(moon);
// recursive function that rerenders the screen when we want to animate something
function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  controls.update();

  renderer.render(scene, camera);
}

animate();
