import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import {
  sun,
  mercury,
  venus,
  earth,
  mars,
  jupiter,
  saturn,
  uranus,
  neptune,
  pluto,
} from '../components';

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

const pointLight = new THREE.PointLight(0xffffff, 2, 300);
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);
  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(1000));
  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);

scene.add(sun);

const mercuryScene = new THREE.Object3D();
mercuryScene.add(mercury);
scene.add(mercuryScene);
mercury.position.x = 28;

const venusScene = new THREE.Object3D();
venusScene.add(venus);
scene.add(venusScene);
venus.position.x = 44;
venusScene.rotation.y = -100;

const earthScene = new THREE.Object3D();
earthScene.add(earth);
scene.add(earthScene);
earth.position.x = 62;
earthScene.rotation.y = 62;

const marsScene = new THREE.Object3D();
marsScene.add(mars);
scene.add(marsScene);
mars.position.x = 78;
marsScene.rotation.y = -200;

const jupiterScene = new THREE.Object3D();
jupiterScene.add(jupiter);
scene.add(jupiterScene);
jupiter.position.x = 100;
jupiterScene.rotation.y = -400;

const saturnScene = new THREE.Object3D();
const saturnRingTexture = new THREE.TextureLoader().load(
  '../images/planets/saturn-ring.png',
);
const saturnRing = new THREE.Mesh(
  new THREE.RingGeometry(10, 20, 32),
  new THREE.MeshBasicMaterial({
    map: saturnRingTexture,
    side: THREE.DoubleSide,
  }),
);
saturnScene.add(saturn, saturnRing);
scene.add(saturnScene);
saturn.position.x = 138;
saturnRing.position.x = 138;
saturnRing.rotation.x = -0.5 * Math.PI;
saturnScene.rotation.y = 400;

const uranusScene = new THREE.Object3D();
const uranusRingTexture = new THREE.TextureLoader().load(
  '../images/planets/uranus-ring.png',
);
const uranusRing = new THREE.Mesh(
  new THREE.RingGeometry(7, 12, 32),
  new THREE.MeshBasicMaterial({
    map: uranusRingTexture,
    side: THREE.DoubleSide,
  }),
);
uranusScene.add(uranus, uranusRing);
scene.add(uranusScene);
uranus.position.x = 176;
uranusRing.position.x = 176;
uranusRing.rotation.x = -0.5 * Math.PI;
uranusScene.rotation.y = -500;

const neptuneScene = new THREE.Object3D();
neptuneScene.add(neptune);
scene.add(neptuneScene);
neptune.position.x = 200;

const plutoScene = new THREE.Object3D();
plutoScene.add(pluto);
scene.add(plutoScene);
pluto.position.x = 216;
plutoScene.rotation.y = 800;

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  sun.rotation.y += 0.005;
  mercury.rotation.y += 0.004;
  venus.rotation.y += 0.004;
  earth.rotation.y += 0.004;
  mars.rotation.y += 0.004;
  jupiter.rotation.y += 0.004;
  saturn.rotation.y += 0.004;
  uranus.rotation.y += 0.004;
  neptune.rotation.y += 0.004;
  pluto.rotation.y += 0.008;

  mercuryScene.rotation.y += 0.04;
  venusScene.rotation.y += 0.015;
  earthScene.rotation.y += 0.01;
  marsScene.rotation.y += 0.008;
  jupiterScene.rotation.y += 0.002;
  saturnScene.rotation.y += 0.0009;
  uranusScene.rotation.y += 0.0004;
  neptuneScene.rotation.y += 0.0001;
  plutoScene.rotation.y += 0.00007;

  renderer.render(scene, camera);
}

animate();
