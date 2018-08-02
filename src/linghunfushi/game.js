import './js/libs/weapp-adapter/index.js'
import * as THREE from './js/libs/three.js'
import Geometries from './js/libs/geometries.js'
import * as dat from './js/libs/dat.gui.min.js'
import  './js/libs/controls/OrbitControls.js'
import  './js/libs/controls/TrackballControls.js'
import './js/libs/objects/Sky.js'
import './js/libs/GPUParticleSystem.js'


let ctx = canvas.getContext('webgl')
const { pixelRatio, windowWidth, windowHeight } = wx.getSystemInfoSync()

canvas.width = canvas.width * pixelRatio
canvas.height = canvas.height * pixelRatio

// ctx.translate(0, canvas.height)
// 初始化
let scene = new THREE.Scene()
let renderer = new THREE.WebGLRenderer({ context: ctx, antialias: true })


// import Main from './js/main'
// new Main()

wx.setPreferredFramesPerSecond(60)

var camera, controls;
var sky, sunSphere;

var  tick = 0,clock = new THREE.Clock(),
  controls2, 
  options, spawnerOptions, particleSystem;


var objects = [];
init();
animate();
function initSky() {
  // Add Sky
  sky = new THREE.Sky();
  sky.scale.setScalar(45000);
  scene.add(sky);
  // Add Sun Helper
  sunSphere = new THREE.Mesh(
    new THREE.SphereBufferGeometry(20000, 16, 8),
    new THREE.MeshBasicMaterial({ color: 0xffffff })
  );
  sunSphere.position.y = - 700000;
  sunSphere.visible = false;
  scene.add(sunSphere);
  // GUI
  var effectController = {
    turbidity: 10,
    rayleigh: 2,
    mieCoefficient: 0.005,
    mieDirectionalG: 0.8,
    luminance: 1,
    inclination: 0.49, // elevation / inclination
    azimuth: 0.25, // Facing front,
    sun: ! true
  };
  
  var distance = 4000;
  function guiChanged() {
    var uniforms = sky.material.uniforms;
    uniforms.turbidity.value = effectController.turbidity;
    uniforms.rayleigh.value = effectController.rayleigh;
    uniforms.luminance.value = effectController.luminance;
    uniforms.mieCoefficient.value = effectController.mieCoefficient;
    uniforms.mieDirectionalG.value = effectController.mieDirectionalG;
    var theta = Math.PI * (effectController.inclination - 0.5);
    var phi = 2 * Math.PI * (effectController.azimuth - 0.5);
    sunSphere.position.x = distance * Math.cos(phi);
    sunSphere.position.y = distance * Math.sin(phi) * Math.sin(theta);
    sunSphere.position.z = distance * Math.sin(phi) * Math.cos(theta);
    sunSphere.visible = effectController.sun;
    uniforms.sunPosition.value.copy(sunSphere.position);
    renderer.render(scene, camera);
  }
  guiChanged()
  // var gui = new dat.GUI();
  // gui.add(effectController, "turbidity", 1.0, 20.0, 0.1).onChange(guiChanged);
  // gui.add(effectController, "rayleigh", 0.0, 4, 0.001).onChange(guiChanged);
  // gui.add(effectController, "mieCoefficient", 0.0, 0.1, 0.001).onChange(guiChanged);
  // gui.add(effectController, "mieDirectionalG", 0.0, 1, 0.001).onChange(guiChanged);
  // gui.add(effectController, "luminance", 0.0, 2).onChange(guiChanged);
  // gui.add(effectController, "inclination", 0, 1, 0.0001).onChange(guiChanged);
  // gui.add(effectController, "azimuth", 0, 1, 0.0001).onChange(guiChanged);
  // gui.add(effectController, "sun").onChange(guiChanged);
  // guiChanged();
}
function init() {
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 100, 20000);
  camera.position.set(0, 0, 200);
  //camera.setLens(20);
  var helper = new THREE.GridHelper(10000, 2, 0xffffff, 0xffffff);
  scene.add(helper);
  
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.addEventListener('change', render);
  //controls.maxPolarAngle = Math.PI / 2;
  controls.enableZoom = false;
  controls.enablePan = false;
  initSky();

  // scene.background = new THREE.Color(0x111111);
  // scene.fog = new THREE.Fog(0x111111, 150, 200);

  var subdivisions = 6;
  var recursion = 1;
  var points = Geometries.hilbert3D(new THREE.Vector3(0, 0, 0), 25.0, recursion, 0, 1, 2, 3, 4, 5, 6, 7);
  var spline = new THREE.CatmullRomCurve3(points);
  var samples = spline.getPoints(points.length * subdivisions);
  var geometrySpline = new THREE.BufferGeometry().setFromPoints(samples);
  var line = new THREE.Line(geometrySpline, new THREE.LineDashedMaterial({ color: 0xffffff, dashSize: 1, gapSize: 0.5 }));
  line.computeLineDistances();
  objects.push(line);
  scene.add(line);
  var geometryCube = cube(50);
  var lineSegments = new THREE.LineSegments(geometryCube, new THREE.LineDashedMaterial({ color: 0xffaa00, dashSize: 3, gapSize: 1, linewidth: 2 }));
  lineSegments.computeLineDistances();
  objects.push(lineSegments);
  scene.add(lineSegments);

  //
  // container = document.getElementById('container');
  // camera = new THREE.PerspectiveCamera(28, window.innerWidth / window.innerHeight, 1, 10000);
  // camera.position.z = 100;
  // scene = new THREE.Scene();
  // The GPU Particle system extends THREE.Object3D, and so you can use it
  // as you would any other scene graph component.	Particle positions will be
  // relative to the position of the particle system, but you will probably only need one
  // system for your whole scene
  particleSystem = new THREE.GPUParticleSystem({
    maxParticles: 25000
  });
  scene.add(particleSystem);
  // options passed during each spawned
  options = {
    position: new THREE.Vector3(),
    positionRandomness: .3,
    velocity: new THREE.Vector3(),
    velocityRandomness: .5,
    color: 0xaa88ff,
    colorRandomness: .2,
    turbulence: .5,
    lifetime: 2,
    size: 5,
    sizeRandomness: 1
  };
  spawnerOptions = {
    spawnRate: 15000,
    horizontalSpeed: 1.5,
    verticalSpeed: 1.33,
    timeScale: 1
  };
  

  // controls2 = new THREE.TrackballControls(camera, renderer.domElement);
  // controls2.rotateSpeed = 5.0;
  // controls2.zoomSpeed = 2.2;
  // controls2.panSpeed = 1;
  // controls2.dynamicDampingFactor = 0.3;
}

function cube(size) {
  var h = size * 0.5;
  var geometry = new THREE.BufferGeometry();
  var position = [];
  position.push(
    -h, -h, -h,
    -h, h, -h,
    -h, h, -h,
    h, h, -h,
    h, h, -h,
    h, -h, -h,
    h, -h, -h,
    -h, -h, -h,
    -h, -h, h,
    -h, h, h,
    -h, h, h,
    h, h, h,
    h, h, h,
    h, -h, h,
    h, -h, h,
    -h, -h, h,
    -h, -h, -h,
    -h, -h, h,
    -h, h, -h,
    -h, h, h,
    h, h, -h,
    h, h, h,
    h, -h, -h,
    h, -h, h
  );
  geometry.addAttribute('position', new THREE.Float32BufferAttribute(position, 3));
  return geometry;
}

function animate() {
  requestAnimationFrame(animate);
  render();
}
function render() {
  var time = Date.now() * 0.001;
  scene.traverse(function (object) {
    if (object.isLine) {
      object.rotation.x = 0.25 * time;
      object.rotation.y = 0.25 * time;
    }
  });

  var delta = clock.getDelta() * spawnerOptions.timeScale;
  tick += delta;
  if (tick < 0) tick = 0;
  if (delta > 0) {
    options.position.x = Math.sin(tick * spawnerOptions.horizontalSpeed) * 20;
    options.position.y = Math.sin(tick * spawnerOptions.verticalSpeed) * 10;
    options.position.z = Math.sin(tick * spawnerOptions.horizontalSpeed + spawnerOptions.verticalSpeed) * 5;
    for (var x = 0; x < spawnerOptions.spawnRate * delta; x++) {
      // Yep, that's really it.	Spawning particles is super cheap, and once you spawn them, the rest of
      // their lifecycle is handled entirely on the GPU, driven by a time uniform updated below
      particleSystem.spawnParticle(options);
    }
  }
  particleSystem.update(tick);

  renderer.render(scene, camera);
}


