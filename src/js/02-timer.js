import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const buttonStart = document.querySelector('button[data-start]');
const choseDate = document.querySelector('#datetime-picker');

buttonStart.disabled = true;

flatpickr(choseDate, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    //   console.log(selectedDates[0]);
    if (selectedDates[0] < Date.now()) {
      // console.log('date is bad');
      return Notify.failure('Дата вибрана в минулому!', {
        position: 'center-center',
      });
    }

    buttonStart.disabled = false;
    buttonStart.addEventListener('click', () => {
      if (!buttonStart.disabled) {
        return;
      }

      const timer = new Timer('.timer', selectedDates[0]);
      timer.start();
      // console.log('timer is start');
      Notify.success('Відлік почався!', { position: 'center-center' });
    });
  },
});

class Timer {
  #intervalId = null;
  #deadLine = null;
  #refs = {};

  constructor(rootSelector, deadLine) {
    this.#getRefs(rootSelector);
    this.#deadLine = deadLine;
  }

  #getRefs(rootSelector) {
    const timer = document.querySelector(rootSelector);
    this.#refs.fields = {};
    this.#refs.fields.days = timer.querySelector('[data-days]');
    this.#refs.fields.hours = timer.querySelector('[data-hours]');
    this.#refs.fields.minutes = timer.querySelector('[data-minutes]');
    this.#refs.fields.seconds = timer.querySelector('[data-seconds]');
  }

  start() {
    this.#intervalId = setInterval(() => {
      const diff = this.#deadLine.getTime() - Date.now();
      const data = this.#convertMs(diff);

      Object.entries(data).forEach(([name, value]) => {
        const item = this.#refs.fields[name];
        item.textContent = this.#addLeadingZero(value);
      });

      if (diff < 1000) {
        // console.log('time is over');
        Notify.success('Відлік закінчівся!', { position: 'center-center' });
        clearInterval(this.#intervalId);
      }
    }, 1000);
  }

  #convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  }

  #addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }
}

// flatpickr(choseDate, {
//   enableTime: true,
//   dateFormat: 'Y-m-d H:i',
//   time_24hr: true,
//   //   minDate: new Date().fp_incr(1),
// });

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// function addLeadingZero (value) {
//   return String(value).padStart(2, '0');
// }
