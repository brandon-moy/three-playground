import * as THREE from 'three';

const venusTexture = new THREE.TextureLoader().load(
  '../images/planets/venus.webp',
);

const venus = new THREE.Mesh(
  new THREE.SphereGeometry(6, 64, 64),
  new THREE.MeshStandardMaterial({ map: venusTexture }),
);

export default venus;
