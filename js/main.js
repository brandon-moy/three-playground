import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

const pointLight = new THREE.PointLight(0xffffff, 1.1, 175);
pointLight.position.set(10, 75, 100);
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

const controls = new OrbitControls(camera, renderer.domElement);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.set(-30, 60, 150);
renderer.render(scene, camera);

const greyTexture = new THREE.TextureLoader().load('../images/head.png');
const faceTexture = new THREE.TextureLoader().load('../images/face.png');
const bodyTexture = new THREE.TextureLoader().load('../images/body.png');

const face = [
  new THREE.MeshStandardMaterial({ map: greyTexture }),
  new THREE.MeshStandardMaterial({ map: faceTexture }),
  new THREE.MeshStandardMaterial({ map: greyTexture }),
  new THREE.MeshStandardMaterial({ map: greyTexture }),
  new THREE.MeshStandardMaterial({ map: greyTexture }),
  new THREE.MeshStandardMaterial({ map: greyTexture }),
];

const bodyDisplay = [
  new THREE.MeshStandardMaterial({ map: greyTexture }),
  new THREE.MeshStandardMaterial({ map: greyTexture }),
  new THREE.MeshStandardMaterial({ map: greyTexture }),
  new THREE.MeshStandardMaterial({ map: greyTexture }),
  new THREE.MeshStandardMaterial({ map: bodyTexture }),
  new THREE.MeshStandardMaterial({ map: greyTexture }),
];

const head = new THREE.Mesh(new THREE.BoxGeometry(8, 8, 12), face);
head.position.set(0, 40, 0);
head.rotateY(-5);

const neck = new THREE.Mesh(
  new THREE.BoxGeometry(4, 4, 4),
  new THREE.MeshStandardMaterial({ map: greyTexture }),
);
neck.position.set(0, 35, 0);

const body = new THREE.Mesh(new THREE.BoxGeometry(16, 20, 10), bodyDisplay);
body.position.set(0, 25, 0);

const leftArm = new THREE.Mesh(
  new THREE.BoxGeometry(6, 15, 6),
  new THREE.MeshStandardMaterial({ map: greyTexture }),
);
leftArm.position.set(-11, 28, 3);
leftArm.rotateX(-0.75);

const rightArm = new THREE.Mesh(
  new THREE.BoxGeometry(6, 15, 6),
  new THREE.MeshStandardMaterial({ map: greyTexture }),
);
rightArm.position.set(11, 28, 3);
rightArm.rotateX(-0.75);

const leftLeg = new THREE.Mesh(
  new THREE.BoxGeometry(6, 15, 7),
  new THREE.MeshStandardMaterial({ map: greyTexture }),
);
leftLeg.position.set(-5, 9, 1);
leftLeg.rotateX(50);

const rightLeg = new THREE.Mesh(
  new THREE.BoxGeometry(6, 15, 7),
  new THREE.MeshStandardMaterial({ map: greyTexture }),
);
rightLeg.position.set(5, 9, -1);
rightLeg.rotateX(-50);

scene.add(head, neck, body, leftArm, rightArm, leftLeg, rightLeg);

let counter = 0;
function moveRobot() {
  if (counter < 100) {
    head.rotateY(0.005);

    leftArm.rotateX(-0.005);
    leftArm.position.y += 0.01;
    leftArm.position.z += 0.01;

    rightArm.rotateX(0.005);
    rightArm.position.y -= 0.01;
    rightArm.position.z -= 0.01;

    leftLeg.rotateX(0.005);
    leftLeg.position.y -= 0.01;
    leftLeg.position.z -= 0.03;

    rightLeg.rotateX(-0.005);
    rightLeg.position.y += 0.01;
    rightLeg.position.z += 0.03;
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

    rightLeg.rotateX(0.005);
    rightLeg.position.y -= 0.01;
    rightLeg.position.z -= 0.03;

    leftLeg.rotateX(-0.005);
    leftLeg.position.y += 0.01;
    leftLeg.position.z += 0.03;
    counter++;
  }
  console.log(counter);
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  moveRobot();
  renderer.render(scene, camera);
}

animate();
