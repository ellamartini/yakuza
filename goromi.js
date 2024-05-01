

function preload() {

}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("goromiSketch-container");

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    textSize(30);
    frameRate(12);
    text("❤️", pmouseX, pmouseY);
}