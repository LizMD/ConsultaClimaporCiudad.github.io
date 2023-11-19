const apiKey = "f93fa5c08d90e41162d7410d890b1657";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "imagenes/clouds.png";
    } else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "imagenes/clear.png";
    } else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "imagenes/rain.png";
    } else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "imagenes/drizzle.png";
    } else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "imagenes/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

