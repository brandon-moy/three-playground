import * as THREE from 'three';

const saturnTexture = new THREE.TextureLoader().load(
  '../images/planets/saturn.webp',
);

const saturn = new THREE.Mesh(
  new THREE.SphereGeometry(6, 64, 64),
  new THREE.MeshStandardMaterial({ map: saturnTexture }),
);

export default saturn;
