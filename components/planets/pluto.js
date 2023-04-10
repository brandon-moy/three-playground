import * as THREE from 'three';

const plutoTexture = new THREE.TextureLoader().load(
  '../images/planets/pluto.jpg',
);

const pluto = new THREE.Mesh(
  new THREE.SphereGeometry(6, 64, 64),
  new THREE.MeshStandardMaterial({ map: plutoTexture }),
);

export default pluto;
