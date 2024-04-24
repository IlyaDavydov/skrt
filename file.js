const colorChoice = document.querySelector("#colorPicker");
const backgroundColorChoice = document.querySelector("#backgroundPicker");
const slider = document.querySelector(".slider");
const gridSingature = document.querySelector(".slidecontainer p");
const grid = document.querySelector(".grid");
const firstRow = document.querySelector("#first");
let colorValue = "#FF5A60";
let backgroundColorValue = "#496B53";
colorChoice.defaultValue = colorValue;
backgroundColorChoice.defaultValue = backgroundColorValue;
const switchElement = document.querySelector('.info0 input[type="checkbox"]');
const switchElement2 = document.querySelector('.info4 input[type="checkbox"]');
let flag = 0;


colorChoice.addEventListener('input', function() {
    colorValue = colorChoice.value;
});

backgroundColorChoice.addEventListener('input', function() {
    grid.style.backgroundColor = backgroundColorChoice.value;
});


const squares = document.querySelectorAll(".square");
squares.forEach(square => {
    square.addEventListener("mouseover", function() {
        if (mode() == 0) {
            square.style.backgroundColor = colorValue;
        }
        if (mode() == 1) {
            square.style.backgroundColor = grid.style.backgroundColor;
        }  
    });
});

slider.addEventListener("input", function() {
    const currentSquares = document.querySelectorAll(".square");
    currentSquares.forEach(square => {
        square.style.backgroundColor = grid.style.backgroundColor;
    })
    gridSingature.textContent = slider.value + " x " + slider.value + " grid";
    let firstRowLength = firstRow.children.length;
    console.log(firstRowLength);
    while (grid.children.length > slider.value) {
        grid.removeChild(grid.lastChild);
    }
    while (grid.children.length < slider.value) {
        let tempRow = document.createElement("div");
        tempRow.classList.add("row-initial");
        tempRow.classList.add("new");
        for (let i = 0; i < firstRowLength; i++) {
            let tempSquare = document.createElement("div");
            tempSquare.classList.add("square");
            if (mode2() == 1) {
                tempSquare.style.border = "none";
            }
            tempRow.appendChild(tempSquare);
        }
        grid.appendChild(tempRow);
    }
    const rows = document.querySelectorAll(".row-initial");
    rows.forEach(row => {
        tempLength = row.children.length;
        while (row.children.length > slider.value) {
            row.removeChild(row.lastChild);
        }
        while (row.children.length < slider.value) {
            let tempSquare = document.createElement("div");
            tempSquare.classList.add("square");
            if (mode2() == 1) {
                tempSquare.style.border = "none";
            }
            row.appendChild(tempSquare);
        }
    }) 

    const newSquares = document.querySelectorAll(".square");
    newSquares.forEach(square => {
    square.addEventListener("mouseover", function() {
        if (mode() == 0) {
            square.style.backgroundColor = colorValue;
            console.log("OFF");
        }
        if (mode() == 1) {
            console.log("ON");
            square.style.backgroundColor = grid.style.backgroundColor;
        }  
    });
});
});

switchElement.addEventListener("change", function() {
    if (this.checked) {
      flag = 1;
    } else {
      flag =  0;
    }
  });

  function mode() {
    if (flag == 1) {
        return 1;
    }
    else {
        return 0;
    }
  }

  function mode2() {
    if (flagBorder == 1) {
        return 1;
    }
    else {
        return 0;
    }
  }

  let flagBorder = 0;

  switchElement2.addEventListener("change", function() {
    const newSquares = document.querySelectorAll(".square");
    if (this.checked) {
        newSquares.forEach(square => {
            square.style.border = "none";
            flagBorder = 1;
        });
    }
    else {
        newSquares.forEach(square => {
            square.style.border = "solid #A79B94 1px";
            flagBorder = 0;
        });
    }   
  });