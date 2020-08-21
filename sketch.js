/* Global Variables */
const container = document.querySelector('.container');

makeGrid(16, 16);
draw();

function makeGrid(rows, columns) {
  for (let i = 0; i < rows * columns; i++) {
    const dot = document.createElement('div');
    container.appendChild(dot);
    dot.classList.add('grid-dot');
  }
}

function draw() {
  const dots = document.querySelectorAll('.grid-dot');
  dots.forEach((dot) => {
    dot.addEventListener('mouseover', () => {
      dot.classList.add('draw');
    });
  });
}

function shake() {
  const dots = document.querySelectorAll('.grid-dot');
  dots.forEach((dot) => dot.classList.remove('draw'));
}

document.getElementById('shakeBtn').onclick = shake;
