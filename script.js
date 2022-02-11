const container = document.getElementById("container");
const gridSize = document.getElementById("gridSize");
const gBtn = document.getElementById("generateBtn");
const slider = document.getElementById("sizeRange")



gBtn.addEventListener("click", () => {
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.remove());
    if (gridSize.value < 100) {
        makeGrid(gridSize.value);
    }
    const gItems = document.querySelectorAll('.gItem');
    console.log(gItems);
    gItems.forEach(element => {
        element.onmouseover = () => element.style.backgroundColor= "black";
    })
    gBtn.value = "reset";
    gBtn.addEventListener("click", () => location.reload())

})

function makeGrid(grd) {
    container.style.setProperty('--grid-rows', grd);
    container.style.setProperty('--grid-cols', grd);
    for(c = 0; c < (grd * grd); c++) {
        let cell = document.createElement('div');
        cell.innterText = (c + 1);
        container.appendChild(cell).className = "gItem";

    };
    
};

function pixelSize() {
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.remove());
    makeGrid(slider.value);
}

makeGrid(16);

slider.addEventListener("mouseup", pixelSize)