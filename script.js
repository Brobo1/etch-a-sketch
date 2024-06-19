const container = document.getElementById("grid-container");
const gridInput = document.getElementById("grid-input");
const gridSizeBtn = document.getElementById("grid-size-btn");
const colorPicker = document.getElementById("color-picker");
const randomColorCheckbox = document.getElementById("random-checkbox");
let cols;
let cells;
const gridSize = 32;
const cellSize = 20;

const createGrid = (gridSize, cellSize) => {
  container.innerHTML = "";
  for (let x = 0; x < gridSize; x++) {
    cols = document.createElement("div");
    cols.className = "cols";
    for (let y = 0; y < gridSize; y++) {
      cells = document.createElement("div");
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
  if (gridInput.value !== "") {
    createGrid(
      gridInput.value,
      Math.floor(cellSize * (gridSize / gridInput.value)),
    );
  } else {
    alert("ENTER NOMBER BRUH");
  }
});

container.addEventListener("dragstart", (e) => e.preventDefault());

container.addEventListener("mousemove", (e) => {
  const target = e.target;
  if (target.className === "cell" && e.buttons) {
    if (/*target.style.backgroundColor === ""*/ true)
      target.style.background = randomColorCheckbox.checked
        ? randomColor()
        : colorPicker.value;
  }
});
