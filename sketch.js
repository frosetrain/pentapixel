const gridWidth = 25;
const gridHeight = 15;
const transition = " transition duration-200 ease-in-out";
const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
</svg>
`;
const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
</svg>
`;
const toolIcons = [
    // move
    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrows-move" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10zM.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8z"/></svg>`,
    // brush
    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-brush" viewBox="0 0 16 16"><path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04zM4.705 11.912a1.23 1.23 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.39 3.39 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3.122 3.122 0 0 0 .126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005a.031.031 0 0 1-.007.004zm3.582-3.043.002.001h-.002z"/></svg>`,
    // eraser
    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-eraser-fill" viewBox="0 0 16 16"><path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm.66 11.34L3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"/></svg>`,
    // rect
    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/></svg>`,
];
const twColors = [
    "#ef4444",
    "#f97316",
    "#eab308",
    "#22c55e",
    "#3b82f6",
    "#d946ef",
    "#111827",
    "#6b7280",
    "#f3f4f6",
];

let pixelSize = 20;
let xOffset = 0;
let yOffset = 0;
let xGap = 0;
let yGap = 0;
let tool = 0;
let arr = [];
let colorModeBtn;
let checkbox;
let toolButtons = [];
let colorButtons = [];
let layerButtons = [];
let color = 0;
let rectX0;
let rectY0;
let rectX1;
let rectY1;
let currentLayer = 0;
let fill = false;

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
    drawGrid();
}

function setup() {
    arr = [];
    for (let l = 0; l < 3; ++l) {
        layer = [];
        for (let y = 0; y < gridHeight; ++y) {
            narr = [];
            for (let x = 0; x < gridWidth; ++x) {
                c = "";
                narr.push(c);
            }
            layer.push(narr);
        }
        arr.push(layer);
    }
    createCanvas(windowWidth, windowHeight);
    headerbar = createDiv();
    headerbar.position(0, 0);
    headerbar.class("flex justify-between w-screen p-4");
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

    tooltip = createDiv();
    tooltip.parent(headerbar);
    tooltip.class("text-gray-500 text-center my-auto");
    tooltip1 = createP("Use mouse wheel to zoom");
    tooltip1.parent(tooltip);
    tooltip2 = createButton("click to dismiss");
    tooltip2.parent(tooltip);
    tooltip2.class("text-xs");
    const dismissTooltip = function () {
        tooltip.addClass("hidden");
    };
    tooltip2.mousePressed(dismissTooltip);

    colorModeBtn = createButton();
    colorModeBtn.parent(headerbar);
    colorModeBtn.class(
        "text-black dark:text-white my-auto rounded-full dark:bg-accent-700 dark:hover:bg-accent-600 bg-accent-300 hover:bg-accent-400 p-2 shadow" +
            transition
    );
    colorModeBtn.mousePressed(switchTheme);

    // Populate the tool bar
    for (let i = 0; i < 4; ++i) {
        b = createButton();
        b.html(toolIcons[i]);
        b.parent(toolFlex);
        b.class("rounded-md text-black dark:text-white m-1 p-2" + transition);
        const callback = function () {
            toolButtons[tool].removeClass("bg-white");
            toolButtons[tool].removeClass("dark:bg-gray-600");
            toolButtons[tool].removeClass("shadow");
            tool = i;
            toolButtons[tool].addClass("bg-white dark:bg-gray-600 shadow");
            if (tool === 0 || tool === 2) {
                colorPickerDiv.addClass("invisible");
            } else {
                colorPickerDiv.removeClass("invisible");
            }
            if (tool === 3) {
                checkbox.removeClass("invisible");
            } else {
                checkbox.addClass("invisible");
            }
        };
        b.mousePressed(callback);
        toolButtons.push(b);
    }
    toolButtons[0].addClass("bg-white dark:text-white dark:bg-gray-600 shadow");

    // Create the color picker
    bottomBar = createDiv();
    bottomBar.position(0, height - 230);
    bottomBar.class("flex justify-between w-screen p-4 gap-8");
    colorWrapper = createDiv();
    colorWrapper.class("mt-auto");
    colorWrapper.parent(bottomBar);
    checkbox = createCheckbox("<span class='ml-2'>Fill</span>", false);
    checkbox.parent(colorWrapper);
    checkbox.class("invisible text-black dark:text-white pb-4" + transition);
    colorPickerDiv = createDiv();
    colorPickerDiv.parent(colorWrapper);
    colorPickerDiv.class(
        "invisible flex w-min mt-auto shadow rounded-lg bg-gray-200 dark:bg-gray-800 p-3 gap-4" +
            transition
    );
    for (let i = 0; i < twColors.length; ++i) {
        b = createButton("");
        b.class("rounded-full w-6 h-6 my-auto");
        b.parent(colorPickerDiv);
        b.style("background-color", twColors[i]);
        const callback = function () {
            colorButtons[color].removeClass("shadow");
            colorButtons[color].removeClass("scale-125");
            color = i;
            colorButtons[color].addClass("shadow scale-125");
        };
        b.mousePressed(callback);
        colorButtons.push(b);
    }
    colorButtons[0].addClass("shadow scale-125");
    layerPickerDiv = createDiv();
    layerPickerDiv.parent(bottomBar);
    layerPickerDiv.class(
        "w-min shadow rounded-lg bg-gray-200 dark:bg-gray-800 p-2" + transition
    );
    layersLabel = createP("Layers");
    layersLabel.parent(layerPickerDiv);
    layersLabel.class(
        "mx-1 mb-4 px-4 text-black dark:text-white text-center rounded bg-gray-300 dark:bg-gray-700" +
            transition
    );
    for (let i = 0; i < 3; ++i) {
        n = i + 1;
        b = createButton(n.toString());
        b.parent(layerPickerDiv);
        b.class(
            "block px-6 mx-auto text-center rounded-md text-black dark:text-white my-1 py-2" +
                transition
        );
        const callback = function () {
            layerButtons[currentLayer].removeClass("shadow");
            layerButtons[currentLayer].removeClass("bg-accent-400");
            layerButtons[currentLayer].removeClass("dark:bg-gray-600");
            currentLayer = i;
            layerButtons[currentLayer].addClass(
                "shadow bg-accent-400 dark:bg-gray-600"
            );
            drawGrid();
        };
        b.mousePressed(callback);
        layerButtons.push(b);
    }
    layerButtons[0].addClass("shadow bg-accent-400 dark:bg-gray-600");

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
    drawGrid();
}

function drawGrid() {
    clear();
    xGap = (width - pixelSize * gridWidth) / 2 + xOffset;
    yGap = (height - pixelSize * gridHeight) / 2 + yOffset;
    // draw the background checkers
    for (let y = 0; y < gridHeight; ++y) {
        for (let x = 0; x < gridWidth; ++x) {
            for (let a = 0; a < 2; ++a) {
                for (let b = 0; b < 2; ++b) {
                    noStroke();
                    transColor1 =
                        localStorage.theme === "light" ? "#d1d5db" : "#1f2937";
                    transColor2 =
                        localStorage.theme === "light" ? "#9ca3af" : "#374151";
                    fill((a + b) % 2 === 0 ? transColor1 : transColor2);
                    square(
                        xGap + pixelSize * x + (a * pixelSize) / 2,
                        yGap + pixelSize * y + (b * pixelSize) / 2,
                        pixelSize / 2
                    );
                }
            }
        }
    }

    // draw actual colored pixels
    for (let l = 2; l >= 0; --l) {
        for (let y = 0; y < gridHeight; ++y) {
            for (let x = 0; x < gridWidth; ++x) {
                // console.log(arr[y][x]);
                strokeWeight(1);
                stroke("black");
                fill(arr[l][y][x] === "" ? "rgba(0,0,0,0)" : arr[l][y][x]);
                square(xGap + pixelSize * x, yGap + pixelSize * y, pixelSize);
            }
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

function inCanvas() {
    return (
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
    );
}

function magicFormula(x, y) {
    canX = floor((x - xGap) / pixelSize);
    canY = floor((y - yGap) / pixelSize);
    return [canX, canY];
}

function drawRect(x0, y0, x1, y1) {
    // flip if needed
    if (x1 < x0) [x1, x0] = [x0, x1];
    if (y1 < y0) [y1, y0] = [y0, y1];
    if (checkbox.checked()) {
        for (let x = x0; x < x1; ++x) {
            for (let y = y0; y < y1; ++y) {
                arr[y][x] = tool === 1 ? twColors[color] : "";
            }
        }
    }
}

function mousePressed() {
    if (inCanvas() && tool === 3) {
        magic = magicFormula(mouseX, mouseY);
        rectX0 = magic[0];
        rectY0 = magic[1];
    }
}

function mouseReleased() {
    if (inCanvas() && tool === 3) {
        magic = magicFormula(mouseX, mouseY);
        rectX1 = magic[0];
        rectY1 = magic[1];
        drawRect(rectX0, rectY0, rectX1, rectY1);
    }
}

function mouseDragged(event) {
    if (tool === 0) {
        // Move tool
        xOffset += event.movementX;
        yOffset += event.movementY;
        drawGrid();
    } else if ((tool === 1 || tool === 2) && inCanvas()) {
        // Brush tool
        magic = magicFormula(mouseX, mouseY);
        arr[currentLayer][magic[1]][magic[0]] =
            tool === 1 ? twColors[color] : "";
        drawGrid();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    drawGrid();
}
