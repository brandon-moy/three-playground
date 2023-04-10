import * as THREE from 'three';

const marsTexture = new THREE.TextureLoader().load(
  '../images/planets/mars.jpg',
);

const mars = new THREE.Mesh(
  new THREE.SphereGeometry(6, 64, 64),
  new THREE.MeshStandardMaterial({ map: marsTexture }),
);

export default mars;
