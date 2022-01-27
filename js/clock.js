const clock = document.querySelector("h2.clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

const day = document.querySelector("h1.days");

function getNowDays() {
  const years = new Date().getFullYear();
  const months = new Date().getMonth() + 1;
  const days = new Date().getDate();
  const week = new Date().getDay();
  const weekDays = ["일", "월", "화", "수", "목", "금", "토"];
  day.innerText = `${years}년 ${months}월 ${days}일(${weekDays[week]})`;
}

getClock();
setInterval(getClock, 1000);
getNowDays();
