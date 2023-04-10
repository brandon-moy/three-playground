import * as THREE from 'three';

const mercuryTexture = new THREE.TextureLoader().load(
  '../images/planets/mercury.jpg',
);

const mercury = new THREE.Mesh(
  new THREE.SphereGeometry(3.2, 30, 30),
  new THREE.MeshStandardMaterial({ map: mercuryTexture }),
);

export default mercury;
