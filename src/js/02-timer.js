import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const buttonStart = document.querySelector('button[data-start]');
const choseDate = document.querySelector('#datetime-picker');

// buttonStart.disabled = true;

buttonStart.addEventListener('click', onButtonStartClick);

function onButtonStartClick() {
  console.log('click start');
}

flatpickr(choseDate, {
  enableTime: true,
  dateFormat: 'Y-m-d H:i',
  time_24hr: true,
  //   minDate: new Date().fp_incr(1),
});
