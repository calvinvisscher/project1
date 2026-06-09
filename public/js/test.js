function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(0);
	drawInputBox();
}

function drawInputBox() {
	rect(50, 50, 200, 50);
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
