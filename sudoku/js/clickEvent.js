let answer;
let massNo;
let missCounter = 0;
let init = 0;
let saveMass;

const targetElements = document.getElementsByClassName('mass');
for (let i = 0; i < targetElements.length; i++) {
  if (targetElements[ i ].textContent === "" && init == 0) {
    colorizeSelection(targetElements[ i ]);
    init++;
  }
  targetElements[ i ].addEventListener('click', (event) => {
    const clickedElement = event.target;
    colorizeSelection(clickedElement)
  });
}

function colorizeSelection(clickedElement) {
  const sameNumber = clickedElement.textContent
  localStorage.setItem('ans', clickedElement.getAttribute('data-ans'));
  saveMass = clickedElement
  answer = clickedElement.getAttribute('data-ans')
  massNo = clickedElement.getAttribute('id')
  const classList = clickedElement.classList;
  for (let j = 0; j < targetElements.length; j++) {
    const element = targetElements[ j ];
    element.style.backgroundColor = '';
    if (element.textContent == sameNumber && sameNumber != "") {
      element.style.backgroundColor = '#b9def8';
    } else {
      element.style.backgroundColor = '#F5F5F5';
    }
    console.log(classList);
    areaHighlight(element, classList)
    // for (let k = 1; k <= 3; k++) {
    //   if (element.classList.contains(classList[ k ])) {
    //     element.style.backgroundColor = '#e4e6f3';
    //   }
    // }
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


window.addEventListener('DOMContentLoaded', function () {
  targetCount();
});
function targetCount() {
  const targetElement = document.getElementsByClassName('mass');
  let allCount = 0;
  for (let i = 1; i <= 9; i++) {
    const count = occurrences(targetElement, i);
    if (count === 9) {
      document.getElementById('panelNo.' + i).textContent = "";
      allCount++;
      if (allCount == 9) {
        const finish = document.querySelectorAll(".mass");
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

function inputNumber(num) {
  const data = localStorage.getItem('ans');
  const ids = document.getElementById(massNo);
  console.log(saveMass);
  if (num == data) {
    ids.textContent = num;
    ids.style.backgroundColor = '#b9def8'
    ids.style.color = '#4f7ca1'
    targetCount();
    colorizeSelection(saveMass)
  } else {
    if (!ids.textContent) {
      ids.style.backgroundColor = '#f7c1ca'
      missCounter++;
      document.getElementById('miss').textContent = "miss: " + missCounter;
    }
  }
}
