const daysEl = document.querySelector("#days");
const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");

const newYear = "1 jan 2022";

function countdown() {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();

  const base = Math.floor((newYearDate - currentDate) / 1000);

  const minute = Math.floor(base / 60) % 60;
  const hour = Math.floor(base / 3600) % 24;
  const day = Math.floor(base / 3600 / 24);
  const second = Math.floor(base % 60);

  // console.log(second, minute, day, hour)

  daysEl.innerHTML = day;
  hoursEl.innerHTML = formatTime(hour);
  minutesEl.innerHTML = formatTime(minute);
  secondsEl.innerHTML = formatTime(second);
}

function formatTime(time){
  return time < 10 ? (`0${time}`) : time
}

countdown();

setInterval(countdown, 1000);
