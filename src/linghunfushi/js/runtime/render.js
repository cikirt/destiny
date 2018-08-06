import cloverFuncs from '../pages/clover'
import playingFuncs from '../pages/playing'
import showRankList from '../pages/show-rank'
import showScoreFuncs from '../pages/show-score'

/**
 * 渲染函数
 * ctx的层级永远在ctxAssociate之上
 */
export default function render() {
  // this.ctx.clearRect(0, 0, screenWidth * pixelRatio, -screenHeight * pixelRatio)
  // this.ctxAssociate.clearRect(0, 0, screenWidth * pixelRatio, -screenHeight * pixelRatio)


  if (dataBus.gameStatus.toLowerCase() === 'clover') {
    cloverFuncs.call(this)
    this.mook.drawMook()
    this.ctx.drawImage(this.canvasAssociate,0,0)
    this.ctx.drawImage(this.canvasGUI, 0, 0)
    // this.gl.wxBindCanvasTexture(this.gl.TEXTURE_2D, this.canvasAssociate)
    // const texture = this.gl.createTexture()
    // this.gl.bindTexture(this.gl.TEXTURE_2D, texture)
    // console.log(this.gl.texImage2D)
    // this.gl.texImage2D(
    // this.gl.TEXTURE_2D, 
    // 0, 
    // this.gl.RGBA,
    // this.gl.RGBA, 
    // this.gl.UNSIGNED_BYTE, 
    // this.canvasAssociate);
    return
  }

  // if (dataBus.gameStatus.toLowerCase() === 'playing') {
  //   playingFuncs.call(this)
  //   this.mook.drawMook()

  //   return
  // }

  // if (dataBus.gameStatus.toLowerCase() === 'show_score') {
  //   showScoreFuncs.call(this)
  //   this.mook.drawMook()

  //   return
  // }

  // if (dataBus.gameStatus.toLowerCase() === 'show_rank') {
  //   showRankList.call(this)
  //   this.mook.drawMook()
  // }


  // var time = Date.now() * 0.001;
  // scene.traverse(function (object) {
  //   if (object.isLine) {
  //     object.rotation.x = 0.25 * time;
  //     object.rotation.y = 0.25 * time;
  //   }
  // });

  // var delta = clock.getDelta() * spawnerOptions.timeScale;
  // tick += delta;
  // if (tick < 0) tick = 0;
  // if (delta > 0) {
  //   options.position.x = Math.sin(tick * spawnerOptions.horizontalSpeed) * 20;
  //   options.position.y = Math.sin(tick * spawnerOptions.verticalSpeed) * 10;
  //   options.position.z = Math.sin(tick * spawnerOptions.horizontalSpeed + spawnerOptions.verticalSpeed) * 5;
  //   for (var x = 0; x < spawnerOptions.spawnRate * delta; x++) {
  //     // Yep, that's really it.	Spawning particles is super cheap, and once you spawn them, the rest of
  //     // their lifecycle is handled entirely on the GPU, driven by a time uniform updated below
  //     particleSystem.spawnParticle(options);
  //   }
  // }
  // particleSystem.update(tick);

  // gpuCompute.compute();
  // particleUniforms.texturePosition.value = gpuCompute.getCurrentRenderTarget(positionVariable).texture;
  // particleUniforms.textureVelocity.value = gpuCompute.getCurrentRenderTarget(velocityVariable).texture;

  // renderer.render(scene, camera);
}