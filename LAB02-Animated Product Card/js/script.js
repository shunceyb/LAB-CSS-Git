/*

Inspiration for 3D - https://github.com/gjmolter/web-3dmodel-threejs
*/


import * as THREE from "https://unpkg.com/three@0.159.0/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.159.0/examples/jsm/controls/OrbitControls.js";
import { STLLoader } from 'https://unpkg.com/three@0.159.0/examples/jsm/loaders/STLLoader'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(10, 300 / 300, 0.1, 1000);
const pointLight = new THREE.PointLight( 0xffffff );
pointLight.castShadow = true
camera.translateY(15)

let object;

let objToRender = 'eye';

const loader = new STLLoader()
const textureLoader = new THREE.TextureLoader();
const imageLoader = new THREE.ImageLoader();

scene.add(pointLight);


loader.load(
  `3D/stl/3DBenchy.stl`,
  function (geo) {

  const texture = new THREE.Texture();

  imageLoader.load('3D/texture/texture.jpg', (image) => {
    texture.image = image;
    texture.needsUpdate = true;
  });

  const material = new THREE.MeshMatcapMaterial({
    color: 0xffffff,
    matcap: textureLoader.load('3D/texture/texture.jpg')
  });

    object = new THREE.Mesh(geo, material);
    object.material.color.setHex(0xc9e4de)
    object.rotation.y = 0
    object.rotation.x = -1
    scene.add(object);
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (error) {
    console.error(error);
  }
);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(250, 250);
renderer.setClearColor(0xffffff, 0.5)

document.getElementById("benchy-container").appendChild(renderer.domElement);

camera.position.z = objToRender === "dino" ? 25 : 500;

const ambientLight = new THREE.AmbientLight(0x333333, objToRender === "dino" ? 5 : 1);
scene.add(ambientLight);

if (objToRender === "dino") {
  controls = new OrbitControls(camera, renderer.domElement);
}

renderer.render(scene, camera); 

function animate() {
  requestAnimationFrame(animate);

  if (object) {
    object.rotation.z += 0.01
  }
  renderer.render(scene, camera); 
}

animate()

let active = 0;

document.getElementById(active).classList.add('active')
window.setActive = (i) => {
  document.getElementById(active).classList.remove('active')
  active = i
  document.getElementById(active).classList.add('active')
  let color = {
    0: 0xc9e4de,
    1: 0xdbcdf0,
    2: 0xf7d9c4,
  }
  object.material.color.setHex(color[i])
  
}