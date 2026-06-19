function preload() {}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    // -- game loop --
    
    // process input
    // update
    // render
    // end game?
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function init() {
    window.preload = preload;
    window.setup = setup;
    window.draw = draw;
    window.windowResized = windowResized;
}

init();
