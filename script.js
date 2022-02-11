const container = document.getElementById("container");
const gridSize = document.getElementById("gridSize");
const gBtn = document.getElementById("generateBtn");
gBtn.addEventListener("click", () => {
    if (gridSize.value < 100) {
        makeRows(gridSize.value);
    }
    const gItems = document.querySelectorAll('.gItem');
    console.log(gItems);
    gItems.forEach(element => {
        element.onmouseover = () => element.style.backgroundColor= "black";
    })
    gBtn.value = "reset";
    gBtn.addEventListener("click", () => location.reload())

})

function makeRows(grd) {
    container.style.setProperty('--grid-rows', grd);
    container.style.setProperty('--grid-cols', grd);
    for(c = 0; c < (grd * grd); c++) {
        let cell = document.createElement('div');
        cell.innterText = (c + 1);
        container.appendChild(cell).className = "gItem";

    };
    
};

