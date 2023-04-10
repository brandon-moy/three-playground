import * as THREE from 'three';

const sunTexture = new THREE.TextureLoader().load('../images/planets/sun.jpg');

const sun = new THREE.Mesh(
  new THREE.SphereGeometry(6, 64, 64),
  new THREE.MeshStandardMaterial({ map: sunTexture }),
);

export default sun;
