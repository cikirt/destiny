import './js/libs/weapp-adapter/index.js'
import * as THREE from './js/libs/three.js'
import Geometries from './js/libs/geometries.js'
import * as dat from './js/libs/dat.gui.min.js'
import  './js/libs/controls/OrbitControls.js'
import  './js/libs/controls/TrackballControls.js'
import './js/libs/objects/Sky.js'
import './js/libs/GPUParticleSystem.js'
// import './js/libs/GPUComputationRenderer'
function GPUComputationRenderer(sizeX, sizeY, renderer) {

  this.variables = [];

  this.currentTextureIndex = 0;

  var scene = new THREE.Scene();

  var camera = new THREE.Camera();
  camera.position.z = 1;

  var passThruUniforms = {
    texture: { value: null }
  };

  var passThruShader = createShaderMaterial(getPassThroughFragmentShader(), passThruUniforms);

  var mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), passThruShader);
  scene.add(mesh);


  this.addVariable = function (variableName, computeFragmentShader, initialValueTexture) {

    var material = this.createShaderMaterial(computeFragmentShader);

    var variable = {
      name: variableName,
      initialValueTexture: initialValueTexture,
      material: material,
      dependencies: null,
      renderTargets: [],
      wrapS: null,
      wrapT: null,
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter
    };

    this.variables.push(variable);

    return variable;

  };

  this.setVariableDependencies = function (variable, dependencies) {

    variable.dependencies = dependencies;

  };

  this.init = function () {

    if (!renderer.extensions.get("OES_texture_float")) {

      return "No OES_texture_float support for float textures.";

    }

    if (renderer.capabilities.maxVertexTextures === 0) {

      return "No support for vertex shader textures.";

    }

    for (var i = 0; i < this.variables.length; i++) {

      var variable = this.variables[i];

      // Creates rendertargets and initialize them with input texture
      variable.renderTargets[0] = this.createRenderTarget(sizeX, sizeY, variable.wrapS, variable.wrapT, variable.minFilter, variable.magFilter);
      variable.renderTargets[1] = this.createRenderTarget(sizeX, sizeY, variable.wrapS, variable.wrapT, variable.minFilter, variable.magFilter);
      this.renderTexture(variable.initialValueTexture, variable.renderTargets[0]);
      this.renderTexture(variable.initialValueTexture, variable.renderTargets[1]);

      // Adds dependencies uniforms to the ShaderMaterial
      var material = variable.material;
      var uniforms = material.uniforms;
      if (variable.dependencies !== null) {

        for (var d = 0; d < variable.dependencies.length; d++) {

          var depVar = variable.dependencies[d];

          if (depVar.name !== variable.name) {

            // Checks if variable exists
            var found = false;
            for (var j = 0; j < this.variables.length; j++) {

              if (depVar.name === this.variables[j].name) {
                found = true;
                break;
              }

            }
            if (!found) {
              return "Variable dependency not found. Variable=" + variable.name + ", dependency=" + depVar.name;
            }

          }

          uniforms[depVar.name] = { value: null };

          material.fragmentShader = "\nuniform sampler2D " + depVar.name + ";\n" + material.fragmentShader;

        }
      }
    }

    this.currentTextureIndex = 0;

    return null;

  };

  this.compute = function () {

    var currentTextureIndex = this.currentTextureIndex;
    var nextTextureIndex = this.currentTextureIndex === 0 ? 1 : 0;

    for (var i = 0, il = this.variables.length; i < il; i++) {

      var variable = this.variables[i];

      // Sets texture dependencies uniforms
      if (variable.dependencies !== null) {

        var uniforms = variable.material.uniforms;
        for (var d = 0, dl = variable.dependencies.length; d < dl; d++) {

          var depVar = variable.dependencies[d];

          uniforms[depVar.name].value = depVar.renderTargets[currentTextureIndex].texture;

        }

      }

      // Performs the computation for this variable
      this.doRenderTarget(variable.material, variable.renderTargets[nextTextureIndex]);

    }

    this.currentTextureIndex = nextTextureIndex;
  };

  this.getCurrentRenderTarget = function (variable) {

    return variable.renderTargets[this.currentTextureIndex];

  };

  this.getAlternateRenderTarget = function (variable) {

    return variable.renderTargets[this.currentTextureIndex === 0 ? 1 : 0];

  };

  function addResolutionDefine(materialShader) {

    materialShader.defines.resolution = 'vec2( ' + sizeX.toFixed(1) + ', ' + sizeY.toFixed(1) + " )";

  }
  this.addResolutionDefine = addResolutionDefine;


  // The following functions can be used to compute things manually

  function createShaderMaterial(computeFragmentShader, uniforms) {

    uniforms = uniforms || {};

    var material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: getPassThroughVertexShader(),
      fragmentShader: computeFragmentShader
    });

    addResolutionDefine(material);

    return material;
  }
  this.createShaderMaterial = createShaderMaterial;

  this.createRenderTarget = function (sizeXTexture, sizeYTexture, wrapS, wrapT, minFilter, magFilter) {

    sizeXTexture = sizeXTexture || sizeX;
    sizeYTexture = sizeYTexture || sizeY;

    wrapS = wrapS || THREE.ClampToEdgeWrapping;
    wrapT = wrapT || THREE.ClampToEdgeWrapping;

    minFilter = minFilter || THREE.NearestFilter;
    magFilter = magFilter || THREE.NearestFilter;

    var renderTarget = new THREE.WebGLRenderTarget(sizeXTexture, sizeYTexture, {
      wrapS: wrapS,
      wrapT: wrapT,
      minFilter: minFilter,
      magFilter: magFilter,
      format: THREE.RGBAFormat,
      type: (/(iPad|iPhone|iPod)/g.test(navigator.userAgent)) ? THREE.HalfFloatType : THREE.FloatType,
      stencilBuffer: false,
      depthBuffer: false
    });

    return renderTarget;

  };

  this.createTexture = function () {

    var a = new Float32Array(sizeX * sizeY * 4);
    var texture = new THREE.DataTexture(a, sizeX, sizeY, THREE.RGBAFormat, THREE.FloatType);
    texture.needsUpdate = true;

    return texture;

  };


  this.renderTexture = function (input, output) {

    // Takes a texture, and render out in rendertarget
    // input = Texture
    // output = RenderTarget

    passThruUniforms.texture.value = input;

    this.doRenderTarget(passThruShader, output);

    passThruUniforms.texture.value = null;

  };

  this.doRenderTarget = function (material, output) {

    mesh.material = material;
    renderer.render(scene, camera, output);
    mesh.material = passThruShader;

  };

  // Shaders

  function getPassThroughVertexShader() {

    return "void main()	{\n" +
      "\n" +
      "	gl_Position = vec4( position, 1.0 );\n" +
      "\n" +
      "}\n";

  }

  function getPassThroughFragmentShader() {

    return "uniform sampler2D texture;\n" +
      "\n" +
      "void main() {\n" +
      "\n" +
      "	vec2 uv = gl_FragCoord.xy / resolution.xy;\n" +
      "\n" +
      "	gl_FragColor = texture2D( texture, uv );\n" +
      "\n" +
      "}\n";

  }

}

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



var computeShaderPosition =
  "#define delta (1.0/60.0) \n" +
  "void main() { \n" +
  "vec2 uv = gl_FragCoord.xy / resolution.xy; \n" +
  "vec4 tmpPos = texture2D(texturePosition, uv); \n" +
  "vec3 pos = tmpPos.xyz; \n" +
  "vec4 tmpVel = texture2D(textureVelocity, uv); \n" +
  "vec3 vel = tmpVel.xyz; \n" +
  "float mass = tmpVel.w; \n" +
  "  if (mass == 0.0) {\n" +
  "    vel = vec3(0.0); \n" +
  "} \n" +
  "  // Dynamics\n" +
  "pos += vel * delta; \n" +
  "gl_FragColor = vec4(pos, 1.0); \n" +
  "}";

var computeShaderVelocity =
  "// For PI declaration:\n" +
  "#include <common> \n" +
  "#define delta (1.0/60.0)\n" +
  "uniform float gravityConstant;\n" +
  "uniform float density;\n" +
  "const float width = resolution.x;\n" +
  "const float height = resolution.y;\n" +
  "float radiusFromMass(float mass) {\n" +
  "// Calculate radius of a sphere from mass and density\n" +
  "return pow((3.0 / (4.0 * PI)) * mass / density, 1.0 / 3.0);\n" +
  "}\n" +
  "void main()	{\n" +
  "vec2 uv = gl_FragCoord.xy / resolution.xy;\n" +
  "float idParticle = uv.y * resolution.x + uv.x;\n" +
  "vec4 tmpPos = texture2D(texturePosition, uv);\n" +
  "vec3 pos = tmpPos.xyz;\n" +
  "vec4 tmpVel = texture2D(textureVelocity, uv);\n" +
  "vec3 vel = tmpVel.xyz;\n" +
  "float mass = tmpVel.w;\n" +
  "if (mass > 0.0) {\n" +
  " float radius = radiusFromMass(mass);\n" +
  "    vec3 acceleration = vec3(0.0);\n" +
  "   // Gravity interaction\n" +
  "  for (float y = 0.0; y < height; y++ ) {\n" +
  "   for (float x = 0.0; x < width; x++ ) {\n" +
  "    vec2 secondParticleCoords = vec2(x + 0.5, y + 0.5) / resolution.xy;\n" +
  "   vec3 pos2 = texture2D(texturePosition, secondParticleCoords).xyz;\n" +
  "  vec4 velTemp2 = texture2D(textureVelocity, secondParticleCoords);\n" +
  " vec3 vel2 = velTemp2.xyz;\n" +
  "        float mass2 = velTemp2.w;\n" +
  "       float idParticle2 = secondParticleCoords.y * resolution.x + secondParticleCoords.x;\n" +
  "      if (idParticle == idParticle2) {\n" +
  "       continue;\n" +
  "    }\n" +
  "   if (mass2 == 0.0) {\n" +
  "    continue;\n" +
  " }\n" +
  "vec3 dPos = pos2 - pos;\n" +
  "float distance = length(dPos);\n" +
  "float radius2 = radiusFromMass(mass2);\n" +
  "if (distance == 0.0) {\n" +
  " continue;\n" +
  "}\n" +
  "// Checks collision\n" +
  "if (distance < radius + radius2) {\n" +
  " if (idParticle < idParticle2) {\n" +
  "  // This particle is aggregated by the other\n" +
  " vel = (vel * mass + vel2 * mass2) / (mass + mass2);\n" +
  "mass += mass2;\n" +
  "radius = radiusFromMass(mass);\n" +
  "}\n" +
  "else {\n" +
  "// This particle dies\n" +
  "mass = 0.0;\n" +
  "radius = 0.0;\n" +
  "vel = vec3(0.0);\n" +
  "break;\n" +
  "}\n" +
  "}\n" +
  "float distanceSq = distance * distance;\n" +
  "float gravityField = gravityConstant * mass2 / distanceSq;\n" +
  "gravityField = min(gravityField, 1000.0);\n" +
  "acceleration += gravityField * normalize(dPos);\n" +
  "}\n" +
  "if (mass == 0.0) {\n" +
  " break;\n" +
  "}\n" +
  "}\n" +
  "// Dynamics\n" +
  "vel += delta * acceleration;\n" +
  "}\n" +
  "gl_FragColor = vec4(vel, mass);\n" +
  "}";

var particleVertexShader =
  "     // For PI declaration:\n" +
  "			#include <common>\n" +
  "			uniform sampler2D texturePosition;\n" +
  "			uniform sampler2D textureVelocity;\n" +
  "			uniform float cameraConstant;\n" +
  "			uniform float density;\n" +
  "			varying vec4 vColor;\n" +
  "			float radiusFromMass( float mass ) {\n" +
  "				// Calculate radius of a sphere from mass and density\n" +
  "				return pow(abs( ( 3.0 / ( 4.0 * PI ) ) * mass / density), 1.0 / 3.0 );\n" +
  "			}\n" +
  "			void main() {\n" +
  "				vec4 posTemp = texture2D( texturePosition, uv );\n" +
  "				vec3 pos = posTemp.xyz;\n" +
  "				vec4 velTemp = texture2D( textureVelocity, uv );\n" +
  "				vec3 vel = velTemp.xyz;\n" +
  "				float mass = velTemp.w;\n" +
  "				vColor = vec4( 1.0, mass / 250.0, 0.0, 1.0 );\n" +
  "				vec4 mvPosition = modelViewMatrix * vec4( pos, 1.0 );\n" +
  "				// Calculate radius of a sphere from mass and density\n" +
  "				//float radius = pow( ( 3.0 / ( 4.0 * PI ) ) * mass / density, 1.0 / 3.0 );\n" +
  "				float radius = radiusFromMass( mass );\n" +
  "				// Apparent size in pixels\n" +
  "				if ( mass == 0.0 ) {\n" +
  "					gl_PointSize = 0.0;\n" +
  "				}\n" +
  "				else {\n" +
  "					gl_PointSize = radius * cameraConstant / ( - mvPosition.z );\n" +
  "				}\n" +
  "				gl_Position = projectionMatrix * mvPosition;\n" +
  "			}";
var particleFragmentShader =
  "varying vec4 vColor; \n" +
  "			void main() {\n" +
  "				float f = length( gl_PointCoord - vec2( 0.5, 0.5 ) );\n" +
  "				if ( f > 0.5 ) {\n" +
  "					discard;\n" +
  "				}\n" +
  "				gl_FragColor = vColor;\n" +
  "			}";






var WIDTH5 = 64

var geometry5, controls5;
var PARTICLES5 = WIDTH5 * WIDTH5;


var camera, controls;
var sky, sunSphere;

var  tick = 0,clock = new THREE.Clock(),
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
  mouseX = 0, mouseY = 0,
  windowHalfX = window.innerWidth / 2,
  windowHalfY = window.innerHeight / 2;
var objects = [];
init();
animate();
// render();
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
}
function init() {
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 100, 20000);
  camera.position.set(0, 100, 200);
  //camera.setLens(20);
  // var helper = new THREE.GridHelper(10000, 2, 0xffffff, 0xffffff);
  // scene.add(helper);
  
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.addEventListener('change', render);
  //controls.maxPolarAngle = Math.PI / 2;
  controls.enableZoom = false;
  controls.enablePan = false;
  
  initSky();

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


    initStars();


  var i, line, vertex1, vertex2, material, p,
    parameters = [[5.25, 0xff7700, 1, 2], [0.5, 0xff9900, 1, 1], [0.75, 0xffaa00, 0.75, 1], [1, 0xffaa00, 0.5, 1], [1.25, 0x000833, 0.8, 1],
    [3.0, 0xaaaaaa, 0.75, 2], [3.5, 0xffffff, 0.5, 1], [4.5, 0xffffff, 0.25, 1], [5.5, 0xffffff, 0.125, 1]];
  var geometry = createGeometry();
  for (i = 0; i < 1; ++i) {
    p = parameters[i];
    material = new THREE.LineBasicMaterial({ color: p[1], opacity: p[2], linewidth: p[3] });
    line = new THREE.LineSegments(geometry, material);
    line.scale.x = line.scale.y = line.scale.z = p[0];
    line.userData.originalScale = p[0];
    // line.rotation.y = Math.random() * Math.PI;
    line.updateMatrix();
    scene.add(line);
  }
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
  // var time = Date.now() * 0.001;
  // scene.traverse(function (object) {
  //   if (object.isLine) {
  //     object.rotation.x = 0.25 * time;
  //     object.rotation.y = 0.25 * time;
  //   }
  // });

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

  gpuCompute.compute();
  particleUniforms.texturePosition.value = gpuCompute.getCurrentRenderTarget(positionVariable).texture;
  particleUniforms.textureVelocity.value = gpuCompute.getCurrentRenderTarget(velocityVariable).texture;

  renderer.render(scene, camera);
}


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
  velocityVariable = gpuCompute.addVariable("textureVelocity",computeShaderVelocity, dtVelocity);
  positionVariable = gpuCompute.addVariable("texturePosition", computeShaderPosition, dtPosition);
  gpuCompute.setVariableDependencies(velocityVariable, [positionVariable, velocityVariable]);
  gpuCompute.setVariableDependencies(positionVariable, [positionVariable, velocityVariable]);
  positionUniforms = positionVariable.material.uniforms;
  velocityUniforms = velocityVariable.material.uniforms;
  velocityUniforms.gravityConstant = { value: 0.0 };
  velocityUniforms.density = { value: 0.0 };
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
    texturePosition: { value: null },
    textureVelocity: { value: null },
    cameraConstant: { value: getCameraConstant(camera) },
    density: { value: 0.0 }
  };
  // ShaderMaterial
  var material = new THREE.ShaderMaterial({
    uniforms: particleUniforms,
    vertexShader: particleVertexShader,
    fragmentShader: particleFragmentShader
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
    var vz = - vel * x + (Math.random() * 2 - 1) * randVel;
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

// 创造构成线段的点集合
function createGeometry() {
  var geometry = new THREE.BufferGeometry();
  var vertices = [];
  var vertex = new THREE.Vector3();
  var lll = 100
  var p = [{ x: lll, y: 0, z: 0 },  { x: 0, y: 0, z: lll }, 
    { x: -1 * lll, y: 0, z: 0 },  { x: 0, y: 0, z: -1 * lll }]
  for (var i = 0; i < 4; i++) {
    vertex.x = p[i].x
    vertex.y = p[i].y
    vertex.z = p[i].z
    vertex.normalize();
    vertex.multiplyScalar(10)
    // vertex.multiplyScalar(r);
    vertices.push(vertex.x, vertex.y, vertex.z);
    // vertex.multiplyScalar(Math.random() * 0.09 + 1);
    vertices.push(0, 0, 0);
  }
  geometry.addAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  return geometry;
}