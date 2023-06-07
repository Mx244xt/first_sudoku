let startTime;
let elapsedTime = 0;
let timerInterval;
let startButton = document.getElementById('startTime');
let pauseButton = document.getElementById('pauseTime');
let resetButton = document.getElementById('resetTime')

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
  if (!startTime) {
    startTime = Date.now();
  }
  timerInterval = setInterval(function () {
    const now = Date.now();
    elapsedTime += Math.floor((now - startTime) / 1000);
    startTime = now
    displayTime();
  }, 1000);
}

function timerPause() {
  pauseButton.setAttribute('hidden', 'ture');
  startButton.removeAttribute('hidden');
  resetButton.removeAttribute('hidden');
  clearInterval(timerInterval);
  startTime = 0;
}

function displayTime() {
  const hours = Math.floor(elapsedTime / 3600);
  const minutes = Math.floor((elapsedTime % 3600) / 60);
  const seconds = elapsedTime % 60;
  timer.textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`
}

function padZero(num) {
  return num.toString().padStart(2, '0');
}