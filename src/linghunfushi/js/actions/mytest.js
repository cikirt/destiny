
function getRandom(value) {
  const floor = -value;
  return floor + Math.random() * value * 2;
}

function rgbToHsl(rgb) {
  return rgb.map(c => c / 255);
}

// Material colors in HSL
const colors = [
  [255, 108, 0],
  [83, 109, 254],
  [29, 233, 182],
  [253, 216, 53],
].map(color => rgbToHsl(color));


var devicePixelRatio = window.devicePixelRatio;
// The amount of particles that will be created
const multiplier = 10000;

// Percentage of how long every particle will move
const duration = 0.6;





const vertex = `
  attribute vec3 aPositionStart;
  attribute vec3 aControlPointOne;  
  attribute vec3 aControlPointTwo;  
  attribute vec3 aPositionEnd;  
  attribute vec3 aPosition;  
  attribute vec3 aColor;  
  attribute float aOffset;  

  uniform float uProgress;
  uniform mat4 uProjectionMatrix;
  uniform mat4 uModelMatrix;
  uniform mat4 uViewMatrix;

  varying vec3 vColor;

  vec3 bezier4(vec3 a, vec3 b, vec3 c, vec3 d, float t) {
    return mix(mix(mix(a, b, t), mix(b, c, t), t), mix(mix(b, c, t), mix(c, d, t), t), t);
  }

  float easeInOutQuint(float t){
    return t < 0.5 ? 16.0 * t * t * t * t * t : 1.0 + 16.0 * (--t) * t * t * t * t;
  }

  void main(){
    float tProgress = easeInOutQuint(min(1.0, max(0.0, (uProgress - aOffset)) / ${duration}));
    vec3 newPosition = bezier4(aPositionStart, aControlPointOne, aControlPointTwo, aPositionEnd, tProgress);
    gl_PointSize = 4.0;
    gl_Position = uProjectionMatrix * uModelMatrix * uViewMatrix * vec4(newPosition + aPosition, 1.0);
    vColor = aColor;
  }
`;

const fragment = `
  precision mediump float;

  varying vec3 vColor;

  void main(){
    gl_FragColor = vec4(vColor, 1.0);
  }
`;

function h2r(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * 6 * (2 / 3 - t);
  return p;
}
function getHSL(h, s, l) {
  h = (h % 1 + 1) % 1;
  s = Math.max(0, Math.min(1, s));
  l = Math.max(0, Math.min(1, l));
  if (s === 0) return [l, l, l];
  const p = l <= 0.5 ? l * (1 + s) : l + s - l * s;
  const q = 2 * l - p;
  return [h2r(q, p, h + 1 / 3), h2r(q, p, h), h2r(q, p, h - 1 / 3)];
}

export function showMyTest() {
  const begin = 0.4;
  const attributes = [
    {
      name: "aPositionStart",
      data: (index, total) => {
        return [-0.8 + getRandom(0.2), getRandom(0.2), 0.2 - index / total * 0.4];
      },
      size: 3
    },
    {
      name: "aControlPointOne",
      data: (index, total) => {
        return [
          Math.cos(index / total) * 3,
          Math.sin(index / total) * 3,
          -1 + getRandom(0.2)
        ];
      },
      size: 3
    },
    {
      name: "aControlPointTwo",
      data: (index, total) => {
        return [
          -Math.cos(index / total) * 3,
          -Math.sin(index / total) * 3,
          -1 + getRandom(0.2)
        ];
      },
      size: 3
    },
    {
      name: "aPositionEnd",
      data: (index, total) => {
        return [0.8 + getRandom(0.2), getRandom(0.2), -0.2 + index / total * 0.4];
      },
      size: 3
    },
    {
      name: "aColor",
      data: (index, total) =>
        getHSL(
          begin + index / total * 0.2,
          0.6 + getRandom(0.1),
          0.6 + getRandom(0.1)
        ),
      size: 3
    },
    {
      name: "aOffset",
      data: i => [i * ((1 - duration) / (multiplier - 1))],
      size: 1
    }
  ];

  return {
    attributes,
    multiplier,
    vertex,
    fragment,
  }
}