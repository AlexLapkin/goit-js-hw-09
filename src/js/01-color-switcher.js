const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.body;
let timerId = null;

btnStart.addEventListener('click', () => {
       timerId = setInterval(() => {
       body.style.backgroundColor = getRandomHexColor();
       btnStart.setAttribute('disabled', true);
       btnStop.removeAttribute('disabled');
    }, 1000)
});

btnStop.addEventListener('click', () => {
    
    clearInterval(timerId);
    btnStart.removeAttribute('disabled');
    btnStop.setAttribute('disabled', true);
        });


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }