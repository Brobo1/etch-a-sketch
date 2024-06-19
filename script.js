const container = document.getElementById("grid-container");
const gridInput = document.getElementById("grid-input");
const gridSizeBtn = document.getElementById("grid-size-btn");
const colorPicker = document.getElementById("color-picker");
const randomColorCheckbox = document.getElementById("random-checkbox");

const gridSize = 32;
const cellSize = 30;

const createGrid = (gridSize, cellSize) => {
  container.innerHTML = "";
  for (let x = 0; x < gridSize; x++) {
    let cols = document.createElement("div");
    cols.className = "cols";
    for (let y = 0; y < gridSize; y++) {
      let cells = document.createElement("div");
      cells.className = "cell";
      cells.style.width = `${cellSize}px`;
      cells.style.height = `${cellSize}px`;
      cols.appendChild(cells);
    }
    container.appendChild(cols);
  }
};

const random = () => {
  return Math.floor(Math.random() * 255);
};

const randomColor = () => {
  return `rgb(${random()},${random()},${random()})`;
};

createGrid(gridSize, cellSize);

gridSizeBtn.addEventListener("click", () => {
  if (
    gridInput.value !== "" &&
    gridInput.value >= 1 &&
    gridInput.value <= 100
  ) {
    createGrid(gridInput.value, cellSize * (gridSize / gridInput.value));
  } else {
    alert("Enter number between 1 and 100");
  }
});

container.addEventListener("dragstart", (e) => e.preventDefault());

let lastCell;
container.addEventListener("mousemove", (e) => {
  console.log(e.target);
  if (
    e.target.className === "cell" &&
    e.buttons === 1 &&
    lastCell !== e.target
  ) {
    lastCell = e.target;
    e.target.style.background = randomColorCheckbox.checked
      ? randomColor()
      : colorPicker.value;
  }
});
