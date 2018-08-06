// import BackGround from 'sprites/background'
// import FixProgress from 'sprites/fix-progress'
// import Score from 'sprites/score'
// import Pause from 'sprites/pause'
// import Music from 'sprites/music'
// import Sight from 'sprites/sight'
// import Hourglass from 'sprites/hourglass'
// import Boxes from 'sprites/boxes'
// import Water from 'sprites/water'
// import Light from 'sprites/light'
// import GameOver from 'sprites/gameover'
import Clover from 'sprites/clover'
// import ScorePlus from 'sprites/score-plus'
import Mook from 'sprites/mook'

// import audio from 'music/index'

import render from 'runtime/render'
import update from 'runtime/update'
// import touchEvent from 'runtime/touch-event'
import userData from 'runtime/user-data'

// import Socket from 'api/socket'

// import pluginFuncs from 'plugins/index'

import {
  GAME_DEBUG
} from 'configs/options'

// import Geometries from 'libs/geometries.js'
// import * as dat from 'libs/dat.gui.min.js'
// import 'libs/controls/OrbitControls.js'
// import 'libs/controls/TrackballControls.js'
// import 'libs/objects/Sky.js'
// import 'libs/GPUParticleSystem.js'
// import GPUComputationRenderer from 'libs/GPUComputationRenderer'
// import * as GPU1 from 'sprites/gpu1'
import Level0 from "levels/level0";

// 设定帧率
wx.setPreferredFramesPerSecond(60)

// 修正canvas分辨率
canvas.width = canvas.width * pixelRatio
canvas.height = canvas.height * pixelRatio
canvasAssociate.height = canvasAssociate.height * pixelRatio
canvasAssociate.width = canvasAssociate.width * pixelRatio
sharedCanvas.height = sharedCanvas.height * pixelRatio
sharedCanvas.width = sharedCanvas.width * pixelRatio

canvasGUI.height = canvasGUI.height * pixelRatio
canvasGUI.width = canvasGUI.width * pixelRatio


let ctx = canvas.getContext('2d')
// 主屏获取webgl上下文
let gl = canvasAssociate.getContext('webgl')
// 初始化渲染器
let renderer = new THREE.WebGLRenderer({
  context: gl,
  antialias: true
})
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

let level0 = new Level0(renderer)

// 副屏，用来绘制GUI
// let ctxAssociate = canvasAssociate.getContext('2d')
// 分屏屏,用来绘制分享界面
let sharedCtx = sharedCanvas.getContext('2d')

let canvasGUICtx = canvasGUI.getContext('2d')

wx.setPreferredFramesPerSecond(60)

export default class Main {
  constructor() {
    //调试时便于查看属性
    if (GAME_DEBUG) window.main = this

    this.level0 = level0
    this.canvasAssociate = canvasAssociate
    this.canvas = canvas
    this.canvasGUI = canvasGUI
    this.canvasGUICtx = canvasGUICtx
    this.gl = gl
    this.ctx = ctx
    // this.ctxAssociate = ctxAssociate
    this.sharedCtx = sharedCtx
    // 维护aniID
    this.aniId = 0

    this.dataBus = window.dataBus

    this.worker = wx.createWorker('/js/worker/index.js')

    // this.pluginFuncs = pluginFuncs

    //   this.audio = audio

    //   this.background = new BackGround(ctx)
    //   this.boxes = new Boxes(ctx)
    //   this.water = new Water(ctx)
    //   this.light = new Light(ctx)

    //   this.score = new Score(ctx)
    //   this.fixProgress = new FixProgress(ctx)
    //   this.pause = new Pause(ctx)
    //   this.music = new Music(ctx)
    //   this.sight = new Sight(ctx)
    //   this.hourglass = new Hourglass(ctx)
    //   this.gameOver = new GameOver(ctx)
    this.clover = new Clover(canvasGUICtx)
    //   this.scorePlus = new ScorePlus(ctx)
    this.mook = new Mook(canvasGUICtx)

    this.userData = userData.bind(this)
    //   this.touchEvent = touchEvent.bind(this)
    this.render = render.bind(this)
    this.update = update.bind(this)

    //   this.socket = new Socket()
    //   window.socket = this.socket

    //   this.userData()

    //   this.touchEvent()

    //   this.pluginFuncs()

    this.loop()

    //   this.socket.open()
  }

  loop() {
    this.update()
    this.render()
    this.aniId = window.requestAnimationFrame(this.loop.bind(this))
  }
}