function problemGeneration(difficulty) {
  let board = [];
  for (let i = 0; i < 9; i++) {
    board[ i ] = [];
    for (let j = 0; j < 9; j++) {
      board[ i ][ j ] = 0;
    }
  }
  backtrack(board, 0, 0);
  let board2 = JSON.parse(JSON.stringify(board));
  removeCells(board2, difficulty);
  let board3 = [ board, board2 ]
  return board3;
}

function backtrack(board, row, col) {
  if (row === 9) {
    return true;
  }
  let nextRow = col === 8 ? row + 1 : row;
  let nextCol = col === 8 ? 0 : col + 1;
  let numbers = shuffleArray([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]);
  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[ i ];
    if (isValidMove(board, row, col, num)) {
      board[ row ][ col ] = num;
      if (backtrack(board, nextRow, nextCol)) {
        return true;
      }
      board[ row ][ col ] = 0;
    }
  }
  return false;
}

function isValidMove(board, row, col, num) {
  for (let i = 0; i < 9; i++) {
    if (board[ row ][ i ] === num) {
      return false;
    }
  }
  for (let j = 0; j < 9; j++) {
    if (board[ j ][ col ] === num) {
      return false;
    }
  }
  let startRow = Math.floor(row / 3) * 3;
  let startCol = Math.floor(col / 3) * 3;
  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      if (board[ startRow + x ][ startCol + y ] === num) {
        return false;
      }
    }
  }
  return true;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let temp = array[ i ];
    array[ i ] = array[ randomIndex ];
    array[ randomIndex ] = temp;
  }
  return array;
}

function removeCells(board, difficulty) {
  let numToRemove = difficulty;
  while (numToRemove > 0) {
    let row = Math.floor(Math.random() * 9);
    let col = Math.floor(Math.random() * 9);
    if (board[ row ][ col ] !== 0) {
      board[ row ][ col ] = 0;
      numToRemove--;
    }
  }
}