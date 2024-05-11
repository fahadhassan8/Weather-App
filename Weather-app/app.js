const apiKey = 'febf2061c9c1126f8fa8e5671d98bf89';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data)

    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML = data.main.humidity + ' %';
    document.querySelector('.humidity').style.textAlign = 'center';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';
    document.querySelector('.wind').style.textAlign = 'center';


}
checkWeather()