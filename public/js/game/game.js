function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0);
	drawInputBox();
}

function drawInputBox() {
	rect(50, 50, 200, 50);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function init() {
	// window.preload = preload;
	window.setup = setup;
	window.draw = draw;
	// window.keyPressed = keyPressed;
	// window.mousePressed = mousePressed;
	window.windowResized = windowResized;
}

init();
