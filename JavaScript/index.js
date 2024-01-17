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

  let johannesburgElement = document.querySelector("#johannesburg");
  let johannesburgDate = johannesburgElement.querySelector(".date");
  let johannesburgTime = johannesburgElement.querySelector(".time");
  let johannesburg = moment().tz("Africa/Johannesburg");
  johannesburgDate.innerHTML = johannesburg.format("MMMM Do YYYY");
  johannesburgTime.innerHTML = johannesburg.format(
    "H:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);

function showCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let citiesElement = document.querySelector("#cities");
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];

  let cityTime = moment().tz(cityTimeZone);
  citiesElement.innerHTML = ` <div class="city" id="${cityTimeZone}">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div>
          <div class="time">${cityTime.format(
            "H:mm [<small>]A[</small>]"
          )}</div>
        </div>
      </div>
      <a href="index.html" class="back-button">< Back to all cities<a/>
      `;
}

let select = document.querySelector("#select");
select.addEventListener("change", showCity);
