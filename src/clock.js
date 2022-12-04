const clock = document.querySelector("#clock");
const calendar = document.querySelector("#calendar");

const date = new Date();

function getDay() {
  const date = new Date();
  const year = String(date.getFullYear()).padStart(2, "0");
  const month = String(date.getMonth()).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfweek = week[date.getDay()];
  calendar.innerHTML = `${year} ${month} ${day} ${dayOfweek}`;
}

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

getClock();
getDay();
setInterval(getClock, 1000);
