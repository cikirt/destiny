import './js/libs/weapp-adapter'
import './js/configs/global-data'
// import { Matrix4, Vector3, Vector4 } from './js/libs/matrix'
// import WebGLUtils from './js/libs/cuon-utils'

import Phenomenon from './js/libs/phenomenon'
import { showCube } from './js/actions/cube'
import { showTest } from './js/actions/test'
import { showMyTest } from './js/actions/mytest.js'
import { showMyTest2 } from './js/actions/mytest2.js'


// import Main from './js/main'
// new Main()

wx.setPreferredFramesPerSecond(60)

var gl = canvas.getContext("webgl")

// Update value for every frame
const step = 0.01;
// Multiplier of the canvas resolution
const devicePixelRatio = window.devicePixelRatio;

// Every uniform must have:
// - Key (used in the shader)
// - Type (what kind of value)
// - Value (based on the type)
const uniforms = {
  uProgress: {
    type: 'float',
    value: 0.0,
  },
};

function rotateX(m, angle) {
  let c = Math.cos(angle);
  let s = Math.sin(angle);
  let mv1 = m[1];
  let mv5 = m[5];
  let mv9 = m[9];

  m[1] = m[1] * c - m[2] * s;
  m[5] = m[5] * c - m[6] * s;
  m[9] = m[9] * c - m[10] * s;

  m[2] = m[2] * c + mv1 * s;
  m[6] = m[6] * c + mv5 * s;
  m[10] = m[10] * c + mv9 * s;
}

function rotateY(m, angle) {
  let c = Math.cos(angle);
  let s = Math.sin(angle);
  let mv0 = m[0];
  let mv4 = m[4];
  let mv8 = m[8];

  m[0] = c * m[0] + s * m[2];
  m[4] = c * m[4] + s * m[6];
  m[8] = c * m[8] + s * m[10];

  m[2] = c * m[2] - s * mv0;
  m[6] = c * m[6] - s * mv4;
  m[10] = c * m[10] - s * mv8;
}


// Boolean value to switch direction
let forward = true;

// Create the renderer
const phenomenon = new Phenomenon({
  canvas: canvas,
  settings: {
    devicePixelRatio,
    position: { x: 0, y: 0, z: 3 },
    shouldRender: true,
    uniforms,
    onRender: r => {
      const { uProgress, uModelMatrix } = r.uniforms;
      // 
      uProgress.value += forward ? step : -step;

      if (uProgress.value >= 1) forward = false;
      else if (uProgress.value <= 0) forward = true;

      // rotateY(uModelMatrix.value, step * 2);
      // rotateX(uModelMatrix.value, step * 2);
    },
  },
});

// Add an instance to the renderer
// phenomenon.add('cube', showCube());
phenomenon.add('mytest', showMyTest2());

// for (let i = 0; i < 20; i += 1) {
//   phenomenon.add('test'+i, showTest(i));
// }



