/* Global Variables */
const container = document.querySelector('.container');

makeGrid(16, 16);
draw();

function makeGrid(rows, columns) {
  document.documentElement.style.setProperty('--grid-rows', rows);
  document.documentElement.style.setProperty('--grid-columns', columns);
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

function resize() {
  const newSize = prompt('Enter a number between 1 and 100:');
  if (newSize != null && newSize <= 100 && newSize > 0) {
    document.querySelectorAll('.grid-dot').forEach((item) => item.remove());
    makeGrid(newSize, newSize);
    draw();
  } else {
    alert('Please enter a valid number');
  }
}

document.getElementById('shakeBtn').onclick = shake;
document.getElementById('resizeBtn').onclick = resize;
