const container = document.getElementById("container");
const slider = document.getElementById("sizeRange")
const clearBtn = document.getElementById("clearBtn")



function makeGrid(grd) {
    container.style.setProperty('--grid-rows', grd);
    container.style.setProperty('--grid-cols', grd);
    for(c = 0; c < (grd * grd); c++) {
        let cell = document.createElement('div');
        cell.innterText = (c + 1);
        container.appendChild(cell).className = "gItem";

    };
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(element => {
        element.onmouseover = () => element.style.backgroundColor= "black";
    })
};

function pixelSize() {
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.remove());
    makeGrid(slider.value);
    
}

makeGrid(16);

slider.addEventListener("mouseup", pixelSize)
clearBtn.addEventListener("click", () => {
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.style.backgroundColor = "transparent")
})