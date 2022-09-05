let currentTime = new Date();
let h4 = document.querySelector("h4");
h4.innerHTML = formatedTime(currentTime);

function formatedTime(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return `${days[dayIndex]} ${hours}:${minutes}`;
}

function searchingCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let h3 = document.querySelector("#current-city");
  h3.innerHTML = cityInput.value;
}

let citySearch = document.querySelector("#city-search");
citySearch.addEventListener("submit", searchingCity);

function changetoC(event) {
  event.preventDefault();
  let shownTemp = document.querySelector("#temp");
  shownTemp.innerHTML = 20;
}
let celciusTemp = document.querySelector("#celcius");
celciusTemp.addEventListener("click", changetoC);

function changetoF(event) {
  event.preventDefault();
  let shownTemp = document.querySelector("#temp");
  shownTemp.innerHTML = 68;
}
let fahrenheitTemp = document.querySelector("#fahrenheit");
fahrenheitTemp.addEventListener("click", changetoF);

let apiKey = "c95d60a1e3adbeb286133f1ebebc2579";
let city = document.querySelector("#city-search");
citySearch.addEventListener("submit", searchingCity);
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let city = response.data.name;
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = city;
  let temp = document.querySelector("#temp");

  temp.innerHTML = `${temperature} °C`;
}
axios.get(apiUrl).then(showTemperature);
