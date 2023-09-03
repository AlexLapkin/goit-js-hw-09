const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.body;

btnStart.addEventListener('click', () => {
       const timerId = setInterval(() => {
       body.style.backgroundColor = getRandomHexColor();
       btnStart.setAttribute('disabled', true);
       btnStop.removeAttribute('disabled');
    }, 1000)
});

btnStop.addEventListener('click', () => {
    
    btnStart.removeAttribute('disabled');
    btnStop.setAttribute('disabled', true);
    clearInterval(timerId);
    });


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }