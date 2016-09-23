var mybox = new Box();

function setup() {
  var myCanvas = createCanvas(200, 200, WEBGL);
  myCanvas.parent('webglContainer');
}

function draw() {
  background('rgba(0, 0, 0, 0)');
  mybox.rotate();
  mybox.show();
}
