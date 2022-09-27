const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
let intervalId = null;
let isActive = false;

buttonStart.addEventListener('click', onStartClick);
buttonStop.addEventListener('click', onStopClick);

function onStartClick() {
  if (isActive) {
    return;
  }

  isActive = true;
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopClick() {
  clearInterval(intervalId);
  isActive = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
