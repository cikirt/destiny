import './js/libs/weapp-adapter/index.js'
//examples https://pixijs.io/examples/#/mesh/triangle.js
// import './js/configs/global-data'
// import { Matrix4, Vector3, Vector4 } from './js/libs/matrix'
// import WebGLUtils from './js/libs/cuon-utils'

// import Phenomenon from './js/libs/phenomenon'
// import { showCube } from './js/actions/cube'
// import { showTest } from './js/actions/test'
// import { showMyTest } from './js/actions/mytest.js'
// import { showMyTest2 } from './js/actions/mytest2.js'


// import Main from './js/main'
// new Main()

wx.setPreferredFramesPerSecond(60)

// var gl = canvas.getContext("webgl")
import * as PIXI  from './js/libs/pixi.min.js'

const { pixelRatio, windowWidth, windowHeight } = wx.getSystemInfoSync()

var app =new PIXI.Application({
  width: windowWidth * pixelRatio,
  height: windowHeight * pixelRatio,
  view: canvas
})

var p = './images/tools-number/0.png'

// basic-------------------
// // create a new Sprite from an image path
// var bunny = PIXI.Sprite.fromImage('./images/tools-number/0.png')

// // center the sprite's anchor point
// bunny.anchor.set(0.5);

// // move the sprite to the center of the screen
// bunny.x = app.screen.width / 2;
// bunny.y = app.screen.height / 2;

// app.stage.addChild(bunny);

// // Listen for animate update
// app.ticker.add(function (delta) {
//   // just for fun, let's rotate mr rabbit a little
//   // delta is 1 if running at 100% performance
//   // creates frame-independent transformation
//   bunny.rotation += 0.1 * delta;
// });

// // container-------------------
// var container = new PIXI.Container();

// app.stage.addChild(container);

// var texture = PIXI.Texture.fromImage('./images/tools-number/0.png');

// // Create a 5x5 grid of bunnies
// for (var i = 0; i < 25; i++) {
//   var bunny = new PIXI.Sprite(texture);
//   bunny.anchor.set(0.5);
//   bunny.x = (i % 5) * 40;
//   bunny.y = Math.floor(i / 5) * 40;
//   container.addChild(bunny);
// }

// // Center on the screen
// container.x = (app.screen.width - container.width) / 2;
// container.y = (app.screen.height - container.height) / 2;

//container pivot
// var container = new PIXI.Container();

// app.stage.addChild(container);

// // Create a new texture
// var texture = PIXI.Texture.fromImage(p);

// // Create a 5x5 grid of bunnies
// for (var i = 0; i < 25; i++) {
//   var bunny = new PIXI.Sprite(texture);
//   bunny.anchor.set(0.5);
//   bunny.x = (i % 5) * 40;
//   bunny.y = Math.floor(i / 5) * 40;
//   container.addChild(bunny);
// }

// // Move container to the center
// container.x = app.screen.width / 2;
// container.y = app.screen.height / 2;

// // Center bunny sprite in local container coordinates
// container.pivot.x = container.width / 2;
// container.pivot.y = container.height / 2;

// // Listen for animate update
// app.ticker.add(function (delta) {
//   // rotate the container!
//   // use delta to create frame-independent transform
//   container.rotation -= 0.01 * delta;
// });


//spiritsheet animate
PIXI.loader
  .add('required/assets/basics/fighter.json')
  .load(onAssetsLoaded);

function onAssetsLoaded() {
  // create an array of textures from an image path
  var frames = [];

  for (var i = 0; i < 30; i++) {
    var val = i < 10 ? '0' + i : i;

    // magically works since the spritesheet was loaded with the pixi loader
    frames.push(PIXI.Texture.fromFrame('rollSequence00' + val + '.png'));
  }

  // create an AnimatedSprite (brings back memories from the days of Flash, right ?)
  var anim = new PIXI.extras.AnimatedSprite(frames);

  /*
   * An AnimatedSprite inherits all the properties of a PIXI sprite
   * so you can change its position, its anchor, mask it, etc
   */
  anim.x = app.screen.width / 2;
  anim.y = app.screen.height / 2;
  anim.anchor.set(0.5);
  anim.animationSpeed = 0.5;
  anim.play();

  app.stage.addChild(anim);

  // Animate the rotation
  app.ticker.add(function () {
    anim.rotation += 0.01;
  });
}



//   another lib
// // Update value for every frame
// const step = 0.01;
// // Multiplier of the canvas resolution
// const devicePixelRatio = window.devicePixelRatio;

// // Every uniform must have:
// // - Key (used in the shader)
// // - Type (what kind of value)
// // - Value (based on the type)
// const uniforms = {
//   uProgress: {
//     type: 'float',
//     value: 0.0,
//   },
// };

// function rotateX(m, angle) {
//   let c = Math.cos(angle);
//   let s = Math.sin(angle);
//   let mv1 = m[1];
//   let mv5 = m[5];
//   let mv9 = m[9];

//   m[1] = m[1] * c - m[2] * s;
//   m[5] = m[5] * c - m[6] * s;
//   m[9] = m[9] * c - m[10] * s;

//   m[2] = m[2] * c + mv1 * s;
//   m[6] = m[6] * c + mv5 * s;
//   m[10] = m[10] * c + mv9 * s;
// }

// function rotateY(m, angle) {
//   let c = Math.cos(angle);
//   let s = Math.sin(angle);
//   let mv0 = m[0];
//   let mv4 = m[4];
//   let mv8 = m[8];

//   m[0] = c * m[0] + s * m[2];
//   m[4] = c * m[4] + s * m[6];
//   m[8] = c * m[8] + s * m[10];

//   m[2] = c * m[2] - s * mv0;
//   m[6] = c * m[6] - s * mv4;
//   m[10] = c * m[10] - s * mv8;
// }


// // Boolean value to switch direction
// let forward = true;

// // Create the renderer
// const phenomenon = new Phenomenon({
//   canvas: canvas,
//   settings: {
//     devicePixelRatio,
//     position: { x: 0, y: 0, z: 3 },
//     shouldRender: true,
//     uniforms,
//     onRender: r => {
//       const { uProgress, uModelMatrix } = r.uniforms;
//       // 
//       uProgress.value += forward ? step : -step;

//       if (uProgress.value >= 1) forward = false;
//       else if (uProgress.value <= 0) forward = true;

//       // rotateY(uModelMatrix.value, step * 2);
//       // rotateX(uModelMatrix.value, step * 2);
//     },
//   },
// });

// // Add an instance to the renderer
// // phenomenon.add('cube', showCube());
// phenomenon.add('mytest', showMyTest2());

// // for (let i = 0; i < 20; i += 1) {
// //   phenomenon.add('test'+i, showTest(i));
// // }



