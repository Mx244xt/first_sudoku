let answer;
let cellNo;
let missCounter = 0;
let init = true;
let saveCell;
let areaHighlightOff = true;
let highlightSameNumberOff = true;
let json = localStorage.getItem('board');
let board = JSON.parse(json);
let clickedElement;

const LINE_COLOR = "#E4E6F3";
const CELL_COLOR = "#B9DEF8";
const MISS_COLOR = '#f7c1ca';
const MISS_TEXT_COLOR = '#FF0000';
const ANSWER_COLOR = '#4f7ca1';

const TARGET_ELEMENTS = document.getElementsByClassName('cell');
const body = document.body;
const SIDE_MENU = document.getElementsByClassName('side_menu');
const CLOSE_BUTTON = document.getElementsByClassName("close_button");
const MODAL = document.querySelector(".modal");

function initialization() {
  window.addEventListener('DOMContentLoaded', () => {
    targetCount();
  });
}
initialization();

function sideMenu() {
  for (let i = 0; i < CLOSE_BUTTON.length; i++) {
    CLOSE_BUTTON[ i ].addEventListener('click', () => {
      for (let i = 0; i < SIDE_MENU.length; i++) {
        SIDE_MENU[ i ].classList.toggle('close');
        MODAL.classList.toggle("modal_open");
      }
    });
  }
}
sideMenu();

document.addEventListener("click", (e) => {
  if (e.target == MODAL) {
    MODAL.classList.toggle("modal_open");
    SIDE_MENU[ 0 ].classList.toggle('close');
  }
});

const switchOuter = document.querySelector(".switch_outer");
const toggleSwitch = document.querySelector(".toggle_switch");

switchOuter.addEventListener("click", () => {
  switchOuter.classList.toggle("active");
  toggleSwitch.classList.toggle("active");
});

function highlightSameNumFlag() {
  let highlightSameNumFlag = document.getElementById('highlightSameNumber');
  highlightSameNumFlag.addEventListener('change', () => {
    console.log(highlightSameNumFlag.checked);
    if (highlightSameNumFlag.checked) {
      highlightSameNumberOff = true;
    } else {
      highlightSameNumberOff = false;
    }
    colorizeSelection(clickedElement);
  });
}
highlightSameNumFlag();

function areaHighlightFlag() {
  let areaHighlightFlag = document.getElementById('areaHighlight');
  areaHighlightFlag.addEventListener('change', () => {
    if (areaHighlightFlag.checked) {
      areaHighlightOff = true;
    } else {
      areaHighlightOff = false;
    }
    colorizeSelection(clickedElement);
  });
}
areaHighlightFlag();

function cellSelectionEvent() {
  for (let i = 0; i < TARGET_ELEMENTS.length; i++) {
    if (TARGET_ELEMENTS[ i ].textContent === "" && init) {
      colorizeSelection(TARGET_ELEMENTS[ i ]);
      clickedElement = TARGET_ELEMENTS[ i ];
      init = false;
    }
    TARGET_ELEMENTS[ i ].addEventListener('click', (event) => {
      clickedElement = event.target;
      colorizeSelection(clickedElement);
    });
  }
}
cellSelectionEvent();

function colorizeSelection(clickedElement) {
  const SAME_NUMBER = clickedElement.textContent;
  saveCell = clickedElement
  answer = clickedElement.getAttribute('data-ans');
  cellNo = clickedElement.getAttribute('id');
  const CLASS_LIST = clickedElement.classList;
  for (let i = 0; i < TARGET_ELEMENTS.length; i++) {
    TARGET_ELEMENTS[ i ].style.backgroundColor = '';
  }
  for (let j = 0; j < TARGET_ELEMENTS.length; j++) {
    const ELEMENT = TARGET_ELEMENTS[ j ];
    highlightSameNumber(ELEMENT, SAME_NUMBER)
    areaHighlight(ELEMENT, CLASS_LIST)
  }
  clickedElement.style.backgroundColor = CELL_COLOR;
}

function areaHighlight(element, classList) {
  if (!areaHighlightOff) return;
  for (let k = 1; k <= 3; k++) {
    if (element.classList.contains(classList[ k ])) {
      element.style.backgroundColor = LINE_COLOR;
    }
  }
}

function highlightSameNumber(ELEMENT, SAME_NUMBER) {
  if (!highlightSameNumberOff) return;
  if (ELEMENT.textContent == SAME_NUMBER && SAME_NUMBER != "") {
    ELEMENT.style.backgroundColor = CELL_COLOR;
  } else {
    ELEMENT.style.backgroundColor = '';
  }
}



function targetCount() {
  const TARGET_ELEMENT = document.getElementsByClassName('cell');
  let allCount = 0;
  for (let i = 1; i <= 9; i++) {
    const COUNT = occurrences(TARGET_ELEMENT, i);
    if (COUNT === 9) {
      document.getElementById('panelNo.' + i).textContent = "";
      allCount++;
      if (allCount == 9) {
        const FINISH = document.querySelectorAll(".cell");
        FINISH.forEach(fin => fin.style.backgroundColor = LINE_COLOR);
        timerPause();
        document.body.classList.add('cherry-blossom-container')
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
    inputNumber(panel.textContent);
  });
}

function inputNumber(num) {
  console.log(clickedElement)
  if (num) {
    if (num == answer) {
      clickedElement.textContent = num;
      clickedElement.style.backgroundColor = CELL_COLOR;
      clickedElement.style.color = ANSWER_COLOR;
      colorizeSelection(saveCell);
      targetCount();
    } else {
      if (!clickedElement.textContent) {
        clickedElement.textContent = num;
        clickedElement.style.backgroundColor = MISS_COLOR;
        clickedElement.style.color = MISS_TEXT_COLOR;
        missAnimetion();
        missCounter++;
        document.getElementById('miss').textContent = "miss: " + missCounter;
        setTimeout(() => {
          clickedElement.style.backgroundColor = CELL_COLOR;
          clickedElement.textContent = null;
        }, 1000);
      }
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
