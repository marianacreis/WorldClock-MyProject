function updateTime() {
  let londonElement = document.querySelector("#london");
  let londonDate = londonElement.querySelector(".date");
  let londonTime = londonElement.querySelector(".time");
  let london = moment().tz("Europe/London");
  londonDate.innerHTML = london.format("MMMM Do YYYY");
  londonTime.innerHTML = london.format("H:mm:ss [<small>]A[</small>]");

  let newYorkElement = document.querySelector("#newYork");
  let newYorkDate = newYorkElement.querySelector(".date");
  let newYorkTime = newYorkElement.querySelector(".time");
  let newYork = moment().tz("America/New_York");
  newYorkDate.innerHTML = newYork.format("MMMM Do YYYY");
  newYorkTime.innerHTML = newYork.format("H:mm:ss [<small>]A[</small>]");

  let sydneyElement = document.querySelector("#sydney");
  let sydneyDate = sydneyElement.querySelector(".date");
  let sydneyTime = sydneyElement.querySelector(".time");
  let sydney = moment().tz("Australia/Sydney");
  sydneyDate.innerHTML = sydney.format("MMMM Do YYYY");
  sydneyTime.innerHTML = sydney.format("H:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
