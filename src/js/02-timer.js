import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const currentDate = (new Date()).getTime();
        const selectDate = (selectedDates[0]).getTime();
         if (selectDate > currentDate) {
         btnStart.removeAttribute('disabled');
         } else {
         Notiflix.Notify.failure('Please choose a date in the future!');
         }
    },
};   
       
const inputDate = document.querySelector("#datetime-picker");
const btnStart = document.querySelector('button[data-start]');
const leftDays = document.querySelector('span[data-days]');
const leftHours = document.querySelector('span[data-hours]');
const leftMinutes = document.querySelector('span[data-minutes]');
const leftSeconds = document.querySelector('span[data-seconds]');

const timerContainer = document.querySelector('.timer');
const fieldContainer = document.querySelectorAll(".field");

timerContainer.style.display = "flex";
timerContainer.style.gap = '15px';
timerContainer.style.marginTop = '15px';

[...fieldContainer].map(element => {
  element.style.display = "flex";
  element.style.flexDirection = "column";
  element.style.textAlign = "center";
 });

btnStart.setAttribute('disabled', true);

const fP = flatpickr(inputDate, options);

const onClick = (event) => {
   
   inputDate.disabled = true;
   btnStart.setAttribute('disabled', true);
   const timerId = setInterval(() => {
   const difTime = fP.selectedDates[0].getTime() - Date.now();
   
   if (difTime <= 0) {
    clearInterval(timerId);
   } else {
   
   const {days, hours, minutes, seconds } = convertMs(difTime);
   leftDays.textContent = addLeadingZero(days);
   leftHours.textContent = addLeadingZero(hours);
   leftMinutes.textContent = addLeadingZero(minutes);
   leftSeconds.textContent = addLeadingZero(seconds);
};
   }, 1000); 
}

btnStart.addEventListener('click', onClick);


function convertMs(ms) {
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
  
  //console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  //console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  //console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

  const addLeadingZero = (value) => {
    return `${value}`.padStart(2, '0');
  }