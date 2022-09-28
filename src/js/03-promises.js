import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const { delay, step, amount } = e.currentTarget;
  let inDelay = +delay.value;
  const inStep = +step.value;
  const inAmount = +amount.value;

  for (let i = 1; i <= inAmount; i += 1) {
    createPromise(i, inDelay).then(onSuccess).catch(onError);
    inDelay += inStep;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const positionDalay = { position, delay };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(positionDalay);
      }
      reject(positionDalay);
    }, delay);
  });
}

function onSuccess({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function onError({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}
