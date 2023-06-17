let pixelSize = 10;
let gridWidth = 16;
let gridHeight = 9;
let xOffset = 0;
let yOffset = 0;
let xGap = 0;
let yGap = 0;
let moveView = false;

let arr = [];
const transition = " transition duration-200 ease-in-out";
const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
</svg>
`;
const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
</svg>
`;
const viewIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrows-move" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10zM.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8z"/>
</svg>`;
const brushIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-brush" viewBox="0 0 16 16">
  <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04zM4.705 11.912a1.23 1.23 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.39 3.39 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3.122 3.122 0 0 0 .126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005a.031.031 0 0 1-.007.004zm3.582-3.043.002.001h-.002z"/>
</svg>`;

let colorModeBtn;

function switchTheme() {
    localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
    if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        document.documentElement.classList.add("dark");
        colorModeBtn.html(moonIcon);
    } else {
        document.documentElement.classList.remove("dark");
        colorModeBtn.html(sunIcon);
    }
}

function toggleViewMode() {
    if (moveView) moveView = false;
    else moveView = true;
}

function setup() {
    arr = [];
    for (let y = 0; y < gridHeight; ++y) {
        narr = [];
        for (let x = 0; x < gridWidth; ++x) {
            c = "#808080";
            narr.push(c);
        }
        arr.push(narr);
    }
    createCanvas(windowWidth, windowHeight);
    headerbar = createDiv();
    headerbar.position(0, 0);
    headerbar.class("flex justify-between w-screen m-4");
    toolDiv = createDiv();
    toolDiv.parent(headerbar);
    toolDiv.class(
        "w-min shadow rounded-lg bg-gray-200 dark:bg-gray-800 p-0.5" +
            transition
    );
    toolLabel = createP("Tools");
    toolLabel.parent(toolDiv);
    toolLabel.class(
        "m-1 text-black dark:text-white text-center rounded bg-gray-300 dark:bg-gray-700" +
            transition
    );
    toolFlex = createDiv();
    toolFlex.parent(toolDiv);
    toolFlex.class("flex");
    brushButton = createButton();
    brushButton.html(brushIcon);
    brushButton.parent(toolFlex);
    brushButton.class(
        "rounded-md m-1 p-2 bg-white text-black dark:text-white dark:bg-gray-600 shadow" +
            transition
    );
    viewButton = createButton();
    viewButton.html(viewIcon);
    viewButton.parent(toolFlex);
    viewButton.class(
        "rounded-md text-black dark:text-white m-1 p-2" + transition
    );
    colorModeBtn = createButton();
    colorModeBtn.parent(headerbar);
    colorModeBtn.class(
        "my-auto rounded-full bg-accent-300 hover:bg-accent-400 p-2 shadow" +
            transition
    );
    colorModeBtn.mousePressed(switchTheme);

    if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        localStorage.theme = "dark";
        document.documentElement.classList.add("dark");
    } else {
        localStorage.theme = "light";
        document.documentElement.classList.remove("dark");
    }
    if (localStorage.theme === "dark") {
        document.documentElement.classList.add("dark");
        colorModeBtn.html(moonIcon);
    } else {
        document.documentElement.classList.remove("dark");
        colorModeBtn.html(sunIcon);
    }

    frameRate(30);
    // fill("red");
    drawGrid();
}

function drawGrid() {
    clear();
    xGap = (width - pixelSize * gridWidth) / 2 + xOffset;
    yGap = (height - pixelSize * gridHeight) / 2 + yOffset;
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
        // console.log(canX, canY);
        arr[canY][canX] = "#00ff00";
        drawGrid();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    drawGrid();
}
