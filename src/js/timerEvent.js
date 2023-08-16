let elapsedTime = 0;
let timerInterval;
const startButton = document.getElementById('startTime');
const pauseButton = document.getElementById('pauseTime');
const resetButton = document.getElementById('resetTime')

window.addEventListener('DOMContentLoaded', function () {
  timerStrat();
});
startButton.addEventListener('click', () => {
  timerStrat();
});
pauseButton.addEventListener('click', () => {
  timerPause();
});
resetButton.addEventListener('click', () => {
  location.reload();
});

function timerStrat() {
  startButton.setAttribute('hidden', 'ture');
  pauseButton.removeAttribute('hidden');
  resetButton.setAttribute('hidden', 'ture');
  timerInterval = setInterval(() => {
    elapsedTime++;
    displayTime(elapsedTime);
  }, 1000);
}

function timerPause() {
  pauseButton.setAttribute('hidden', 'ture');
  startButton.removeAttribute('hidden');
  resetButton.removeAttribute('hidden');
  clearInterval(timerInterval);
}

function displayTime(elapsedTime) {
  const hours = Math.floor(elapsedTime / 3600);
  const minutes = Math.floor((elapsedTime % 3600) / 60);
  const seconds = elapsedTime % 60;
  let CurrentTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  timer.textContent = CurrentTime;
}

function padZero(num) {
  return num.toString().padStart(2, '0');
}