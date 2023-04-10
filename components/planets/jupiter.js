import * as THREE from 'three';

const jupiterTexture = new THREE.TextureLoader().load(
  '../images/planets/jupiter.jpg',
);

const jupiter = new THREE.Mesh(
  new THREE.SphereGeometry(6, 64, 64),
  new THREE.MeshStandardMaterial({ map: jupiterTexture }),
);

export default jupiter;
