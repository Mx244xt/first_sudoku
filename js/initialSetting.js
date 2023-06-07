const urlParams = new URLSearchParams(window.location.search);
const difficulty = urlParams.get('value');

console.log(difficulty); // 'value1'

// const difficulty = 3;
localStorage.clear();
function createBoard() {
  const containers = document.getElementById("grid-container");
  let board = problemGeneration(difficulty);
  let count = 1;
  for (let row = 1; row <= 9; row++) {
    for (let col = 1; col <= 9; col++) {
      let mass = document.createElement('div');
      mass.classList.add('mass');
      mass.classList.add('col' + row);
      mass.classList.add('row' + col);
      let indexRow = Math.floor((row - 1) / 3);
      let indexCol = Math.floor((col - 1) / 3);
      mass.classList.add('index' + ((indexRow * 3 + indexCol) + 1));
      // mass.setAttribute('onclick', 'boardSelection()');
      mass.setAttribute('id', 'No.' + count)
      mass.setAttribute('data-ans', (board[ 0 ][ row - 1 ][ col - 1 ]));
      if (board[ 1 ][ row - 1 ][ col - 1 ] != 0) {
        mass.textContent = board[ 1 ][ row - 1 ][ col - 1 ];
      }
      containers.appendChild(mass);
      count++;
    }
  }
}

function createPanel() {
  const containers = document.getElementById("inputPanel-container");
  for (let i = 1; i <= 9; i++) {
    let panel = document.createElement('button');
    panel.classList.add('panel');
    panel.textContent = i;
    panel.setAttribute('id', 'panelNo.' + i)
    panel.setAttribute('onclick', 'inputNumber(' + i + ')');
    containers.appendChild(panel);
  }
}
createBoard();
createPanel();

