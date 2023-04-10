import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { sun, mercury } from '../components';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.set(-0, 140, 140);

renderer.render(scene, camera);

const pointLight = new THREE.PointLight(0xffffff, 1.25, 300);
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

const controls = new OrbitControls(camera, renderer.domElement);

scene.add(sun);

const mercuryScene = new THREE.Object3D();
mercuryScene.add(mercury);
scene.add(mercuryScene);
mercury.position.x = 28;

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  sun.rotation.y += 0.001;
  mercury.rotation.y += 0.001;
  mercuryScene.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();
