

const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
let timerInterval;
let isRunning = false;
let isPaused = false;



// Pomodoro timer functions

function startTimer(minutes, seconds) {
  if (isRunning) {
    return;
  }

  isRunning = true;
  isPaused = false;
  document.getElementById('pause').textContent = 'Pause';

  clearInterval(timerInterval);
  let totalSeconds = minutes * 60 + seconds;

  timerInterval = setInterval(function () {
    if (totalSeconds <= 0) {
      clearInterval(timerInterval);
      isRunning = false;
      const alarmSound = document.getElementById("alarm-sound");
      alarmSound.play();
    } else {
      if (!isPaused) {
        const remainingMinutes = Math.floor(totalSeconds / 60);
        const remainingSeconds = totalSeconds % 60;
        minutesDisplay.textContent = String(remainingMinutes).padStart(2, '0');
        secondsDisplay.textContent = String(remainingSeconds).padStart(2, '0');
        totalSeconds--;
      }
    }
  }, 1000);
}

document.getElementById('start').addEventListener('click', function () {
  if (!isRunning) {
    const minutes = parseInt(minutesDisplay.textContent);
    const seconds = parseInt(secondsDisplay.textContent);
    startTimer(minutes, seconds);
  }
});

document.getElementById('reset').addEventListener('click', function () {
  setTimer(25, 0);
  document.getElementById('reset').classList.add('rotate');
  setTimeout(() => {
    document.getElementById('reset').classList.remove('rotate');
  }, 1000);
});

document.getElementById('pomodoro-btn').addEventListener('click', function () {
  setTimer(25, 0);
});

document.getElementById('short-break-btn').addEventListener('click', function () {
  setTimer(5, 0);
});

document.getElementById('long-break-btn').addEventListener('click', function () {
  setTimer(10, 0);
});

document.getElementById('one-minute-btn').addEventListener('click', function () {
  setTimer(1, 0);
});

document.getElementById('pause').addEventListener('click', function () {
  isPaused = !isPaused;
  if (isPaused) {
    document.getElementById('pause').textContent = 'Resume';
  } else {
    document.getElementById('pause').textContent = 'Pause';
  }
});

function setTimer(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0');
  secondsDisplay.textContent = String(seconds).padStart(2, '0');
  clearInterval(timerInterval);
  isRunning = false;
  isPaused = false;
  document.getElementById('pause').textContent = 'Pause';
}
