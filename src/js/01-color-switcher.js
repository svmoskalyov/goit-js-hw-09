const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
let intervalId = null;

buttonStart.addEventListener('click', onStartClick);
buttonStop.addEventListener('click', onStopClick);

function onStartClick() {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  buttonStart.disabled = true;
}

function onStopClick() {
  clearInterval(intervalId);
  buttonStart.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
