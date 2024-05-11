let body = document.body;
body.style.backgroundImage = "url(./assets/images/bg-image.jpg)";
body.style.backgroundSize = "cover";
// body.style.backgroundPosition = "center";

let weather = document.querySelector(".weather");
weather.style.display = "none";

let invalidCityError = document.querySelector(".invalidCityError");
invalidCityError.style.marginTop = "10px";
invalidCityError.style.textAlign = "center";
invalidCityError.style.display = "none";

const apiKey = "febf2061c9c1126f8fa8e5671d98bf89";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let weather_icon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + `&appid=${apiKey}` + "&q=" + city);
  if (response.status == 404) {
    invalidCityError.style.display = "block";
    weather.style.display = "none";
  } else {
    let data = await response.json();
    // console.log(data)
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".humidity").style.textAlign = "center";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".wind").style.textAlign = "center";

    if (data.weather[0].main == "Clouds") {
      weather_icon.src = "./assets/images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weather_icon.src = "./assets/images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weather_icon.src = "./assets/images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weather_icon.src = "./assets/images/mist.png";
    } else if (data.weather[0].main == "Rain") {
      weather_icon.src = "./assets/images/rain.png";
    } else if (data.weather[0].main == "Snow") {
      weather_icon.src = "./assets/images/snow.png";
    }
    weather.style.display = "block";
    invalidCityError.style.display = "none";
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
// function searchCity(){
//     checkWeather(searchBox.value)
// }
// searchBtn.addEventListener('click',searchCity)
