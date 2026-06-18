// We make a connection to the backend
const socket = io();

// Variables
let currentPrice = 50000;
let priceHistory = [];
const MAX_DATA_POINTS = 50; // How many data points to show in the graph at once

// Soccket event listener
socket.on("marketUpdate", (data) => {
    currentPrice = data.btcPrice;

    // Voeg de nieuwe prijs toe aan onze geschiedenis
    priceHistory.push(currentPrice);

    // Als de array te lang wordt, verwijder het oudste punt (zorgt voor het scroll-effect)
    if (priceHistory.length > MAX_DATA_POINTS) {
        priceHistory.shift();
    }
});

function setup() {
    const canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("canvas-1"); // Plakt het netjes in de HTML
}

function draw() {
    background(18, 18, 24); // Donkere gamer/dashboard achtergrond

    // Teken het dashboard grid (achtergrond lijnen)
    stroke(40, 40, 50);
    strokeWeight(1);
    for (let i = 0; i < width; i += 50) {
        line(i, 0, i, height);
    }
    for (let i = 0; i < height; i += 50) {
        line(0, i, width, i);
    }

    // Teken de actuele prijs als tekst bovenaan
    noStroke();
    fill(255);
    textSize(22);
    textFont("sans-serif");
    text(`BTC/USD Live: $${currentPrice.toFixed(2)}`, 30, 40);

    // Bepaal de min en max waarde in onze geschiedenis om de grafiek te schalen
    if (priceHistory.length > 1) {
        let minPrice = Math.min(...priceHistory) - 50;
        let maxPrice = Math.max(...priceHistory) + 50;

        // Teken de koerslijn (Line Chart)
        noFill();
        stroke(0, 230, 118); // Felgroene lijn (stijgende trend vibe)
        strokeWeight(3);

        beginShape();
        for (let i = 0; i < priceHistory.length; i++) {
            // Bereken de X-positie (verdeeld over het scherm)
            let x = map(i, 0, MAX_DATA_POINTS - 1, 50, width - 50);
            // Bereken de Y-positie (geschaald naar de prijsomvang)
            let y = map(priceHistory[i], minPrice, maxPrice, height - 50, 80);

            vertex(x, y);
        }
        endShape();

        // Teken een pulserend stipje op het allerlaatste (meest actuele) datapunt
        let lastX = map(
            priceHistory.length - 1,
            0,
            MAX_DATA_POINTS - 1,
            50,
            width - 50,
        );
        let lastY = map(
            priceHistory[priceHistory.length - 1],
            minPrice,
            maxPrice,
            height - 50,
            80,
        );

        fill(0, 230, 118, 150);
        noStroke();
        ellipse(lastX, lastY, 12 + sin(frameCount * 0.1) * 4); // Pulserend effect
    }
}

function mousePressed() {
    socket.emit("buyStock");
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function init() {
    // window.preload = preload;
    window.setup = setup;
    window.draw = draw;
    // window.keyPressed = keyPressed;
    window.mousePressed = mousePressed;
    window.windowResized = windowResized;
}

init();
