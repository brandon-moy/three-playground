import * as THREE from 'three';

const earthTexture = new THREE.TextureLoader().load(
  '../images/planets/earth.jpg',
);

const earth = new THREE.Mesh(
  new THREE.SphereGeometry(6, 30, 30),
  new THREE.MeshStandardMaterial({ map: earthTexture }),
);

export default earth;
