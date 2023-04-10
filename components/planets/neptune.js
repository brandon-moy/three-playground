import * as THREE from 'three';

const neptuneTexture = new THREE.TextureLoader().load(
  '../images/planets/neptune.jpg',
);

const neptune = new THREE.Mesh(
  new THREE.SphereGeometry(7, 30, 30),
  new THREE.MeshStandardMaterial({ map: neptuneTexture }),
);

export default neptune;
