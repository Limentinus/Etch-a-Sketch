const container = document.getElementById("container");
const cNr = document.getElementById("columnsNr");
console.log(cNr.value);
const rNr = document.getElementById("rowsNr");
console.log(rNr.value);
const gBtn = document.getElementById("generateBtn");
gBtn.addEventListener("click", () => {
    if (rNr.value < 100 && cNr.value < 100) {
        makeRows(rNr.value, cNr.value);
    }
    const gItems = document.querySelectorAll('.gItem');
    console.log(gItems);
    gItems.forEach(element => {
        element.onmouseover = () => element.style.backgroundColor= "black";
    })
    gBtn.value = "reset";
    gBtn.addEventListener("click", () => location.reload())

})

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for(c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        cell.innterText = (c + 1);
        container.appendChild(cell).className = "gItem";

    };
    
};

