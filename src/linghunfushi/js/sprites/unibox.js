var subdivisions = 6;
var recursion = 1;
var points = Geometries.hilbert3D(new THREE.Vector3(0, 0, 0), 25.0, recursion, 0, 1, 2, 3, 4, 5, 6, 7);
var spline = new THREE.CatmullRomCurve3(points);
var samples = spline.getPoints(points.length * subdivisions);
var geometrySpline = new THREE.BufferGeometry().setFromPoints(samples);
var line = new THREE.Line(geometrySpline, new THREE.LineDashedMaterial({
  color: 0xffffff,
  dashSize: 1,
  gapSize: 0.5
}));
line.computeLineDistances();
objects.push(line);
scene.add(line);
var geometryCube = cube(50);
var lineSegments = new THREE.LineSegments(geometryCube, new THREE.LineDashedMaterial({
  color: 0xffaa00,
  dashSize: 3,
  gapSize: 1,
  linewidth: 2
}));
lineSegments.computeLineDistances();
objects.push(lineSegments);
scene.add(lineSegments);


// 创造构成线段的点集合
function createGeometry() {
  var geometry = new THREE.BufferGeometry();
  var vertices = [];
  var vertex = new THREE.Vector3();
  var lll = 100
  var p = [{
      x: lll,
      y: 0,
      z: 0
    }, {
      x: 0,
      y: 0,
      z: lll
    },
    {
      x: -1 * lll,
      y: 0,
      z: 0
    }, {
      x: 0,
      y: 0,
      z: -1 * lll
    }
  ]
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

var i, line, vertex1, vertex2, material, p,
  parameters = [
    [5.25, 0xff7700, 1, 2],
    [0.5, 0xff9900, 1, 1],
    [0.75, 0xffaa00, 0.75, 1],
    [1, 0xffaa00, 0.5, 1],
    [1.25, 0x000833, 0.8, 1],
    [3.0, 0xaaaaaa, 0.75, 2],
    [3.5, 0xffffff, 0.5, 1],
    [4.5, 0xffffff, 0.25, 1],
    [5.5, 0xffffff, 0.125, 1]
  ];
var geometry = createGeometry();
for (i = 0; i < 1; ++i) {
  p = parameters[i];
  material = new THREE.LineBasicMaterial({
    color: p[1],
    opacity: p[2],
    linewidth: p[3]
  });
  line = new THREE.LineSegments(geometry, material);
  line.scale.x = line.scale.y = line.scale.z = p[0];
  line.userData.originalScale = p[0];
  // line.rotation.y = Math.random() * Math.PI;
  line.updateMatrix();
  scene.add(line);
}


function cube(size) {
  var h = size * 0.5;
  var geometry = new THREE.BufferGeometry();
  var position = [];
  position.push(-h, -h, -h, -h, h, -h, -h, h, -h,
    h, h, -h,
    h, h, -h,
    h, -h, -h,
    h, -h, -h, -h, -h, -h, -h, -h, h, -h, h, h, -h, h, h,
    h, h, h,
    h, h, h,
    h, -h, h,
    h, -h, h, -h, -h, h, -h, -h, -h, -h, -h, h, -h, h, -h, -h, h, h,
    h, h, -h,
    h, h, h,
    h, -h, -h,
    h, -h, h
  );
  geometry.addAttribute('position', new THREE.Float32BufferAttribute(position, 3));
  return geometry;
}