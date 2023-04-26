import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
const controls = new OrbitControls(camera, renderer.domElement);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 25, -25);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper);

renderer.render(scene, camera);

const loader = new GLTFLoader();
loader.load(
  '../images/sword.gltf',
  (gltf) => {
    const sword = gltf.scene;
    sword.rotation.y = Math.PI / 8;
    sword.position.y = 3;
    sword.scale.set(10, 10, 10);
    scene.add(sword);
  },
  undefined,
  (error) => {
    console.error(error);
  },
);

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();
