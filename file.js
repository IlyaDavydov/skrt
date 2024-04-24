/*const squares = document.querySelectorAll(".square");
const rows = document.querySelectorAll(".row");
const colorChoice = document.querySelector("#colorPicker");
const slider = document.querySelector(".slider");
const gridSingature = document.querySelector(".slidecontainer p");
const grid = document.querySelector(".grid");
let colorValue = "black";
let currentValueOfGrid = 16;

squares.forEach(square => {
    square.addEventListener("mouseover", function() {
        square.style.backgroundColor = colorValue;
    });
});

colorChoice.addEventListener('input', function() {
    colorValue = colorChoice.value;
});

slider.addEventListener("input", function() {
    let valueOfFunc = currentValueOfGrid;
    currentValueOfGrid = slider.value;
    gridSingature.textContent = currentValueOfGrid + " x " + currentValueOfGrid + " grid";
    rows.forEach(row => {
        if (valueOfFunc < currentValueOfGrid) {
            const numToAdd = currentValueOfGrid - valueOfFunc;
            for (let i = 0; i < numToAdd; i++) {
                const tempSquare = document.createElement("div");
                tempSquare.classList.add("square");
                row.appendChild(tempSquare);
            };
        };
        if (valueOfFunc > currentValueOfGrid) {
            const numToDelete = valueOfFunc - currentValueOfGrid;
            for (let i = 0; i < numToDelete; i++) {
                row.removeChild(row.lastChild);
            };
        }; 
    });
    if (valueOfFunc < currentValueOfGrid) {
        const numToAdd2 = currentValueOfGrid - valueOfFunc;
        for (let i = 0; i < numToAdd2; i++) {
            const tempRow = document.createElement("div");
            tempRow.classList.add("row");
            grid.appendChild(tempSquare);
        };
    };
    if (valueOfFunc > currentValueOfGrid) {
        const numToDelete2 = valueOfFunc - currentValueOfGrid;
        for (let i = 0; i < numToDelete2; i++) {
            grid.removeChild(grid.lastChild);
        };
    }; 
});
*/
