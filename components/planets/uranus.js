import * as THREE from 'three';

const uranusTexture = new THREE.TextureLoader().load(
  '../images/planets/uranus.jpg',
);

const uranus = new THREE.Mesh(
  new THREE.SphereGeometry(7, 30, 30),
  new THREE.MeshStandardMaterial({ map: uranusTexture }),
);

export default uranus;
