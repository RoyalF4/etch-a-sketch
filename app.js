const container = document.querySelector('.container');
const NUM_OF_CELLS = 256;

function createCell() {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  cell.addEventListener('mouseenter', () => {
    cell.style.backgroundColor = 'black'
  })
  container.appendChild(cell);
}

for(let i = 0; i < NUM_OF_CELLS; i++) {
  createCell();
}