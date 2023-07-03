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
  timerInterval = setInterval(() => {
    elapsedTime++;
    displayTime(elapsedTime);
  }, 1000);
}

function timerPause() {
  PAUSE_BUTTON.setAttribute('hidden', 'ture');
  START_BUTTON.removeAttribute('hidden');
  RESET_BUTTON.removeAttribute('hidden');
  clearInterval(timerInterval);
}

function displayTime(elapsedTime) {
  const HOURS = Math.floor(elapsedTime / 3600);
  const MINUTES = Math.floor((elapsedTime % 3600) / 60);
  const SECONDS = elapsedTime % 60;
  let CurrentTime = `${padZero(HOURS)}:${padZero(MINUTES)}:${padZero(SECONDS)}`;
  timer.textContent = CurrentTime;
}

function padZero(num) {
  return num.toString().padStart(2, '0');
}