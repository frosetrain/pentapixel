let s = 10;
let w = 16;
let h = 9;
let xoff = 0;
let yoff = 0;
let moveView = true;

let arr = [];

function setup() {
    arr = [];
    colorMode(RGB);
    for (let y = 0; y < h; ++y) {
        narr = [];
        for (let x = 0; x < w; ++x) {
            c = "#ff0000";
            narr.push(c);
        }
        arr.push(narr);
    }
    createCanvas(windowWidth, windowHeight);
    b = createButton("hi");
    b.position(100, 100);
    b.class("m-4 w-24 rounded bg-blue-300 p-1 shadow");
    // pick = createColorPicker()
    frameRate(30);
    fill("red");
    console.log(arr);
    drawGrid((width - s * w) / 2 + xoff, (height - s * h) / 2 + yoff, s);
}

function drawGrid(gx, gy, gs) {
    background(220);
    fill("red");
    text(moveView, 100, 100);
    for (let y = 0; y < h; ++y) {
        for (let x = 0; x < w; ++x) {
            console.log(arr[y][x]);
            fill(arr[y][x]);
            square(gx + gs * x, gy + gs * y, gs);
        }
    }
}

function mouseWheel(event) {
    if (event.delta > 0)
        // zoom out
        s /= 1.5;
    // zoom in
    else s *= 1.5;
    // fill("red");
    drawGrid((width - s * w) / 2 + xoff, (height - s * h) / 2 + yoff, s);
}

function mouseDragged(event) {
    if (moveView) {
        // console.log(event);
        xoff += event.movementX;
        yoff += event.movementY;
        drawGrid((width - s * w) / 2 + xoff, (height - s * h) / 2 + yoff, s);
    }
}

function mousePressed() {
    if (
        !moveView &&
        mouseX > (width - s * w) / 2 + xoff &&
        mouseX < (width - s * w) / 2 + xoff + s * w &&
        mouseY > (height - s * h) / 2 + yoff &&
        mouseY < (height - s * h) / 2 + yoff + s * h
    ) {
        fill("blue");
        circle(mouseX, mouseY, 10);
    }
}

function windowResized() {
    setup();
}
