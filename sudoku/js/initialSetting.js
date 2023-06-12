const urlParams = new URLSearchParams(window.location.search);
const difficulty = urlParams.get('value');

localStorage.clear();
function createBoard() {
  const containers = document.getElementById("grid-container");
  let board = problemGeneration(difficulty);
  if(window.localStorage) {
    let json = JSON.stringify(board, undefined, 1);
    localStorage.setItem('board', json);
  }
  let count = 1;
  for (let row = 1; row <= 9; row++) {
    for (let col = 1; col <= 9; col++) {
      let cell = document.createElement('div');
      cell.classList.add('cell');
      cell.classList.add('col' + row);
      cell.classList.add('row' + col);
      let boxRow = Math.floor((row - 1) / 3);
      let boxCol = Math.floor((col - 1) / 3);
      cell.classList.add('box' + ((boxRow * 3 + boxCol) + 1));
      cell.setAttribute('id', 'No.' + count)
      cell.setAttribute('data-ans', (board[ 0 ][ row - 1 ][ col - 1 ]));
      if (board[ 1 ][ row - 1 ][ col - 1 ] != 0) {
        cell.textContent = board[ 1 ][ row - 1 ][ col - 1 ];
      }
      containers.appendChild(cell);
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
    containers.appendChild(panel);
  }
}
createBoard();
createPanel();

