let startTime;
let elapsedTime = 0;
let timerInterval;
const START_BUTTON = document.getElementById('startTime');
const PAUSE_BUTTON = document.getElementById('pauseTime');
const RESET_BUTTON = document.getElementById('resetTime')

window.addEventListener('DOMContentLoaded', function () {
  timerStrat();
});
START_BUTTON.addEventListener('click', () => {
  timerStrat();
});
PAUSE_BUTTON.addEventListener('click', () => {
  timerPause();
});
RESET_BUTTON.addEventListener('click', () => {
  location.reload();
});

function timerStrat() {
  START_BUTTON.setAttribute('hidden', 'ture');
  PAUSE_BUTTON.removeAttribute('hidden');
  RESET_BUTTON.setAttribute('hidden', 'ture');
  if (!startTime) {
    startTime = Date.now();
  }
  timerInterval = setInterval(function () {
    const DATE_NOW = Date.now();
    elapsedTime += Math.floor((DATE_NOW - startTime) / 1000);
    startTime = DATE_NOW
    displayTime();
  }, 1000);
}

function timerPause() {
  PAUSE_BUTTON.setAttribute('hidden', 'ture');
  START_BUTTON.removeAttribute('hidden');
  RESET_BUTTON.removeAttribute('hidden');
  clearInterval(timerInterval);
  startTime = 0;
}

function displayTime() {
  const HOURS = Math.floor(elapsedTime / 3600);
  const MINUTES = Math.floor((elapsedTime % 3600) / 60);
  const SECONDS = elapsedTime % 60;
  timer.textContent = `${padZero(HOURS)}:${padZero(MINUTES)}:${padZero(SECONDS)}`
}

function padZero(num) {
  return num.toString().padStart(2, '0');
}