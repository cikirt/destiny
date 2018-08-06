import '../libs/controls/OrbitControls.js'
import Sky from '../sprites/sky'
export default class Level0 {
  constructor(renderer) {
    this.renderer = renderer
    this.init()

  }
  init() {
    // 场景0初始化
    this.scene = new THREE.Scene()
    // 场景0相机初始化
    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 100, 20000);
    this.camera.position.set(0, 100, 200);
    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    //controls0.maxPolarAngle = Math.PI / 2;
    this.controls.enableZoom = false;
    this.controls.enablePan = false;
    var sky =new Sky(this.scene)
    this.renderer.render(this.scene, this.camera);
  }
  update(){
    this.renderer.render(this.scene, this.camera);
  }
}