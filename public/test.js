function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  console.log("working");
}

function init() {
  // window.preload = preload;
  window.setup = setup;
  window.draw = draw;
  // window.keyPressed = keyPressed;
  // window.mousePressed = mousePressed;
  // window.windowResized = windowResized;
}

init();