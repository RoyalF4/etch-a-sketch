const container = document.querySelector('.container');
const button = document.querySelector('button');
const DEFAULT_SIZE = 64;
const CONTAINER_WIDTH = 640;

function createCell(size) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  cell.style.width = `${size}px`;
  cell.style.height = `${size}px`;
  cell.addEventListener('mouseenter', () => {
    cell.style.backgroundColor = genderateRBG();
  })
  container.appendChild(cell);
}

button.addEventListener('click', () => {
  let size;
  do {
    size = prompt("Enter the size of the grid(max 100):");
  }while(size > 100);
  container.innerHTML = "";
  generateGrid(size);
})


function generateGrid(cellsPerSide) {
  let cellSize = CONTAINER_WIDTH / cellsPerSide;

  for(let i = 0; i < cellsPerSide**2; i++) {
    createCell(cellSize);
  }
}

function genderateRBG() {
  const max = 256;
  const r = Math.floor(Math.random() * max);
  const g = Math.floor(Math.random() * max);
  const b = Math.floor(Math.random() * max);
  return `rgb(${r},${g},${b})`;
}

generateGrid(DEFAULT_SIZE);

