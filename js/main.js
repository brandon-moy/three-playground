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

scene.add(sun);

const mercuryScene = new THREE.Object3D();
mercuryScene.add(mercury);
scene.add(mercuryScene);
mercury.position.x = 28;

const venusScene = new THREE.Object3D();
venusScene.add(venus);
scene.add(venusScene);
venus.position.x = 44;

const earthScene = new THREE.Object3D();
earthScene.add(earth);
scene.add(earthScene);
earth.position.x = 62;

const marsScene = new THREE.Object3D();
marsScene.add(mars);
scene.add(marsScene);
mars.position.x = 78;

const jupiterScene = new THREE.Object3D();
jupiterScene.add(jupiter);
scene.add(jupiterScene);
jupiter.position.x = 100;

const saturnScene = new THREE.Object3D();
saturnScene.add(saturn);
scene.add(saturnScene);
saturn.position.x = 138;

const uranusScene = new THREE.Object3D();
uranusScene.add(uranus);
scene.add(uranusScene);
uranus.position.x = 176;

const neptuneScene = new THREE.Object3D();
neptuneScene.add(neptune);
scene.add(neptuneScene);
neptune.position.x = 200;

const plutoScene = new THREE.Object3D();
plutoScene.add(pluto);
scene.add(plutoScene);
pluto.position.x = 216;

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
