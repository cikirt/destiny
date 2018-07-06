import './js/libs/weapp-adapter'
import './js/configs/global-data'

// import Main from './js/main'

// new Main()

var THREE = require('./js/libs/threejs/three.min.js');
var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var context = canvas.getContext('webgl');
var renderer = new THREE.WebGLRenderer(context);

renderer.setSize(window.innerWidth, window.innerHeight);

canvas.appendChild(renderer.domElement);
var geometry = new THREE.CubeGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;
function render() {
  requestAnimationFrame(render);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
render();


