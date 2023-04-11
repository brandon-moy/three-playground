import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

const pointLight = new THREE.PointLight(0xffffff, 2, 300);
const ambientLight = new THREE.AmbientLight(0xffffff);
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(pointLight, ambientLight, gridHelper);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

const controls = new OrbitControls(camera, renderer.domElement);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.set(-30, 60, 150);
renderer.render(scene, camera);

const face = [
  new THREE.MeshBasicMaterial({ color: 0xd8d8d8 }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('../images/face.png'),
  }),
  new THREE.MeshBasicMaterial({ color: 0xd8d8d8 }),
  new THREE.MeshBasicMaterial({ color: 0xd8d8d8 }),
  new THREE.MeshBasicMaterial({ color: 0xd8d8d8 }),
  new THREE.MeshBasicMaterial({ color: 0xd8d8d8 }),
];

const head = new THREE.Mesh(new THREE.BoxGeometry(8, 8, 8), face);
head.position.set(0, 40, 0);
head.rotateY(-5);

const neck = new THREE.Mesh(
  new THREE.BoxGeometry(4, 4, 4),
  new THREE.MeshBasicMaterial({ color: 0xf8f8f8 }),
);
neck.position.set(0, 35, 0);

const body = new THREE.Mesh(
  new THREE.BoxGeometry(16, 20, 10),
  new THREE.MeshBasicMaterial({ color: 0xd4d4d4 }),
);
body.position.set(0, 25, 0);

const leftJoint = new THREE.Mesh(
  new THREE.BoxGeometry(4, 4, 4),
  new THREE.MeshBasicMaterial({ color: 0xf8f8f8 }),
);
leftJoint.position.set(-9, 32, 0);

const rightJoint = new THREE.Mesh(
  new THREE.BoxGeometry(4, 4, 4),
  new THREE.MeshBasicMaterial({ color: 0xf8f8f8 }),
);
rightJoint.position.set(9, 32, 0);

const leftArm = new THREE.Mesh(
  new THREE.BoxGeometry(6, 15, 6),
  new THREE.MeshBasicMaterial({ color: 0xd4d4d4 }),
);
leftArm.position.set(-12, 29, 3);
leftArm.rotateX(-0.75);

const rightArm = new THREE.Mesh(
  new THREE.BoxGeometry(6, 15, 6),
  new THREE.MeshBasicMaterial({ color: 0xd4d4d4 }),
);
rightArm.position.set(12, 29, 3);
rightArm.rotateX(-0.75);

scene.add(head, neck, body, leftJoint, rightJoint, leftArm, rightArm);

let counter = 0;
function shakeHead() {
  if (counter < 100) {
    head.rotateY(0.005);
    leftArm.rotateX(-0.005);
    leftArm.position.y += 0.01;
    leftArm.position.z += 0.01;
    rightArm.rotateX(0.005);
    rightArm.position.y -= 0.01;
    rightArm.position.z -= 0.01;
    counter++;
  } else if (counter > 200) {
    counter = 0;
  } else {
    head.rotateY(-0.005);
    leftArm.rotateX(0.005);
    leftArm.position.y -= 0.01;
    leftArm.position.z -= 0.01;
    rightArm.rotateX(-0.005);
    rightArm.position.y += 0.01;
    rightArm.position.z += 0.01;
    counter++;
  }
  console.log(counter);
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  shakeHead();
  renderer.render(scene, camera);
}

animate();
