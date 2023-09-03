import Notiflix from 'notiflix';

const formInput = document.querySelector('.form');

const onSubmit = (evt) => {
  
  evt.preventDefault();
  const { delay, step, amount } = formInput.elements;
  //const { delay, step, amount } = evt.currentTarget.elements;
  
  if (delay.value < 0 || step.value < 0 || amount.value < 0) {
    
  Notiflix.Notify.warning(`❗ Please don't enter a negative number`);
  } else {
    for (let i = 0; i < amount.value; i += 1) {
      
      const sumDelay = Number(delay.value) + (step.value * i);
      let position = i + 1;

      createPromise(position, sumDelay)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
        });
    }
  }
formInput.reset();
//evt.currentTarget.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

formInput.addEventListener('submit', onSubmit);