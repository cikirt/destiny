var WIDTH5 = 64
var geometry5, controls5;
var PARTICLES5 = WIDTH5 * WIDTH5;
var camera, controls;
var sky, sunSphere;
var tick = 0,
  clock = new THREE.Clock(),
  controls2,
  options, spawnerOptions, particleSystem;
var gpuCompute;
var velocityVariable;
var positionVariable;
var positionUniforms;
var velocityUniforms;
var particleUniforms;
var effectController2;
var SCREEN_WIDTH = window.innerWidth,
  SCREEN_HEIGHT = window.innerHeight,
  r = 450,
  mouseX = 0,
  mouseY = 0,
  windowHalfX = window.innerWidth / 2,
  windowHalfY = window.innerHeight / 2;
var objects = [];
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


function initStars() {

  effectController2 = {
    // Can be changed dynamically
    gravityConstant: 100.0,
    density: 0.45,
    // Must restart simulation
    radius: 300,
    height: 8,
    exponent: 0.4,
    maxMass: 15.0,
    velocity: 70,
    velocityExponent: 0.2,
    randVelocity: 0.001
  };
  initComputeRenderer();

  initProtoplanets();
  dynamicValuesChanger();
}



function initComputeRenderer() {
  gpuCompute = new GPUComputationRenderer(WIDTH5, WIDTH5, renderer);
  var dtPosition = gpuCompute.createTexture();
  var dtVelocity = gpuCompute.createTexture();
  fillTextures(dtPosition, dtVelocity);
  velocityVariable = gpuCompute.addVariable("textureVelocity", GPU1.computeShaderVelocity, dtVelocity);
  positionVariable = gpuCompute.addVariable("texturePosition", GPU1.computeShaderPosition, dtPosition);
  gpuCompute.setVariableDependencies(velocityVariable, [positionVariable, velocityVariable]);
  gpuCompute.setVariableDependencies(positionVariable, [positionVariable, velocityVariable]);
  positionUniforms = positionVariable.material.uniforms;
  velocityUniforms = velocityVariable.material.uniforms;
  velocityUniforms.gravityConstant = {
    value: 0.0
  };
  velocityUniforms.density = {
    value: 0.0
  };
  var error = gpuCompute.init();
  if (error !== null) {
    console.error(error);
  }
}

function restartSimulation() {
  var dtPosition = gpuCompute.createTexture();
  var dtVelocity = gpuCompute.createTexture();
  fillTextures(dtPosition, dtVelocity);
  gpuCompute.renderTexture(dtPosition, positionVariable.renderTargets[0]);
  gpuCompute.renderTexture(dtPosition, positionVariable.renderTargets[1]);
  gpuCompute.renderTexture(dtVelocity, velocityVariable.renderTargets[0]);
  gpuCompute.renderTexture(dtVelocity, velocityVariable.renderTargets[1]);
}

function initProtoplanets() {
  geometry5 = new THREE.BufferGeometry();
  var positions = new Float32Array(PARTICLES5 * 3);
  var p = 0;
  for (var i = 0; i < PARTICLES5; i++) {
    positions[p++] = (Math.random() * 2 - 1) * effectController2.radius;
    positions[p++] = 0; //( Math.random() * 2 - 1 ) * effectController2.radius;
    positions[p++] = (Math.random() * 2 - 1) * effectController2.radius;
  }
  var uvs = new Float32Array(PARTICLES5 * 2);
  p = 0;
  for (var j = 0; j < WIDTH5; j++) {
    for (var i = 0; i < WIDTH5; i++) {
      uvs[p++] = i / (WIDTH5 - 1);
      uvs[p++] = j / (WIDTH5 - 1);
    }
  }
  geometry5.addAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry5.addAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  particleUniforms = {
    texturePosition: {
      value: null
    },
    textureVelocity: {
      value: null
    },
    cameraConstant: {
      value: getCameraConstant(camera)
    },
    density: {
      value: 0.0
    }
  };
  // ShaderMaterial
  var material = new THREE.ShaderMaterial({
    uniforms: particleUniforms,
    vertexShader: GPU1.particleVertexShader,
    fragmentShader: GPU1.particleFragmentShader
  });
  material.extensions.drawBuffers = true;
  var particles = new THREE.Points(geometry5, material);
  particles.matrixAutoUpdate = false;
  particles.updateMatrix();
  scene.add(particles);
}

function fillTextures(texturePosition, textureVelocity) {
  var posArray = texturePosition.image.data;
  var velArray = textureVelocity.image.data;
  var radius = effectController2.radius;
  var height = effectController2.height;
  var exponent = effectController2.exponent;
  var maxMass = effectController2.maxMass * 1024 / PARTICLES5;
  var maxVel = effectController2.velocity;
  var velExponent = effectController2.velocityExponent;
  var randVel = effectController2.randVelocity;
  for (var k = 0, kl = posArray.length; k < kl; k += 4) {
    // Position
    var x, y, z, rr;
    do {
      x = (Math.random() * 2 - 1);
      z = (Math.random() * 2 - 1);
      rr = x * x + z * z;
    } while (rr > 1);
    rr = Math.sqrt(rr);
    var rExp = radius * Math.pow(rr, exponent);
    // Velocity
    var vel = maxVel * Math.pow(rr, velExponent);
    var vx = vel * z + (Math.random() * 2 - 1) * randVel;
    var vy = (Math.random() * 2 - 1) * randVel * 0.05;
    var vz = -vel * x + (Math.random() * 2 - 1) * randVel;
    x *= rExp;
    z *= rExp;
    y = (Math.random() * 2 - 1) * height;
    var mass = Math.random() * maxMass + 1;
    // Fill in texture values
    posArray[k + 0] = x;
    posArray[k + 1] = y;
    posArray[k + 2] = z;
    posArray[k + 3] = 1;
    velArray[k + 0] = vx;
    velArray[k + 1] = vy;
    velArray[k + 2] = vz;
    velArray[k + 3] = mass;
  }
}

function dynamicValuesChanger() {
  velocityUniforms.gravityConstant.value = effectController2.gravityConstant;
  velocityUniforms.density.value = effectController2.density;
  particleUniforms.density.value = effectController2.density;
}

function getCameraConstant(camera) {
  return window.innerHeight / (Math.tan(THREE.Math.DEG2RAD * 0.5 * camera.fov) / camera.zoom);
}