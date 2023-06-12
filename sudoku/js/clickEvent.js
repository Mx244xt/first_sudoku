let answer;
let cellNo;
let missCounter = 0;
let init = true;
let saveCell;

let json = localStorage.getItem('board');
let board = JSON.parse(json);

window.addEventListener('DOMContentLoaded', () => {
  targetCount();
});

const TARGET_ELEMENTS = document.getElementsByClassName('cell');
for (let i = 0; i < TARGET_ELEMENTS.length; i++) {
  if (TARGET_ELEMENTS[ i ].textContent === "" && init) {
    colorizeSelection(TARGET_ELEMENTS[ i ]);
    init = false;
  }
  TARGET_ELEMENTS[ i ].addEventListener('click', (event) => {
    const clickedElement = event.target;
    colorizeSelection(clickedElement);
  });
}

function colorizeSelection(clickedElement) {
  const sameNumber = clickedElement.textContent
  saveCell = clickedElement
  answer = clickedElement.getAttribute('data-ans');
  cellNo = clickedElement.getAttribute('id');
  const classList = clickedElement.classList;
  for (let i = 0; i < TARGET_ELEMENTS.length; i++) {
    TARGET_ELEMENTS[ i ].style.backgroundColor = '#F5F5F5';
  }
  for (let j = 0; j < TARGET_ELEMENTS.length; j++) {
    const element = TARGET_ELEMENTS[ j ];
    highlightSameNumber(element, sameNumber)
    areaHighlight(element, classList)
  }
  clickedElement.style.backgroundColor = '#b9def8';
}

function areaHighlight(element, classList) {
  for (let k = 1; k <= 3; k++) {
    if (element.classList.contains(classList[ k ])) {
      element.style.backgroundColor = '#e4e6f3';
    }
  }
}

function highlightSameNumber(element, sameNumber) {
  if (element.textContent == sameNumber && sameNumber != "") {
    element.style.backgroundColor = '#b9def8';
  } else {
    element.style.backgroundColor = '#F5F5F5';
  }
}



function targetCount() {
  const targetElement = document.getElementsByClassName('cell');
  let allCount = 0;
  for (let i = 1; i <= 9; i++) {
    const count = occurrences(targetElement, i);
    if (count === 9) {
      document.getElementById('panelNo.' + i).textContent = "";
      allCount++;
      if (allCount == 9) {
        const finish = document.querySelectorAll(".cell");
        finish.forEach(fin => fin.style.backgroundColor = '#e4e6f3');
        timerPause();
        const sakura = document.getElementById('container');
        sakura.classList.add('cherry-blossom-container');
        cherryBlossom();
      }
    }
  }
}

function occurrences(matrix, num) {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[ i ].textContent == num) {
      count++;
    }
  }
  return count;
}

let panels = document.getElementsByClassName('panel');
for (let i = 0; i < panels.length; i++) {
  panels[ i ].addEventListener('click', (event) => {
    let panel = event.target;
    inputNumber(panel.textContent)
  });
}

function inputNumber(num) {
  if (num) {
    const ids = document.getElementById(cellNo);
    if (num == answer) {
      ids.textContent = num;
      ids.style.backgroundColor = '#b9def8'
      ids.style.color = '#4f7ca1'
      targetCount();
      colorizeSelection(saveCell)
    } else {
      if (!ids.textContent) {
        ids.textContent = num;
        ids.style.backgroundColor = '#f7c1ca'
        ids.style.color = 'red'
        missAnimetion(ids);
        missCounter++;
        document.getElementById('miss').textContent = "miss: " + missCounter;
        setTimeout(() => {
          ids.style.backgroundColor = '#b9def8'
          ids.textContent = null;
        }, 3000);
      }
    }
  }

  function missAnimetion() {
    document.getElementById(cellNo).animate([
      {
        offset: 0.00,
        transform: 'translate(0, 0)'
      },
      {
        offset: 0.05,
        transform: 'translate(-10%, 0)'
      },
      {
        offset: 0.10,
        transform: 'translate(10%, 0)'
      },
      {
        offset: 0.15,
        transform: 'translate(-10%, 0)'
      },
      {
        offset: 0.20,
        transform: 'translate(10%, 0)'
      },
      {
        offset: 0.25,
        transform: 'translate(-10%, 0)'
      },
      {
        offset: 0.30,
        transform: 'translate(0, 0)'
      },
      {
        offset: 1.00,
        transform: 'translate(0, 0)'
      }
    ],
      {
        duration: 3000,
      }
    );
  }
}
