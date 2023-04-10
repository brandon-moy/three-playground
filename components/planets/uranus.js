import * as THREE from 'three';

const uranusTexture = new THREE.TextureLoader().load(
  '../images/planets/uranus.jpg',
);

const uranus = new THREE.Mesh(
  new THREE.SphereGeometry(6, 64, 64),
  new THREE.MeshStandardMaterial({ map: uranusTexture }),
);

export default uranus;
