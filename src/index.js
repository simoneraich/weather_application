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
function showTemperature(response) {
  console.log(response);
  document.querySelector("#current-city").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
}

function searchingCity(city) {
  let apiKey = "c95d60a1e3adbeb286133f1ebebc2579";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchingCity(city);
}

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

let searchForm = document.querySelector("#city-search");
searchForm.addEventListener("submit", handleSubmit);
