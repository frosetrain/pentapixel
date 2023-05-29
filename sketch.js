let pixelSize = 10;
let gridWidth = 16;
let gridHeight = 9;
let xOffset = 0;
let yOffset = 0;
let xGap = 0;
let yGap = 0;
let moveView = false;

let arr = [];

function toggleViewMode() {
    if (moveView) moveView = false;
    else moveView = true;
}

function setup() {
    arr = [];
    for (let y = 0; y < gridHeight; ++y) {
        narr = [];
        for (let x = 0; x < gridWidth; ++x) {
            c = "#ff0000";
            narr.push(c);
        }
        arr.push(narr);
    }
    createCanvas(windowWidth, windowHeight);
    b = createButton("hi");
    b.mousePressed(toggleViewMode);
    b.position(10, 10);
    b.class("m-4 w-24 rounded bg-blue-300 p-1 shadow hover:bg-blue-400");
    // pick = createColorPicker()
    frameRate(30);
    fill("red");
    // console.log(arr);
    drawGrid();
}

function drawGrid() {
    xGap = (width - pixelSize * gridWidth) / 2 + xOffset;
    yGap = (height - pixelSize * gridHeight) / 2 + yOffset;
    background(220);
    for (let y = 0; y < gridHeight; ++y) {
        for (let x = 0; x < gridWidth; ++x) {
            // console.log(arr[y][x]);
            fill(arr[y][x]);
            square(xGap + pixelSize * x, yGap + pixelSize * y, pixelSize);
        }
    }
}

function mouseWheel(event) {
    if (event.delta > 0)
        // zoom out
        pixelSize /= 1.5;
    // zoom in
    else pixelSize *= 1.5;
    // fill("red");
    drawGrid();
}

function mouseDragged(event) {
    if (moveView) {
        // console.log(event);
        xOffset += event.movementX;
        yOffset += event.movementY;
        drawGrid();
    } else if (
        mouseX > (width - pixelSize * gridWidth) / 2 + xOffset &&
        mouseX <
            (width - pixelSize * gridWidth) / 2 +
                xOffset +
                pixelSize * gridWidth &&
        mouseY > (height - pixelSize * gridHeight) / 2 + yOffset &&
        mouseY <
            (height - pixelSize * gridHeight) / 2 +
                yOffset +
                pixelSize * gridHeight
    ) {
        canX = floor((mouseX - xGap) / pixelSize);
        canY = floor((mouseY - yGap) / pixelSize);
        console.log(canX, canY);
        arr[canY][canX] = "#00ff00";
        drawGrid();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    drawGrid();
}
